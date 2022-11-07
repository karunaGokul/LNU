<template>
  <v-dialog v-model="dialog" persistent width="500">
    <v-card>
      <v-card-title class="text-h6 font-weight-bold">
        <v-icon class="mr-2" :size="modelType == 'Add' ? '30px' : ''">{{
          modelType == "Add" ? "add" : "edit"
        }}</v-icon>
        {{ modelType == "Add" ? "Add" : "Update" }} Counseling Program

        <v-spacer></v-spacer>
        <v-icon class="mr-n3" @click="close">close</v-icon>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text class="pa-4 overflow-auto" style="height: 500px">
        <v-card class="position-relative" height="200" elevation="1">
          <img
            :src="viewImage"
            alt="Profile Image"
            width="100%"
            height="200"
            v-if="profilePhoto"
          />
          <input
            type="file"
            ref="profileUpload"
            class="d-none"
            @change="uploadProfile"
          />
          <v-btn
            absolute
            class="position-right"
            dark
            @click="removeImage"
            icon
            color="black"
            v-if="profilePhoto"
          >
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn
            v-else
            absolute
            class="position-center"
            color="primary"
            outlined
            @click.stop="openProfileUpload()"
            >Upload File
          </v-btn>
        </v-card>

        <v-text-field
          label="Title"
          color="primary"
          dense
          required
          outlined
          class="mt-4"
          v-model="request.Name"
          @input="$v.request.Name.$touch()"
          @blur="$v.request.Name.$touch()"
          :error-messages="$v.request.Name | errorMessages('Name')"
        ></v-text-field>
        <v-textarea
          dense
          name="input-7-4"
          label="Description"
          outlined
          v-model="request.Description"
          @input="$v.request.Description.$touch()"
          @blur="$v.request.Description.$touch()"
          :error-messages="
            $v.request.Description | errorMessages('Description')
          "
        ></v-textarea>
        <v-textarea
          v-model="request.Summary"
          dense
          name="input-7-4"
          label="Summary"
          outlined
          @input="$v.request.Summary.$touch()"
          @blur="$v.request.Summary.$touch()"
          :error-messages="$v.request.Summary | errorMessages('Summary')"
        ></v-textarea>
        <v-row>
          <v-col>
            <v-text-field
              label="Duration"
              outlined
              dense
              prepend-inner-icon="schedule"
              v-model="request.Duration"
              @input="$v.request.Duration.$touch()"
              @blur="$v.request.Duration.$touch()"
              :error-messages="$v.request.Duration | errorMessages('Duration')"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Cost"
              outlined
              dense
              prepend-inner-icon="currency_rupee"
              v-model="request.Cost"
              @input="$v.request.Cost.$touch()"
              @blur="$v.request.Cost.$touch()"
              :error-messages="$v.request.Cost | errorMessages('Cost')"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text class="text-capitalize mr-2" @click="close"> Close </v-btn>

        <v-btn
          depressed
          color="primary"
          class="text-capitalize px-12 py-5"
          @click="AddCounsellingProgram"
        >
          {{ modelType == "Add" ? "Add Progam" : "Update Progam" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Inject } from "vue-property-decorator";
import { required, numeric } from "vuelidate/lib/validators";
import { DashboardResponseModel } from "@/model";
import { IDashboardService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";
@Component({
  validations: {
    request: {
      Name: { required },
      Description: { required },
      Summary: { required },
      Duration: { required, numeric },
      Cost: { required, numeric },
    },
  },
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
    this.$v.$touch();
    if (!this.$v.$invalid && this.profilePhoto) {
      let path =
        this.modelType == "Add"
          ? "AddCounsellingProgram"
          : "EditCounsellingProgram";
      this.request.Image = this.profilePhoto;
      this.loadingSpinner("show");
      this.dashboardService
        .AddCounsellingProgram(path, this.request)
        .then((response) => {
          this.loadingSpinner("hide");
          this.$emit("counselingProgamAdded", response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public close() {
    this.$emit("close");
  }

  public removeImage() {
    this.request.Image = null;
    this.profilePhoto = this.request.Image;
    console.log(this.request);
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
