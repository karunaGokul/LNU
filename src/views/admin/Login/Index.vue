<template>
  <div>
    <v-row no-gutters class="primary-linear">
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/adminLogin.jpg"
          height="100vh"
          class="rounded-xl rounded-l-0"
        >
          <v-container fill-height fluid class="white--text mt-n16">
            <v-row class="pl-10">
              <h4 class="text-h4">Life N You</h4>
            </v-row>
            <v-row>
              <v-col md="6" offset-md="6">
                <!-- <h4 class="text-h4">Bring Out The Magic In You</h4> -->
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
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
                    >Admin</v-card-title
                  >
                </v-col>
              </v-row>
              <v-form
                class="px-8"
                ref="form"
                autocomplete="off"
                @submit="login"
              >
                <v-text-field
                  label="Username/Email"
                  color="#78B849"
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
                  color="#78B849"
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
                    @click.prevent="login"
                    type="submit"
                    style="width: 100%"
                    >Login</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </div>
        </v-container>
      </v-col>
    </v-row>
    <snack-bar
      :snackbarText="snackbarText"
      :snackbar="snackbar"
      @close="onClose"
    />
    <!-- <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="deep-orange lighten-5 pink--text"
      right
      top
    >
      <v-icon color="pink">mdi-exclamation-thick </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar> -->
  </div>
</template>
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";

import { required } from "vuelidate/lib/validators";

import { LoginRequestModel, LoginResponseModel } from "@/model";
import BaseComponent from "@/components/base/BaseComponent";
import SnackBar from "@/components/layout/SnackBar.vue";
import { IAuthenticationService } from "@/service";

@Component({
  components: {
    SnackBar,
  },
  validations: {
    request: {
      Email: { required },
      Password: { required },
    },
  },
})
export default class Login extends BaseComponent {
  @Inject("authService") authService: IAuthenticationService;

  public request: LoginRequestModel = new LoginRequestModel();

  public showPassword: boolean = false;
  public snackbar: boolean = false;
  public snackbarText: string = "";

  public onClose() {
    this.snackbar = false;
  }

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
