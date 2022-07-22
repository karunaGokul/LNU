<template>
  <div
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="d-flex align-center justify-center" style="height: 100vh">
      <v-col cols="4" sm="12" md="5">
        <h4 class="text-h4 font-weight-bold text-center pa-4">Hey, Client!</h4>
        <div class="text-center pa-4" style="position: relative">
          <v-icon x-large color="#E0E0E0" style="font-size: 16rem">
            account_circle
          </v-icon>

          <v-btn
            color="background-orange"
            fab
            absolute
            style="right: 130px; bottom: 60px"
          >
          
            <v-icon @change="handleimage">photo_camera</v-icon>
          </v-btn>
          <!-- <v-file-input
            hide-input
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="photo_camera"
            class="d-flex justify-center"
            @change="handleimage"
          ></v-file-input> -->
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
        <v-form class="ma-10 pa-5" @submit="profile">
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
            label="Contact"
            type="text"
            color="#FCB258"
            filled
            dense
            required
            v-model="request.Contact"
            @input="$v.request.Contact.$touch()"
            @blur="$v.request.Contact.$touch()"
            :error-messages="$v.request.Contact | errorMessages('Contact')"
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
            <v-btn
              color="background-orange"
              class="text-capitalize"
              rounded
              type="submit"
              @click.prevent="profile"
            >
              Save
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { required, email, maxLength } from "vuelidate/lib/validators";

import { ClientRequestModel, ClientResponseModel } from "@/model";
import BaseComponent from "@/components/base/BaseComponent";

import { IProfileService } from "@/service";

@Component({
  validations: {
    request: {
      Name: { required },
      Contact: { required, maxLength: maxLength(10) },
      Email: { required, email },
      Queries: { required },
    },
  },
})
export default class ClientProfileLayout extends BaseComponent {
  @Inject("profileService") profileService: IProfileService;
  public request: ClientRequestModel = new ClientRequestModel();

  public logo: any;

  public handleimage(e: File) {
    this.logo = e;
  }

  public profile() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      console.log(this.request);
      this.loadingSpinner("show");
      this.profileService.clientProfile(this.logo, this.request).then(
        (response: Array<ClientResponseModel>) => {
          console.log(response);
          this.loadingSpinner("hide");
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
}
</script>
