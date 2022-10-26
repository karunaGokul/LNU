<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card class="px-5 pb-2">
        <v-card-title class="mb-n1 ml-n3">
          <v-icon class="mr-1" v-if="!addCounselling">edit</v-icon>
          <v-icon class="mr-1" v-if="addCounselling" size="30px">add</v-icon>
          <h4 v-if="!addCounselling">Update counselling</h4>
          <h4 v-if="addCounselling">Add counselling</h4>
          <v-spacer></v-spacer>
          <v-icon class="mr-n3" @click="close">close</v-icon>
        </v-card-title>

        <v-card-text>
          <div class="position-relative text-center pa-4">
            <img
              :src="viewImage"
              alt="Profile Image"
              width="120"
              height="130"
              v-if="profilePhoto"
            />

            <v-icon v-else x-large color="#E0E0E0" style="font-size: 12rem">
              account_circle
            </v-icon>
            <input
              type="file"
              ref="profileUpload"
              class="d-none"
              @change="uploadProfile"
            />
            <v-btn
              color="primary"
              fab
              absolute
              style="right: 130px; bottom: 60px"
              @click.stop="openProfileUpload()"
            >
              <v-icon>photo_camera</v-icon>
            </v-btn>
          </div>
        </v-card-text>

        <v-text-field
          v-model="request.Name"
          label="Title"
          color="primary"
          dense
          required
          outlined
        ></v-text-field>
        <v-textarea
          v-model="request.Description"
          dense
          name="input-7-4"
          label="Description"
          outlined
        ></v-textarea>
        <v-textarea
          v-model="request.Summary"
          dense
          name="input-7-4"
          label="Summary"
          outlined
        ></v-textarea>
        <v-row>
          <v-col>
            <v-text-field
              v-model="request.Duration"
              label="Duration"
              outlined
              dense
              prepend-inner-icon="schedule"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="request.Cost"
              label="Cost"
              outlined
              dense
              prepend-inner-icon="currency_rupee"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-card-actions class="mt-3">
          <v-spacer></v-spacer>
          <v-btn text class="text-capitalize mr-2" @click="close">
            Close
          </v-btn>
          <v-btn
            v-if="!addCounselling"
            depressed
            color="primary"
            class="text-capitalize"
            @click="save(counsellingProgramData.Id)"
          >
            Update
          </v-btn>

          <v-btn
            v-if="addCounselling"
            depressed
            color="primary"
            class="text-capitalize"
            @click="AddCounselling"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

import { AdminCounselingTypeModel } from "@/model";
import { IDashboardService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";
@Component({
  components: {},
})
export default class EditCounselling extends BaseComponent {
  @Inject("dashboardService") dashboardService: IDashboardService;

  @Prop() counsellingProgramData: AdminCounselingTypeModel;
  @Prop() addCounselling: string;

  public request: AdminCounselingTypeModel = new AdminCounselingTypeModel();

  public dialog: boolean = true;
  public time: number = null;
  public menu2: boolean = false;
  public profilePhoto: any = null;

  created() {
    if (!this.counsellingProgramData) return;
    this.counsellingType();
  }

  public counsellingType() {
    this.request = this.counsellingProgramData;
    if (this.request.Image) {
      fetch(this.$vuehelper.getImageUrl(this.request.Image))
        .then((res) => res.blob())
        .then((blob) => {
          this.profilePhoto = new File([blob], this.request.Name, {
            type: "image/png",
          });
        });
    }
  }
  public save(id: string) {
    this.request.Image = this.profilePhoto;
    this.loadingSpinner("show");
    this.dashboardService
      .EditCounsellingType(this.request, id)
      .then((res) => {
        this.loadingSpinner("hide");
        this.$emit("save");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public AddCounselling() {
    this.request.Image = this.profilePhoto;
    this.loadingSpinner("show");
    this.dashboardService
      .AddCounsellingType(this.request)
      .then((res) => {
        this.loadingSpinner("hide");
        this.$emit("addCounselling");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  public close() {
    this.$emit("close");
  }
  public uploadProfile(event: any) {
    let file: File = event.target.files[0];
    if (!file) return;
    this.profilePhoto = file;
  }
  public openProfileUpload() {
    let file: any = this.$refs.profileUpload;
    file.click();
  }
  get viewImage() {
    return this.profilePhoto
      ? window.URL.createObjectURL(this.profilePhoto)
      : null;
  }
}
</script>
