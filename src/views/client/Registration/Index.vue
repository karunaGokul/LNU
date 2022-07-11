<template>
  <v-row>
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
        <!-- <v-form class="my-n16">
          <v-row class="mb-n10">
            <v-col cols="12" md="4">
              <v-label>Full Name</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Fullname"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Contact</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Contact"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Email</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-n10">
            <v-col cols="12" md="4">
              <v-label>Password</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Confirm Password</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter ConfirmPassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Counselling Type</v-label>
              <v-select
                filled
                rounded
                dense
                placeholder="Enter CounsellingType"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-label>Payements</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Payements"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" offset-md="4" class="d-flex align-self">
              <v-spacer></v-spacer>
              <v-btn
                depressed
                rounded
                width="100"
                color="#FFA726"
                class="white--text text-capitalize mt-5"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </v-form> -->
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { required, sameAs } from "vuelidate/lib/validators";

import { ClientRegistrationModel } from "@/model";

@Component({
  validations: {
    request: {
      fullname: { required },
      contact: { required },
      email: { required },
      password: { required },
      confirmpassword: { required, sameAsPassword: sameAs("password") },
      counsellingtype: { required },
      payements: { required },
    },
  },
})
export default class ClientRegistration extends Vue {
  public request: ClientRegistrationModel = new ClientRegistrationModel();

  public showPassword: boolean = false;

  public register() {
    this.$v.$touch();
    console.log(this.request);
  }
}
</script>
