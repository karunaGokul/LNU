<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 font-weight-bold">
          <v-icon :size="modelType == 'Add' ? '30px' : ''">{{
            modelType == 'Add' ? "add" : "edit"
          }}</v-icon>
          {{ modelType == 'Add' ? "Add" : "Update" }} Counseling Program

          <v-spacer></v-spacer>
          <v-icon class="mr-n3" @click="close">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text class="pa-4">
          <div class="position-relative text-center pa-0">
            <img
              :src="viewImage"
              alt="Profile Image"
              width="100%"
              height="200"
              v-if="profilePhoto"
            />

            <v-card v-else outlined full-width height="200"> </v-card>
            <input
              type="file"
              ref="profileUpload"
              class="d-none"
              @change="uploadProfile"
            />

            <v-btn
              color="primary text-center"
              absolute
              style="right: 165px; bottom: 75px"
              @click.stop="openProfileUpload()"
              >Upload File
            </v-btn>
          </div>
          <v-text-field
            v-model="request.Name"
            label="Title"
            color="primary"
            dense
            required
            outlined
            class="mt-4"
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
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text class="text-capitalize mr-2" @click="close">
            Close
          </v-btn>

          <v-btn
            depressed
            color="primary"
            class="text-capitalize px-12 py-5"
            @click="AddCounsellingProgram"
          >
            {{ modelType == 'Add' ? "Add Progam" : "Update Progam" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Inject } from "vue-property-decorator";

import { DashboardResponseModel } from "@/model";
import { IDashboardService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";
@Component({
  components: {},
})
export default class EditCounselling extends BaseComponent {
  @Inject("dashboardService") dashboardService: IDashboardService;

  @Prop() response: DashboardResponseModel;
  @Prop() modelType: string;

  public request: DashboardResponseModel = new DashboardResponseModel();
  public dialog: boolean = true;
  public time: number = null;
  public menu2: boolean = false;
  public profilePhoto: any = null;

  created() {
    if (!this.response) return;
    this.request = this.$vuehelper.clone(this.response);

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

  public AddCounsellingProgram() {
    let path = this.modelType == 'Add' ? 'AddCounsellingProgram' : 'EditCounsellingProgram';
    this.request.Image = this.profilePhoto;
    this.loadingSpinner("show");
    this.dashboardService
      .AddCounsellingProgram(path, this.request)
      .then((res) => {
        this.loadingSpinner("hide");
        this.$emit("counselingProgamAdded");
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
