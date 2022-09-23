<template>
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
    <v-col cols="8" sm="12" md="7">
      <v-form class="ma-10 pa-5" @submit.prevent="updateProfile">
        <v-row>
          <v-col>
            <v-text-field
              label="First Name"
              color="primary"
              filled
              dense
              required
              v-model="request.FirstName"
              @input="$v.request.FirstName.$touch()"
              @blur="$v.request.FirstName.$touch()"
              :error-messages="
                $v.request.FirstName | errorMessages('FirstName')
              "
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Last Name"
              color="primary"
              filled
              dense
              required
              v-model="request.LastName"
              @input="$v.request.LastName.$touch()"
              @blur="$v.request.LastName.$touch()"
              :error-messages="$v.request.LastName | errorMessages('LastName')"
            ></v-text-field>
          </v-col>
        </v-row>
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
          label="Email"
          color="primary"
          filled
          dense
          required
          v-model="request.Email"
          @input="$v.request.Email.$touch()"
          @blur="$v.request.Email.$touch()"
          :error-messages="$v.request.Email | errorMessages('Email')"
        ></v-text-field>
        <!-- <v-row>
          <v-col>
            <v-text-field
              label="Password"
              color="primary"
              filled
              dense
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Confirm Password"
              color="primary"
              filled
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row> -->
        <v-text-field
          label="Phone number"
          color="primary"
          filled
          dense
          required
          v-model="request.PhoneNumber"
          @input="$v.request.PhoneNumber.$touch()"
          @blur="$v.request.PhoneNumber.$touch()"
          :error-messages="
            $v.request.PhoneNumber | errorMessages('PhoneNumber')
          "
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
        <v-row>
          <v-col>
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
              :error-messages="
                $v.request.Experience | errorMessages('Experience')
              "
            ></v-text-field>
          </v-col>
          <v-col>
            <v-file-input
              label="Qualifications"
              prepend-inner-icon="upload"
              :prepend-icon="null"
              chips
              multiple
              small-chips
              filled
              dense
              @change="selectFiles"
              ><template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                  {{ text }}
                </v-chip>
              </template></v-file-input
            >
          </v-col>
        </v-row>
        <div v-if="certificates.length" class="d-flex justify-space-between">
          <div>
            <h5>All files</h5>
            <v-chip
              v-for="(file, index) in certificates"
              :key="index"
              class="mr-1"
            >
              {{ file.name }}
            </v-chip>
          </div>
          <div class="align-self-end">
            <v-btn
              color="primary"
              class="text-capitalize"
              rounded
              type="submit"
            >
              Save
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import {
  email,
  helpers,
  maxLength,
  minLength,
  numeric,
  required,
} from "vuelidate/lib/validators";

import BaseComponent from "@/components/base/BaseComponent";

import {
  CertificateModel,
  ClientRequestModel,
  CoachResponseModel,
} from "@/model";

import { IProfileService } from "@/service";

const alphaOnly = helpers.regex("alphaOnly", /^[a-z A-Z]*$/i);

@Component({
  validations: {
    request: {
      FirstName: { required, alphaOnly },
      LastName: { required, alphaOnly },
      Name: { required, alphaOnly },
      Email: { required, email },
      PhoneNumber: {
        required,
        maxLength: maxLength(10),
        minLength: minLength(10),
        numeric,
      },
      Experience: { required },
    },
  },
})
export default class Profile extends BaseComponent {
  @Inject("profileService") profileService: IProfileService;

  public request: CoachResponseModel = new CoachResponseModel();
  public requestCertificate: CertificateModel = new CertificateModel();
  public profilePhoto: any = null;
  public certificate: File;

  private certificates: Array<File> = [];

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
        this.certificates = response.Certificates;

        this.certificates.forEach((item) => {
          // console.log(item);
        });

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

  public selectFiles(file: any) {
    if (file) this.certificates = file;
  }

  public editCertificates() {
    this.requestCertificate.id = this.userInfo.Id;
    this.requestCertificate.Id = this.userInfo.Id;
    this.loadingSpinner("show");
    console.log(this.certificates);
    this.profileService
      .editCertificates(this.certificates, this.requestCertificate)
      .then((response: any) => {
        this.loadingSpinner("hide");
        this.getProfile();
      });
  }

  public updateProfile() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.request.Id = this.userInfo.Id;
      this.loadingSpinner("show");
      this.profileService
        .updateProfileCoach(this.profilePhoto, this.request)
        .then(
          (response: CoachResponseModel) => {
            this.editCertificates();
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
