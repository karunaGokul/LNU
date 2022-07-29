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
                    label="First name"
                    color="primary"
                    append-icon="person"
                    filled
                    dense
                    required
                    v-model="request.firstname"
                    @input="$v.request.firstname.$touch()"
                    @blur="$v.request.firstname.$touch()"
                    :error-messages="
                      $v.request.firstname | errorMessages('Firstname')
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
                    required
                    v-model="request.lastname"
                    @input="$v.request.lastname.$touch()"
                    @blur="$v.request.lastname.$touch()"
                    :error-messages="
                      $v.request.lastname | errorMessages('Lastname')
                    "
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                label="Username"
                color="primary"
                append-icon="person"
                filled
                dense
                required
                v-model="request.username"
                @input="$v.request.username.$touch()"
                @blur="$v.request.username.$touch()"
                :error-messages="
                  $v.request.username | errorMessages('Username')
                "
              ></v-text-field>

              <v-text-field
                label="Email"
                append-icon="email"
                color="primary"
                filled
                dense
                required
                v-model="request.email"
                @input="$v.request.email.$touch()"
                @blur="$v.request.email.$touch()"
                :error-messages="$v.request.email | errorMessages('Email')"
              ></v-text-field>

              <v-row>
                <v-col>
                  <v-text-field
                    label="Password"
                    color="primary"
                    filled
                    dense
                    required
                    v-model="request.password"
                    @input="$v.request.password.$touch()"
                    @blur="$v.request.password.$touch()"
                    :error-messages="
                      $v.request.password | errorMessages('Password')
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
                    v-model="request.confirmpassword"
                    @input="$v.request.confirmpassword.$touch()"
                    @blur="$v.request.confirmpassword.$touch()"
                    :error-messages="
                      $v.request.confirmpassword
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
                v-model="request.contact"
                @input="$v.request.phonenumber.$touch()"
                @blur="$v.request.phonenumber.$touch()"
                :error-messages="
                  $v.request.phonenumber | errorMessages('Phone number')
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
                    required
                    v-model="request.certification"
                    @input="$v.request.certification.$touch()"
                    @blur="$v.request.certification.$touch()"
                    :error-messages="
                      $v.request.certification | errorMessages('Certification')
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
                    v-model="request.experience"
                    @input="$v.request.experience.$touch()"
                    @blur="$v.request.experience.$touch()"
                    :error-messages="
                      $v.request.experience | errorMessages('Experience')
                    "
                  ></v-text-field>
                </v-col>
                <!-- <v-col>
                  <v-text-field
                    label="Payments"
                    color="primary"
                    append-icon="request_quote"
                    filled
                    dense
                    required
                    v-model="request.payements"
                    @input="$v.request.payements.$touch()"
                    @blur="$v.request.payements.$touch()"
                    :error-messages="
                      $v.request.payements | errorMessages('Payements')
                    "
                  ></v-text-field>
                </v-col> -->
              </v-row>
              <div class="text-center">
                <v-btn
                  depressed
                  color="primary"
                  class="white--text text-capitalize"
                  type="submit"
                  >Create account</v-btn
                >
              </div>
            </v-form>
          </div>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { required, sameAs } from "vuelidate/lib/validators";

import { CoachRegistrationModel } from "@/model";

@Component({
  validations: {
    request: {
      firstname: { required },
      lastname: { required },
      username: { required },
      phonenumber: { required },
      email: { required },
      password: { required },
      confirmpassword: { required, sameAsPassword: sameAs("password") },
      certification: { required },
      experience: { required },
      payements: { required },
    },
  },
})
export default class CoachRegistration extends Vue {
  public request: CoachRegistrationModel = new CoachRegistrationModel();

  public showPassword: boolean = false;

  public register() {
    this.$v.$touch();
    console.log(this.request);
  }
}
</script>
