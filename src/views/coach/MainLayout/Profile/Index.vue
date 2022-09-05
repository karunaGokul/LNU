<template>
  <!-- <div
    style="background: linear-gradient(180deg, #5949b8 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="align-start pt-15 mx-15" style="height: 100vh">
      <v-col class="pt-10">
        <h1>Hello Coach, ABC!</h1>
        <v-row class="mt-2">
          <v-col class="d-flex">
            <div>
              <v-icon size="7rem" class="mr-3">account_circle</v-icon>
            </div>
            <div>
              <h2>ABC</h2>
              <p>Lorem Ipsum Coach</p>
              <p>
                Rating
                <span> </span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="align-self-center">
        <v-form @submit.prevent="profile" lazy-validation>
          <v-text-field
            label="Full Name"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.fullName"
            @input="$v.request.fullName.$touch()"
            @blur="$v.request.fullName.$touch()"
            :error-messages="$v.request.fullName | errorMessages('Full Name')"
          ></v-text-field>
          <v-text-field
            label="Qualifications"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.qualifications"
            @input="$v.request.qualifications.$touch()"
            @blur="$v.request.qualifications.$touch()"
            :error-messages="
              $v.request.qualifications | errorMessages('Qualifications')
            "
          ></v-text-field>
          <v-text-field
            label="Experience (years)"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.experience"
            @input="$v.request.experience.$touch()"
            @blur="$v.request.experience.$touch()"
            :error-messages="
              $v.request.experience | errorMessages('Experience')
            "
          ></v-text-field>
          <v-select
            label="Counselling Type"
            color="#5949B8"
            filled
            dense
            :items="counselingProgram"
            item-text="Name"
            item-value="Id"
            v-model="request.counsellingType"
            @change="$v.request.counsellingType.$touch()"
            @blur="$v.request.counsellingType.$touch()"
            required
            :error-messages="
              $v.request.counsellingType | errorMessages('Counseling Type')
            "
          ></v-select>
          <v-text-field
            label="Upcoming Appointments"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.upcomingAppointments"
            @input="$v.request.upcomingAppointments.$touch()"
            @blur="$v.request.upcomingAppointments.$touch()"
            :error-messages="
              $v.request.upcomingAppointments
                | errorMessages('Upcoming Appointments')
            "
          ></v-text-field>
          <v-text-field
            label="Payouts"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.payouts"
            @input="$v.request.payouts.$touch()"
            @blur="$v.request.payouts.$touch()"
            :error-messages="$v.request.payouts | errorMessages('Payouts')"
          ></v-text-field>
          <div class="d-flex justify-end mt-5">
            <v-btn
              color="#5949B8"
              class="primary"
              type="submit"
            >
              Save
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
    <router-view />
  </div> -->
  <v-row class="d-flex align-center justify-center" style="height: 100vh">
    <v-col cols="4" sm="12" md="5">
      <v-card width="608" elevation="0" color="transparent">
        <v-card-title class="justify-center">
          <h4 class="text-h4 font-weight-bold pa-4">Hey, Coach!</h4>
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
            <v-icon v-else x-large color="#E0E0E0" style="font-size: 16rem">
              account_circle
            </v-icon>
            <input
              type="file"
              ref="profileUpload"
              @change="uploadProfile"
              class="d-none"
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
      </v-card>
    </v-col>
    <v-col cols="8" sm="12" md="7" class="pa-8">
      <v-form class="ma-10 pa-5" @submit.prevent="updateProfile">
        <v-text-field
          label="Full Name"
          type="text"
          color="primary"
          filled
          dense
          required
          v-model="request.Name"
          @input="$v.request.Name.$touch()"
          @blur="$v.request.Name.$touch()"
          :error-messages="$v.request.Name | errorMessages('Name')"
        ></v-text-field>
        <v-text-field
          label="Experience(Years)"
          type="text"
          color="primary"
          filled
          dense
          required
          v-model="request.Experience"
          @input="$v.request.Experience.$touch()"
          @blur="$v.request.Experience.$touch()"
          :error-messages="$v.request.Experience | errorMessages('Experience')"
        ></v-text-field>
        <v-select
          label="Counselling Programm"
          color="#5949B8"
          filled
          dense
          :items="counselingProgram"
          item-text="Name"
          item-value="Id"
          v-model="request.CounselingType"
          return-object
        ></v-select>
        <v-file-input
          label="Qualifications"
          prepend-inner-icon="upload"
          class="ml-n8"
          chips 
          multiple
          filled
          dense
        ></v-file-input>
        <div class="text-end">
          <v-btn color="primary" class="text-capitalize" rounded type="submit">
            Save
          </v-btn>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { helpers, required } from "vuelidate/lib/validators";

import BaseComponent from "@/components/base/BaseComponent";

import {
  ClientRequestModel,
  CoachResponseModel,
  CounselingModel,
} from "@/model";

import { IProfileService } from "@/service";

const alphaOnly = helpers.regex("alphaOnly", /^[a-z A-Z]*$/i);

@Component({
  validations: {
    request: {
      Name: { required, alphaOnly },
      Experience: { required },
    },
  },
})
export default class Profile extends BaseComponent {
 @Inject("profileService") profileService: IProfileService;

  public request: CoachResponseModel = new CoachResponseModel();
  // public CounselingTypes: Array<CounselingModel> = [];

  public profilePhoto: any = null;

  mounted() {
    this.getProfile();
  }

  public getProfile() {
    this.loadingSpinner("show");
    let profile = new ClientRequestModel();
    profile.id = this.userInfo.Id;
    this.profileService
      .getProfileCoach(profile)
      .then((response) => {
        this.loadingSpinner("hide");
        this.request = response;

        if (this.request.Image) {
          fetch(this.$vuehelper.getImageUrl(this.request.Image))
            .then((res) => res.blob())
            .then((blob) => {
              this.profilePhoto = new File([blob], this.request.Name, {
                type: "image/png",
              });
            });
        }
      })
      .catch((err) => {
        this.loadingSpinner("hide");
        console.log(err);
      });
  }

  public updateProfile() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.request.Id = this.userInfo.Id;
      console.log(this.request);
      this.loadingSpinner("show");
      this.profileService.updateProfileCoach(this.profilePhoto, this.request).then(
        (response: CoachResponseModel) => {
          this.loadingSpinner("hide");
          this.getProfile();
        },
        (err) => {
          this.loadingSpinner("hide");
          if (err.response.status === 400) {
            // this.snackbarText = err.response.data;
            // this.snackbar = true;
          }
        }
      );
    }
  }
  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }

 
  get userInfo() {
    return this.$store.getters.userInfo;
  }

  public openProfileUpload() {
    let file: any = this.$refs.profileUpload;

    file.click();
  }

  public uploadProfile(event: any) {
    let file: File = event.target.files[0];
    if (!file) return;

    this.profilePhoto = file;
  }
  get viewImage() {
    return this.profilePhoto
      ? window.URL.createObjectURL(this.profilePhoto)
      : null;
  }
}
</script>
