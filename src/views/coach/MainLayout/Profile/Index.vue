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
          label="Counseling Program"
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
              :prepend-icon="null"
              label="Ceritifications"
              prepend-inner-icon="upload"
              chips
              multiple
              small-chips
              filled
              dense
              @change="selectFiles"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  small
                  label
                  color="primary"
                  v-if="chip1"
                  close
                  close-icon="cancel"
                  @click:close="removeFile(index, text)"
                >
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
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
              class="text-capitalize rounded-lg"
              rounded
              type="submit"
            >
              <v-icon class="mr-2">edit_note</v-icon>
              Save
            </v-btn>
          </div>
        </div>
        <snack-bar
          v-if="snackbar"
          :snackbarText="snackbarText"
          :snackBarStatus="snackBarStatus"
          @close="OnSnackBarClose"
        />
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
import SnackBar from "@/components/layout/SnackBar.vue";

const alphaOnly = helpers.regex("alphaOnly", /^[a-z A-Z]*$/i);

@Component({
  components: {
    SnackBar,
  },
  validations: {
    request: {
      FirstName: { required, alphaOnly },
      LastName: { required, alphaOnly },
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
  chip1 = true;

  private certificates: Array<File> = [];
  public snackbar: boolean = false;
  public snackbarText: any;
  public snackBarStatus: string = "";

  mounted() {
    this.getProfile();
  }

  public getProfile() {
    this.certificates = [];
    this.loadingSpinner("show");
    let profile = new ClientRequestModel();
    profile.id = this.userInfo.Id;
    this.profileService
      .getProfileCoach(profile)
      .then((response) => {
        this.loadingSpinner("hide");
        this.request = response;

        for (let i in response.Certificates) {
          let blob = new Blob([JSON.stringify(response.Certificates[i])], {
            type: "application/json",
          });

          let fileOfBlob = new File([blob], response.CertificateNames[i]);
          this.certificates.push(fileOfBlob);
        }

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
    this.chip1 = true;
    this.certificates.push(file[0]);
  }

  public removeFile(index: any, text: any) {
    this.certificates.splice(index - 1, 1);
    this.chip1 = false;
  }

  public editCertificates() {
    this.requestCertificate.id = this.userInfo.Id;
    this.requestCertificate.Id = this.userInfo.Id;
    this.loadingSpinner("show");

    this.profileService
      .editCertificates(this.certificates, this.requestCertificate)
      .then((response: any) => {
        this.loadingSpinner("hide");

        this.snackbarText = response;
        this.snackbar = true;
        this.snackBarStatus = "Success";
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
              this.snackbarText = err.response.data;
              this.snackbar = true;
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

  public OnSnackBarClose() {
    this.snackbar = false;
  }
}
</script>
