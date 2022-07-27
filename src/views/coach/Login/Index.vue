<template>
  <v-row  no-gutters class="primary-linear">
    <v-col cols="12" md="6">
      <v-img
        src="@/assets/coachLogin.jpg"
        height="100vh"
        class="rounded-xl rounded-l-0"
      >
        <v-container fill-height fluid class="white--text mt-n16">
          <v-row class="pl-10">
            <h4 class="text-h4">Life N You</h4>
          </v-row>
          <v-row class="align-self-end">
            <v-col offset-md="4">
              <h4 class="text-h5">We help you build a better life</h4>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
    <v-col>
      <v-container fill-height fluid class="d-flex justify-center">
        <div class="mt-8">
          <v-card
            elevation="3"
            outlined
            width="450"
            class="rounded-lg pb-4 mb-8"
          >
            <v-row>
              <v-col cols="12" md="4" offset-md="4">
                <v-card-title class="text-h5 font-weight-bold ml-4"
                  >Coach</v-card-title
                >
              </v-col>
            </v-row>
            <v-form class="px-8" ref="form" autocomplete="off" @submit="login">
              <v-text-field
                label="Username/Email"
                color="#495cb8"
                v-model="request.Email"
                append-icon="mdi-account"
                :error-messages="
                  $v.request.Email | errorMessages('Username')
                "
                filled
                type="text"
                required
                @input="$v.request.Email.$touch()"
                @blur="$v.request.Email.$touch()"
              ></v-text-field>
              <v-text-field
                label="Password"
                color="#495cb8"
                v-model="request.Password"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="
                  $v.request.Password | errorMessages('Password')
                "
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                filled
                @input="$v.request.Password.$touch()"
                @blur="$v.request.Password.$touch()"
              ></v-text-field>
              <div class="d-flex justify-center align-center">
                <v-btn
                  color="#495cb8"
                  class="white--text text-capitalize"
                  @click.prevent="login"
                  type="submit"
                  >Login</v-btn
                >
              </div>
            </v-form>
          </v-card>
        </div>
        <v-row class="d-flex justify-center mt-16 mb-n10">
          <h4>No account?</h4>
          <router-link to="/coach/registration" class="text-decoration-none"
            >Register here</router-link
          >
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { required } from "vuelidate/lib/validators";

import { LoginRequestModel } from "@/model";

@Component({
  validations: {
    request: {
      Email: { required },
      Password: { required },
    },
  },
})
export default class Login extends Vue {
  public request: LoginRequestModel = new LoginRequestModel();

  public showPassword: boolean = false;

  public login() {
    this.$v.$touch();
    console.log(this.request);
    //this.$router.push("home/dashboard");
  }
}
</script>
