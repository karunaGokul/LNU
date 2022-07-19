<template>
  <div
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="d-flex align-center justify-center" style="height: 100vh">
      <v-col cols="4" sm="12" md="5">
        <h4 class="text-h4 font-weight-bold text-center pa-4">Hey, Client!</h4>
        <div class="text-center pa-4" style="position: relative">
          <v-icon x-large color="#E0E0E0" style="font-size: 16rem">
            fa fa-user-circle
          </v-icon>
          <v-btn
            color="background-orange"
            fab
            absolute
            style="right: 130px; bottom: 60px"
          >
            <v-icon>fa fa-camera</v-icon>
          </v-btn>
        </div>
        <div class="text-center pa-4">
          <v-btn color="white" class="text-capitalize rounded-lg">
            <v-icon left>fa fa-solid fa-info-circle</v-icon>
            Payment info
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
            v-model="request.name"
            @input="$v.request.name.$touch()"
            @blur="$v.request.name.$touch()"
            :error-messages="$v.request.name | errorMessages('Name')"
          ></v-text-field>
          <v-text-field
            label="Contact"
            type="text"
            color="#FCB258"
            filled
            dense
            required
            v-model="request.contact"
            @input="$v.request.contact.$touch()"
            @blur="$v.request.contact.$touch()"
            :error-messages="$v.request.contact | errorMessages('Contact')"
          ></v-text-field>
          <v-text-field
            label="Email"
            type="text"
            color="#FCB258"
            filled
            dense
            required
            v-model="request.email"
            @input="$v.request.email.$touch()"
            @blur="$v.request.email.$touch()"
            :error-messages="$v.request.email | errorMessages('Email')"
          ></v-text-field>
          <v-textarea
            label="Queries"
            type="text"
            color="#FCB258"
            filled
            dense
            required
            v-model="request.queries"
            @input="$v.request.queries.$touch()"
            @blur="$v.request.queries.$touch()"
            :error-messages="$v.request.queries | errorMessages('Queries')"
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

import { IProfileService } from "@/service";

@Component({
  validations: {
    request: {
      name: { required },
      contact: { required, maxLength: maxLength(10) },
      email: { required, email },
      queries: { required },
    },
  },
})
export default class ClientProfileLayout extends Vue {
  @Inject("profileService") profileService: IProfileService;
  public request: ClientRequestModel = new ClientRequestModel();

  public profile() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      console.log(this.request);
      this.profileService
        .clientProfile(this.request)
        .then((response: Array<ClientResponseModel>) => {
          console.log(response);
        });
    }
  }
}
</script>
