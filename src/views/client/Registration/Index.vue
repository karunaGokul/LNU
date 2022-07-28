<template>
  <!--<v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-img src="@/assets/registration.png" height="43vh">
            <v-container fill-height fluid>
              <v-row>
                <v-col cols="12" md="6" offset-md="6">
                  <h4
                    class="text-h3 font-weight-bold"
                    style="font-family: Questario Icon !important"
                  >
                    Life N You Welcomes you
                  </h4>
                  <h4
                    class="text-h5 d-flex justify-center"
                    style="font-family: Questario Icon !important"
                  >
                    Heal Better, Feel Better
                  </h4>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-container fluid fill-height class="d-flex justify-center mt-n16">
        <v-row justify="center" class="mt-1 mb-n6">
          <h2>Registration Form</h2></v-row
        >
        <v-form class="mt-n16 mb-n10">
          <v-row>
            <v-col>
              <v-text-field
                label="Full Name"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.fullname"
                @input="$v.request.fullname.$touch()"
                @blur="$v.request.fullname.$touch()"
                :error-messages="
                  $v.request.fullname | errorMessages('Fullname')
                "
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Contact"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.contact"
                @input="$v.request.contact.$touch()"
                @blur="$v.request.contact.$touch()"
                :error-messages="$v.request.contact | errorMessages('Contact')"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.email"
                @input="$v.request.email.$touch()"
                @blur="$v.request.email.$touch()"
                :error-messages="$v.request.email | errorMessages('Email')"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n5">
            <v-col>
              <v-text-field
                label="Password"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.password"
                @input="$v.request.password.$touch()"
                @blur="$v.request.password.$touch()"
                :error-messages="
                  $v.request.password | errorMessages('Password')
                "
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Confirm Password"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.confirmpassword"
                @input="$v.request.confirmpassword.$touch()"
                @blur="$v.request.confirmpassword.$touch()"
                :error-messages="
                  $v.request.confirmpassword | errorMessages('ConfirmPassword')
                "
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                label="Counselling Type"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.counsellingtype"
                @input="$v.request.counsellingtype.$touch()"
                @blur="$v.request.counsellingtype.$touch()"
                :error-messages="
                  $v.request.counsellingtype | errorMessages('Counsellingtype')
                "
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="mt-n5">
            <v-col cols="4" md="4">
              <v-text-field
                label="Payements"
                color="#FCB258"
                dense
                filled
                required
                v-model="request.payements"
                @input="$v.request.payements.$touch()"
                @blur="$v.request.payements.$touch()"
                :error-messages="
                  $v.request.payements | errorMessages('Payements')
                "
              ></v-text-field>
            </v-col>

            <v-col cols="4" md="4" offset-md="4" class="d-flex justify-end">
              <v-btn
                color="background-orange"
                class="white--text text-capitalize"
                @click="register"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-col>
  </v-row>-->
  <v-row
    no-gutters
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-col lg="6" md="6" sm="12">
      <v-container fill-height fluid class="pa-0" style="position: relative">
        <v-img src="@/assets/client-registration.jpg" height="100vh" />
        <h4
          class="text-h3 font-weight-bold white--text"
          style="
            position: absolute;
            bottom: 90px;
            z-index: 9999999;
            left: 80px;
            font-family: Questario Icon !important;
          "
        >
          Life N You Welcomes you
        </h4>
        <h4
          class="text-h4 white--text"
          style="
            position: absolute;
            bottom: 30px;
            z-index: 9999999;
            right: 160px;
            font-family: Questario Icon !important;
          "
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
        <div>
          <h2 class="mb-3 px-8 text-h4 text-start font-weight-bold">
            Create new account
          </h2>
          <div class="mb-4 px-8 text-h7 text-start">
            Already A Member?
            <router-link to="/client/login" class="text-decoration-none"
              >Log In
            </router-link>
          </div>
          <v-form class="px-8" @submit="register">
            <v-row>
              <v-col>
                <v-text-field
                  label="First name"
                  color="#FCB258"
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
                  color="#FCB258"
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
              color="#FCB258"
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
                  color="#FCB258"
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
                  label="Confrim Password"
                  color="#FCB258"
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
              color="#FCB258"
              append-icon="call"
              filled
              dense
              v-model="request.PhoneNumber"
              required
              @input="$v.request.PhoneNumber.$touch()"
              @blur="$v.request.PhoneNumber.$touch()"
              :error-messages="
                $v.request.PhoneNumber | errorMessages('PhoneNumber')
              "
            ></v-text-field>
            <v-row>
              <v-col>
                <v-select
                  label="Counselling Type"
                  color="#FCB258"
                  filled
                  dense
                  v-model="request.CounselingType"
                  :items="counsellingType"
                  item-text="name"
                  item-value="id"
                  required
                  @input="$v.request.CounsellingType.$touch()"
                  @blur="$v.request.CounsellingType.$touch()"
                  :error-messages="
                    $v.request.CounsellingType
                      | errorMessages('CounsellingType')
                  "
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  label="Payments"
                  color="#FCB258"
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
                color="background-orange"
                class="white--text rounded font-weight-bold text-capitalize"
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
import { Component, Vue, Inject } from "vue-property-decorator";
import {
  required,
  sameAs,
  numeric,
  maxLength,
  email,
} from "vuelidate/lib/validators";

import { ClientRegistrationModel, CounsellingModel } from "@/model";
import { IRegistrationService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";

@Component({
  validations: {
    request: {
      FirstName: { required },
      LastName: { required },
      Email: { required, email },
      Password: { required },
      ConfirmPassword: { sameAsPassword: sameAs("Password") },
      Payments: { required },
      CounsellingType: {},
      PhoneNumber: { required, numeric, maxLength: maxLength(10) },
    },
  },
})
export default class ClientRegistration extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;

  public request: ClientRegistrationModel = new ClientRegistrationModel();

  public showPassword: boolean = false;
  public showConfirmpassword: boolean = false;
  public items = ["Foo", "Bar", "Fizz", "Buzz"];
  public snackbar: boolean = false;
  public snackbarText: string = "";
  public counsellingType: Array<CounsellingModel> = [];

  // public counselingType: string = "";

  created() {
    this.getCounsellingType();
  }

  private getCounsellingType() {
    this.registerService
      .getCounsellingType()
      .then((response: Array<CounsellingModel>) => {
        this.counsellingType = response;
      });
  }

  public register() {
    // this.request.CounsellingType.push(this.counselingType);
    this.$v.$touch();
    if (!this.$v.$invalid) {
      console.log(this.request);
      this.loadingSpinner("show");
      this.registerService.register(this.request).then(
        (response: Array<ClientRegistrationModel>) => {
          console.log(response);
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
