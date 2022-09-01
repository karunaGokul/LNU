<template>
  <v-row no-gutters class="primary-linear">
    <v-col cols="12" md="6">
      <v-container fill-height fluid class="pa-0 position-relative">
        <h4 class="text-h4 white--text position-absolute logo">Life N You</h4>

        <v-img
          v-if="tab == 'client'"
          src="@/assets/client-login.jpeg"
          height="100vh"
          class="rounded-xl rounded-l-0"
        />
        <v-img
          v-else-if="tab == 'coach'"
          src="@/assets/coachLogin.jpg"
          height="100vh"
          class="rounded-xl rounded-l-0"
        />
        <v-img
          v-else
          src="@/assets/adminLogin.jpg"
          height="100vh"
          class="rounded-xl rounded-l-0"
        />

        <div
          v-if="tab == 'client'"
          class="white--text position-absolute description"
        >
          <h5
            class="text-h4 text-center mb-2"
            style="font-family: Questario Icon !important"
          >
            Bring Out
          </h5>

          <h5 class="text-h4" style="font-family: Questario Icon !important">
            The Magic In You
          </h5>
        </div>
        <div
          v-else-if="tab == 'coach'"
          class="white--text position-absolute description"
        >
          <h4 class="text-h5">We help you build a better life</h4>
        </div>
      </v-container>
    </v-col>

    <v-col cols="12" md="6">
      <v-container
        fill-height
        fluid
        d-flex
        justify-center
        align-center
        flex-column
      >
        <h2 v-if="tab == 'client'" class="mb-10 text-h4 font-weight-bold">
          Feel stuck? We are here to help you!
        </h2>

        <div>
          <v-card
            elevation="3"
            outlined
            width="450"
            class="rounded-lg pb-4 mb-8"
          >
            <v-row>
              <v-col cols="12" md="4" offset-md="4">
                <v-card-title
                  v-if="tab == 'client'"
                  class="text-h5 font-weight-bold ml-4"
                  >Client</v-card-title
                >
                <v-card-title
                  v-else-if="tab == 'coach'"
                  class="text-h5 font-weight-bold ml-4"
                  >Coach</v-card-title
                >
                <v-card-title v-else class="text-h5 font-weight-bold ml-4"
                  >Admin</v-card-title
                >
              </v-col>

              <v-col v-if="tab == 'client'">
                <v-icon color="primary" class="mt-5 ml-16">
                  check_circle
                </v-icon>
              </v-col>
            </v-row>

            <v-form class="px-8" @submit.prevent="login">
              <v-text-field
                label="Username / Email"
                color="primary"
                v-model="request.Email"
                append-icon="person"
                :error-messages="$v.request.Email | errorMessages('Username')"
                filled
                type="text"
                required
                @input="$v.request.Email.$touch()"
                @blur="$v.request.Email.$touch()"
              ></v-text-field>

              <v-text-field
                label="Password"
                color="primary"
                v-model="request.Password"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="
                  $v.request.Password | errorMessages('Password')
                "
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                @click:append="showPassword = !showPassword"
                filled
                @input="$v.request.Password.$touch()"
                @blur="$v.request.Password.$touch()"
              ></v-text-field>

              <div class="d-flex justify-center align-center">
                <v-btn
                  color="primary"
                  depressed
                  large
                  class="white--text text-capitalize"
                  type="submit"
                  style="width: 100%"
                  >Login</v-btn
                >
              </div>
            </v-form>
          </v-card>
          <div v-if="tab == 'client'">
            <div class="text-center mb-4">
              If you are an admin,
              <router-link
                to="/admin/login"
                class="text-decoration-none"
                tag="a"
                >Click here</router-link
              >
            </div>

            <div class="text-center mb-4">
              If you are a coach,
              <router-link
                to="/coach/login"
                class="text-decoration-none"
                tag="a"
                >Click here</router-link
              >
            </div>
          </div>

          <div v-if="tab !== 'admin'" class="text-center mt-16">
            No account?
            <router-link
              to="/client/registration"
              class="text-decoration-none"
              tag="a"
              >Register here</router-link
            >
          </div>
          <v-snackbar
            v-model="snackbar"
            :timeout="2000"
            color="deep-orange lighten-5 pink--text"
            right
            top
          >
            <v-icon color="pink">priority_high </v-icon>
            {{ snackbarText }}

            <template v-slot:action="{ attrs }">
              <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                <v-icon> close</v-icon>
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Inject, Prop } from "vue-property-decorator";

import { required } from "vuelidate/lib/validators";

import { LoginRequestModel, LoginResponseModel } from "@/model";
import { IAuthenticationService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";

@Component({
  validations: {
    request: {
      Email: { required },
      Password: { required },
    },
  },
})
export default class Login extends BaseComponent {
  @Inject("authService") authService: IAuthenticationService;
  @Prop() tab: string;

  public request: LoginRequestModel = new LoginRequestModel();

  public showPassword: boolean = false;
  public snackbar: boolean = false;
  public snackbarText: string = "";

  public login() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.loadingSpinner("show");
      this.authService.login(this.request).then(
        (response: LoginResponseModel) => {
          this.$store.dispatch("login", response);
          this.loadingSpinner("hide");
          this.$router.push("home/dashboard");
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
}
</script>
