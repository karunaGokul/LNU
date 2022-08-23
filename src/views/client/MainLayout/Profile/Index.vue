<template>
  <v-row class="d-flex align-center justify-center" style="height: 100vh">
    <v-col cols="4" sm="12" md="5">
      <h4 class="text-h4 font-weight-bold text-center pa-4">Hey, Client!</h4>
      <div class="text-center pa-4" style="position: relative">
        <img
          :src="viewImage"
          alt="Profile image"
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
    </v-col>
    <v-col cols="8" sm="12" md="7" class="pa-8">
      <v-form class="ma-10 pa-5" @submit.prevent="updateProfile">
        <v-text-field
          label="Name"
          type="text"
          color="#FCB258"
          filled
          dense
          required
          v-model="request.Name"
          @input="$v.request.Name.$touch()"
          @blur="$v.request.Name.$touch()"
          :error-messages="$v.request.Name | errorMessages('Name')"
        ></v-text-field>
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
          label="Queries"
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

import { ClientRequestModel, ClientResponseModel } from "@/model";
import BaseComponent from "@/components/base/BaseComponent";

import { IProfileService } from "@/service";

const alphaOnly = helpers.regex("alphaOnly", /^[a-z A-Z]*$/i);

@Component({
  validations: {
    request: {
      Name: { required, alphaOnly},
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
      console.log(this.request);
      this.loadingSpinner("show");
      this.profileService.updateProfile(this.profilePhoto, this.request).then(
        (response: ClientResponseModel) => {
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
