<template>
  <v-row no-gutters class="primary-linear">
    <v-col lg="6" md="6" sm="12">
      <v-container fill-height fluid class="pa-0 position-relative">
        <v-img src="@/assets/client-registration.jpg" height="100vh"></v-img>
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
    <v-col md="6" lg="6" sm="12">
      <v-container
        fill-height
        fluid
        d-flex
        justify-center
        align-center
        flex-column
      >
        <div style="width: 590px">
          <h2 class="mb-3 px-8 text-h4 text-start font-weight-bold">
            Create new account
          </h2>
          <div class="mb-4 px-8 text-h7 text-start">
            Already A Member?
            <router-link to="/coach/login" class="text-decoration-none" tag="a"
              >Log In
            </router-link>
          </div>
          <div>
            <v-form class="px-8" @submit.prevent="register">
              <v-row>
                <v-col>
                  <v-text-field
                    label="First Name"
                    color="primary"
                    append-icon="person"
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
                    append-icon="person"
                    filled
                    dense
                    required
                    v-model="request.LastName"
                    @input="$v.request.LastName.$touch()"
                    @blur="$v.request.LastName.$touch()"
                    :error-messages="
                      $v.request.LastName | errorMessages('LastName')
                    "
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="User Name"
                    color="primary"
                    append-icon="person"
                    filled
                    dense
                    required
                    v-model="request.UserName"
                    @input="$v.request.UserName.$touch()"
                    @blur="$v.request.UserName.$touch()"
                    :error-messages="
                      $v.request.UserName | errorMessages('UserName')
                    "
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Role"
                    color="primary"
                    filled
                    dense
                    required
                    v-model="request.Role"
                    @input="$v.request.Role.$touch()"
                    @blur="$v.request.Role.$touch()"
                    :error-messages="$v.request.Role | errorMessages('Role')"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                label="Email"
                append-icon="email"
                color="primary"
                filled
                dense
                required
                v-model="request.Email"
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
                    required
                    v-model="request.Password"
                    @input="$v.request.Password.$touch()"
                    @blur="$v.request.Password.$touch()"
                    :error-messages="
                      $v.request.Password | errorMessages('Password')
                    "
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="
                      showPassword ? 'visibility_off' : 'visibility'
                    "
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Confirm Password"
                    color="primary"
                    filled
                    dense
                    required
                    v-model="request.ConfirmPassword"
                    @input="$v.request.ConfirmPassword.$touch()"
                    @blur="$v.request.ConfirmPassword.$touch()"
                    :error-messages="
                      $v.request.ConfirmPassword
                        | errorMessages('ConfirmPassword')
                    "
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="
                      showPassword ? 'visibility_off' : 'visibility'
                    "
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                label="Phone number"
                append-icon="call"
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

              <v-row>
                <v-col>
                  <v-select
                    label="Certification"
                    append-icon="workspace_premium"
                    color="primary"
                    filled
                    dense
                    :items="certificationType"
                    item-text="name"
                    item-value="id"
                    required
                    v-model="request.CertificationId"
                    @input="$v.request.CertificationId.$touch()"
                    @blur="$v.request.CertificationId.$touch()"
                    :error-messages="
                      $v.request.CertificationId
                        | errorMessages('Certification')
                    "
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Experience(Years)"
                    append-icon="auto_graph"
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
              </v-row>
              <div class="text-center">
                <v-btn
                  depressed
                  color="primary"
                  class="white--text text-capitalize"
                  type="submit"
                  large
                  style="width: 100%"
                  >Create account</v-btn
                >
              </div>
            </v-form>
          </div>
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
import { Component, Inject, Vue } from "vue-property-decorator";

import {
  required,
  sameAs,
  numeric,
  minLength,
  maxLength,
  helpers,
  email,
} from "vuelidate/lib/validators";

import { CoachRegistrationModel, CertificationModel } from "@/model";

import { IRegistrationService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";

const alphaOnly = helpers.regex("alphaOnly", /^[a-zA-Z]*$/i);

@Component({
  validations: {
    request: {
      FirstName: { required, alphaOnly },
      LastName: { required, alphaOnly },
      UserName: { required },
      PhoneNumber: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      Email: { required, email },
      Password: { required },
      ConfirmPassword: { required, sameAsPassword: sameAs("Password") },
      CertificationId: { required },
      Experience: { required },
      Role: { required },
    },
  },
})
export default class CoachRegistration extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;
  public request: CoachRegistrationModel = new CoachRegistrationModel();
  public certificationType: Array<CertificationModel> = [];
  public showPassword: boolean = false;
   public snackbar: boolean = false;
  public snackbarText: string = "";

  created() {
    this.getCertificationType();
  }

  private getCertificationType() {
    this.loadingSpinner("show");
    this.registerService
      .getCertificationType()
      .then((response: Array<CertificationModel>) => {
        this.certificationType = response;
        this.loadingSpinner("hide");
      });
  }
  public register() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.loadingSpinner("show");
      this.registerService.coachRegister(this.request).then(
        (response: Array<CoachRegistrationModel>) => {
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
