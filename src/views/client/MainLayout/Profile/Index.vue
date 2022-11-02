<template>
  <v-row class="d-flex align-center justify-center" style="height: 100vh">
    <v-col cols="4" sm="12" md="5">
      <v-card width="608" elevation="0" color="transparent">
        <v-card-title class="justify-center">
          <h4 class="text-h4 font-weight-bold pa-4">Hey, Client!</h4>
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
        <v-card-actions class="justify-center">
          <div class="text-center pa-4">
            <v-btn color="white" class="text-capitalize rounded-lg">
              <v-icon left>info</v-icon>
              <router-link
                to="/client/home/payment"
                class="text-decoration-none black--text"
                >Payment info</router-link
              >
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="8" sm="12" md="7" class="pa-8">
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
          label="Phone Number"
          type="text"
          color="#FCB258"
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
        <v-text-field
          label="Email"
          type="text"
          color="#FCB258"
          filled
          dense
          required
          v-model="request.Email"
          @input="$v.request.Email.$touch()"
          @blur="$v.request.Email.$touch()"
          :error-messages="$v.request.Email | errorMessages('Email')"
        ></v-text-field>
        <v-textarea
          label="Tell me about yourself"
          type="text"
          color="#FCB258"
          filled
          dense
          required
          v-model="request.Queries"
          @input="$v.request.Queries.$touch()"
          @blur="$v.request.Queries.$touch()"
          :error-messages="$v.request.Queries | errorMessages('Queries')"
        ></v-textarea>
        <div class="text-end">
          <v-btn color="primary" class="text-capitalize" rounded type="submit">
            Save
          </v-btn>
        </div>
        <snack-bar
          v-if="snackbar"
          :snackbarText="snackbarText"
          :snackBarStatus="snackBarStatus"
        />
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import {
  required,
  email,
  maxLength,
  numeric,
  helpers,
  minLength,
} from "vuelidate/lib/validators";
import BaseComponent from "@/components/base/BaseComponent";

import { ClientRequestModel, ClientResponseModel } from "@/model";

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
      PhoneNumber: {
        required,
        maxLength: maxLength(10),
        minLength: minLength(10),
        numeric,
      },
      Email: { required, email },
      Queries: { required },
    },
  },
})
export default class ClientProfileLayout extends BaseComponent {
  @Inject("profileService") profileService: IProfileService;

  public request: ClientResponseModel = new ClientResponseModel();
  public profilePhoto: any = null;
  public snackbar: boolean = false;
  public snackbarText: any;
  public snackBarStatus: string = "";

  mounted() {
    this.getProfile();
  }

  public getProfile() {
    this.loadingSpinner("show");
    let profile = new ClientRequestModel();
    profile.id = this.userInfo.Id;
    this.profileService
      .getProfile(profile)
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

  public openProfileUpload() {
    let file: any = this.$refs.profileUpload;

    file.click();
  }

  public uploadProfile(event: any) {
    let file: File = event.target.files[0];
    if (!file) return;

    this.profilePhoto = file;
  }

  public updateProfile() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.request.Id = this.userInfo.Id;
      this.loadingSpinner("show");
      this.profileService.updateProfile(this.profilePhoto, this.request).then(
        (response: ClientResponseModel) => {
          this.loadingSpinner("hide");

          this.snackbarText = response;
          this.snackbar = true;
          this.snackBarStatus = "Success";
          this.getProfile();
        },
        (err) => {
          this.loadingSpinner("hide");
          if (err.response.status === 400) {
            console.log(err);
          }
        }
      );
    }
  }

  get viewImage() {
    return this.profilePhoto
      ? window.URL.createObjectURL(this.profilePhoto)
      : null;
  }

  get userInfo() {
    return this.$store.getters.userInfo;
  }
}
</script>
