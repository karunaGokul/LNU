<template>
  <v-row
    no-gutters
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-col cols="12" md="6">
      <!-- <v-img
        src="@/assets/clientLogin.jpeg"
        height="100vh"
        class="rounded-xl rounded-l-0"
      >
        <v-container fill-height fluid class="white--text">
          <v-row class="pl-10 align-self-start mt-6">
            <h4 class="text-h4">Life N You</h4>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="6">
              <h4
                class="text-h4"
                style="font-family: Questario Icon !important"
              >
                Bring Out The Magic In You
              </h4>
            </v-col>
          </v-row>
        </v-container>
      </v-img> -->
      <v-container fill-height fluid class="pa-0" style="position: relative">
        <h4
          class="text-h4 white--text"
          style="position: absolute; top: 50px; z-index: 9999999; left: 80px"
        >
          Life N You
        </h4>
        <v-img
          src="@/assets/client-login.jpeg"
          height="100vh"
          class="rounded-xl rounded-l-0"
        />
        <div
          class="white--text"
          style="
            position: absolute;
            bottom: 50px;
            z-index: 9999999;
            right: 80px;
          "
        >
          <h5 class="text-h4 text-center mb-2" style="font-family: Questario Icon !important">Bring Out</h5>
          <h5 class="text-h4" style="font-family: Questario Icon !important">
            The Magic In You
          </h5>
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
        <h2 class="mb-10 text-h4 font-weight-bold">
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
                <v-card-title class="text-h5 font-weight-bold ml-4"
                  >Client</v-card-title
                >
              </v-col>
              <v-col>
                <v-icon color="#FCB258" class="mt-5 ml-16"
                  >mdi-check-circle</v-icon
                >
              </v-col>
            </v-row>
            <v-form class="px-8" ref="form" autocomplete="off" >
              <v-text-field
                label="Username"
                color="#FCB258"
                v-model="request.username"
                append-icon="mdi-account"
                :error-messages="
                  $v.request.username | errorMessages('Username')
                "
                filled
                type="text"
                required
                @input="$v.request.username.$touch()"
                @blur="$v.request.username.$touch()"
              ></v-text-field>
              <v-text-field
                label="Password"
                color="#FCB258"
                v-model="request.password"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="
                  $v.request.password | errorMessages('Password')
                "
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                filled
                @input="$v.request.password.$touch()"
                @blur="$v.request.password.$touch()"
              ></v-text-field>
              <div class="d-flex justify-center align-center">
                <v-btn
                  color="background-orange"
                  class="white--text text-capitalize"
                  @click.prevent="login"
                  type="submit"
                  >Login</v-btn
                >
              </div>
            </v-form>
          </v-card>
          <div class="text-center mb-4">
            If you are an admin,
            <router-link to="/admin/login" class="text-decoration-none"
              >Click here</router-link
            >
          </div>
          <div class="text-center mb-4">
            If you are a coach,
            <router-link to="/coach/login" class="text-decoration-none"
              >Click here</router-link
            >
          </div>
          <div class="text-center mt-16">
            No account?
            <router-link to="/client/registration" class="text-decoration-none"
              >Register here</router-link
            >
          </div>
        </div>

        <!-- <h2>Feel stuck? We are here to help you!</h2>
        <v-row>
          <v-col>
            <v-card
              elevation="2"
              outlined
              width="450"
              color="#F8E6C4"
              class="ml-16 pl-7 my-n16 rounded-lg"
            >
              <v-row class="mb-n8">
                <v-col cols="12" md="4" offset-md="4">
                  <v-card-title class="text-h5">Client</v-card-title>
                </v-col>
                <v-col>
                  <v-icon color="#FCB258" class="mt-5 ml-16"
                    >mdi-check-circle</v-icon
                  >
                </v-col>
              </v-row>

              <v-form>
                <text-input />
                <password-input />
                <div class="d-flex justify-center">
                  <v-btn
                    depressed
                    rounded
                    class="white--text text-capitalize orange lighten-1"
                    @click="login"
                    >Login</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center mb-n14">
          <h4>If you are an admin,</h4>
          <router-link to="/admin/login" class="text-decoration-none"
            >Click here</router-link
          >
        </v-row>
        <v-row class="d-flex justify-center mt-n16">
          <h4>If you are a coach,</h4>
          <router-link to="/coach/login" class="text-decoration-none"
            >Click here</router-link
          >
        </v-row>
        <v-row class="d-flex justify-center">
          <h4>No account?</h4>
          <router-link to="/client/registration" class="text-decoration-none"
            >Register here</router-link
          >
        </v-row> -->
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { required } from "vuelidate/lib/validators";

import { LoginModel,LoginResponseModel } from "@/model";

import { IAuthenticationService } from '@/service';

@Component({
  validations: {
    request: {
      username: { required },
      password: { required },
    },
  },
})
export default class Login extends Vue {
  @Inject("authService") authService: IAuthenticationService;
  public request: LoginModel = new LoginModel();

  public showPassword: boolean = false;

  // public login() {
  //   this.$v.$touch();
  //   console.log(this.request);
  //   this.$router.push("home/dashboard");
  // }

  public login() {
    console.log(this.request);
    this.authService
      .login(this.request)
      .then((response: Array<LoginResponseModel>) => {
        console.log(response);
      });
  }

}
</script>
