<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card class="px-5 pb-2">
        <v-card-title class="mb-n1 ml-n3">
          <v-icon class="mr-1" v-if="!add">edit</v-icon>
          <v-icon class="mr-1" v-if="add" size="30px">add</v-icon>
          <h4 v-if="!add">Update counselling</h4>
          <h4 v-if="add">Add counselling</h4>
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
        <!-- <v-file-input
          v-model="request.Image"
          label="Add an image"
          outlined
          dense
          :prepend-icon="null"
          prepend-inner-icon="add_a_photo"
          class="mt-5"
        ></v-file-input> -->

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

        <!-- <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :return-value.sync="time"
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Select duration"
              prepend-inner-icon="schedule"
              readonly
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
            ampm-in-title
          ></v-time-picker>
        </v-menu> -->
        <v-divider></v-divider>
        <v-card-actions class="mt-3">
          <v-spacer></v-spacer>
          <v-btn text class="text-capitalize mr-2" @click="close">
            Close
          </v-btn>
          <v-btn
            v-if="!add"
            depressed
            color="primary"
            class="text-capitalize"
            @click="save(counsellingId)"
          >
            Update
          </v-btn>

          <v-btn
            v-if="add"
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

import {
  AdminEditCounsellingModel,
  AdminAddCounsellingModel,
  AdminCounselingTypeModel,
} from "@/model";
import { IDashboardService } from "@/service";
@Component({
  components: {},
})
export default class EditCounselling extends Vue {
  @Inject("dashboardService") dashboardService: IDashboardService;

  @Prop() counsellingId: string;
  @Prop() add: string;

  public request: AdminEditCounsellingModel = new AdminEditCounsellingModel();
  public addRequest: AdminAddCounsellingModel = new AdminAddCounsellingModel();

  public dialog: boolean = true;
  public time: number = null;
  public menu2: boolean = false;
  public profilePhoto: any = null;

  created() {
    if (this.add) this.request = new AdminEditCounsellingModel();
    else this.counsellingType();
  }

  public counsellingType() {
    this.dashboardService.getCounsellingType().then((res) => {
      this.request = res.data.filter((a: any) => {
        return a.Id === this.counsellingId;
      })[0];
      console.log(this.request);
      if (this.request.Image) {
        fetch(this.$vuehelper.getImageUrl(this.request.Image))
          .then((res) => res.blob())
          .then((blob) => {
            this.profilePhoto = new File([blob], this.request.Name, {
              type: "image/png",
            });
          });
      }
    });
  }
  public save(id: string) {
    this.request.Id = id;
    this.request.Image = this.profilePhoto;

    this.dashboardService
      .EditCounsellingType(this.request, id)
      .then((res) => {
        console.log(res);
        this.$emit("save");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  public AddCounselling() {
    this.$emit("add");
    this.request.Image = this.profilePhoto;
    this.addRequest = { ...this.request, ProductId: null };
    this.dashboardService.AddCounsellingType(this.addRequest).then((res) => {
      console.log(res);
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
