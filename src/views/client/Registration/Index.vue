<template>
  <v-row no-gutters class="primary-linear">
    <v-col lg="6" md="6" sm="12">
      <v-container fill-height fluid class="pa-0 position-relative">
        <v-img src="@/assets/client-registration.jpg" height="100vh" />
        <h4
          class="text-h3 font-weight-bold white--text position-absolute title"
          style="font-family: Questario Icon !important"
        >
          Life N You Welcomes you
        </h4>
        <h4
          class="text-h4 white--text position-absolute sub-title"
          style="font-family: Questario Icon !important"
        >
          Heal Better, Feel Better
        </h4>
      </v-container>
    </v-col>
    <v-col lg="6" md="6" sm="12">
      <v-container
        fill-height
        fluid
        d-flex
        justify-center
        align-center
        flex-column
      >
        <!-- <div> -->
        <h2 class="mb-3 px-8 text-h4 text-start font-weight-bold">
          Create new account
        </h2>
        <div class="mb-4 px-8 text-h7 text-start">
          Already A Member?
          <router-link to="/client/login" class="text-decoration-none" tag="a"
            >Log In
          </router-link>
        </div>
        <div style="width: 590px">
          <v-form class="px-8" @submit="register">
            <v-row>
              <v-col>
                <v-text-field
                  label="First name"
                  color="primary"
                  append-icon="person"
                  filled
                  dense
                  v-model="request.FirstName"
                  required
                  @input="$v.request.FirstName.$touch()"
                  @blur="$v.request.FirstName.$touch()"
                  :error-messages="
                    $v.request.FirstName | errorMessages('FirstName')
                  "
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Last name"
                  color="primary"
                  append-icon="person"
                  filled
                  dense
                  v-model="request.LastName"
                  required
                  @input="$v.request.LastName.$touch()"
                  @blur="$v.request.LastName.$touch()"
                  :error-messages="
                    $v.request.LastName | errorMessages('LastName')
                  "
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              label="Email Id"
              color="primary"
              append-icon="email"
              filled
              dense
              v-model="request.Email"
              required
              @input="$v.request.Email.$touch()"
              @blur="$v.request.Email.$touch()"
              :error-messages="$v.request.Email | errorMessages('Email')"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                  label="Password"
                  color="primary"
                  filled
                  dense
                  v-model="request.Password"
                  required
                  @input="$v.request.Password.$touch()"
                  @blur="$v.request.Password.$touch()"
                  :error-messages="
                    $v.request.Password | errorMessages('Password')
                  "
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Confirm Password"
                  color="primary"
                  filled
                  dense
                  v-model="request.ConfirmPassword"
                  required
                  @input="$v.request.ConfirmPassword.$touch()"
                  @blur="$v.request.ConfirmPassword.$touch()"
                  :error-messages="
                    $v.request.ConfirmPassword
                      | errorMessages('ConfirmPassword')
                  "
                  :type="showConfirmpassword ? 'text' : 'password'"
                  :append-icon="
                    showConfirmpassword ? 'visibility_off' : 'visibility'
                  "
                  @click:append="showConfirmpassword = !showConfirmpassword"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              label="Phone number"
              color="primary"
              append-icon="call"
              filled
              dense
              v-model="request.PhoneNumber"
              required
              @input="$v.request.PhoneNumber.$touch()"
              @blur="$v.request.PhoneNumber.$touch()"
              :error-messages="
                $v.request.PhoneNumber | errorMessages('Phone number')
              "
            ></v-text-field>
            <v-row>
              <v-col lg="6" md="6">
                <v-select
                  label="Counselling Type"
                  color="primary"
                  filled
                  dense
                  :items="CounselingTypes"
                  item-text="name"
                  item-value="id"
                  v-model="request.CounselingType"
                  @change="$v.request.CounselingType.$touch()"
                  @blur="$v.request.CounselingType.$touch()"
                  required
                  :error-messages="
                    $v.request.CounselingType | errorMessages('CounselingType')
                  "
                ></v-select>
              </v-col>
              <v-col lg="6" md="6">
                <v-text-field
                  label="Payments"
                  color="primary"
                  append-icon="request_quote"
                  type="text"
                  filled
                  dense
                  v-model="request.Payments"
                  required
                  @input="$v.request.Payments.$touch()"
                  @blur="$v.request.Payments.$touch()"
                  :error-messages="
                    $v.request.Payments | errorMessages('Payments')
                  "
                ></v-text-field>
              </v-col>
            </v-row>

            <div class="text-center">
              <v-btn
                color="primary"
                class="rounded font-weight-bold text-capitalize"
                large
                type="submit"
                @click.prevent="register"
                >Create account</v-btn
              >
            </div>
          </v-form>
        </div>
        <v-snackbar
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
        </v-snackbar>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";
import {
  required,
  sameAs,
  numeric,
  minLength,
  maxLength,
  email,
  helpers,
} from "vuelidate/lib/validators";

import { ClientRegistrationModel, CounselingModel } from "@/model";
import { IRegistrationService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";

const alphaOnly = helpers.regex("alphaOnly", /^[a-zA-Z]*$/i);

@Component({
  validations: {
    request: {
      FirstName: { required, alphaOnly },
      LastName: { required, alphaOnly },
      Email: { required, email },
      Password: { required },
      ConfirmPassword: { required, sameAsPassword: sameAs("Password") },
      PhoneNumber: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      Payments: { required, numeric },
      CounselingType: { required },
    },
  },
})
export default class ClientRegistration extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;

  public request: ClientRegistrationModel = new ClientRegistrationModel();

  public showPassword: boolean = false;
  public showConfirmpassword: boolean = false;
  public snackbar: boolean = false;
  public snackbarText: string = "";
  public CounselingTypes: Array<CounselingModel> = [];

  created() {
    this.getCounselingType();
  }

  unmounted() {
    this.cancel();
  } 

  private cancel(){
    this.registerService.abortRequest().then((response: any) => {
      
    });
  }

  private getCounselingType() {
    this.loadingSpinner("show");
    this.registerService
      .getCounselingType()
      .then((response: Array<CounselingModel>) => {
        this.CounselingTypes = response;
        this.loadingSpinner("hide");
      });
  }

  public register() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.loadingSpinner("show");
      this.registerService.register(this.request).then(
        (response: Array<ClientRegistrationModel>) => {
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
