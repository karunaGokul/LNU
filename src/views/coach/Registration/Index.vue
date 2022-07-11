<template>
  <v-row
    style="background: linear-gradient(180deg, #495cb8 -60.28%, #ffffff 26.8%)"
  >
    <v-col style="height: 100%">
      <v-row class="my-5">
        <v-col class="ml-16"> <h4 class="text-h5">Life N You</h4> </v-col>
      </v-row>

      <v-row justify="center">
        <v-icon x-large color="rgb(73, 92, 184, 0.3)" style="font-size: 10rem"
          >fa fa-user-circle</v-icon
        >
      </v-row>

      <v-container fluid fill-height class="d-flex justify-center mt-10">
        <v-form>
          <v-row class="mt-n6">
            <v-col cols="12" md="4">
              <v-text-field
                label="Full Name"
                color="#495CB8"
                filled
                dense
                required
                v-model="request.fullname"
                @input="$v.request.fullname.$touch()"
                @blur="$v.request.fullname.$touch()"
                :error-messages="
                  $v.request.fullname | errorMessages('Fullname')
                "
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Experience(Years)"
                color="#495CB8"
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
            <v-col cols="12" md="4">
              <v-select
                label="Certification"
                color="#495CB8"
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
          </v-row>
          <v-row class="mt-n6">
            <v-col cols="12" md="4">
              <v-text-field
                label="Email"
                color="#495CB8"
                filled
                dense
                required
                v-model="request.email"
                @input="$v.request.email.$touch()"
                @blur="$v.request.email.$touch()"
                :error-messages="$v.request.email | errorMessages('Email')"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Password"
                color="#495CB8"
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
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Confirm Password"
                color="#495CB8"
                filled
                dense
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
          </v-row>
          <v-row class="mt-n6">
            <v-col cols="12" md="4">
              <v-text-field
                label="Contact"
                color="#495CB8"
                filled
                dense
                required
                v-model="request.contact"
                @input="$v.request.contact.$touch()"
                @blur="$v.request.contact.$touch()"
                :error-messages="$v.request.contact | errorMessages('Contact')"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Payements"
                color="#495CB8"
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
            </v-col>
          </v-row>

          <v-row class="mt-n6">
            <v-col cols="9" md="9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique molestiae animi<br />
              adipisci quia consectetur tenetur reiciendis iste id expedita
              voluptatum recusandae,<br />
              autem asperiores dicta impedit quam quisquam deleniti ipsa quae!
              <br />
            </v-col>

            <v-col class="d-flex align-self">
              <v-spacer></v-spacer>
              <v-btn
                depressed
                width="100"
                color="#495CB8"
                class="white--text text-capitalize mt-5"
                @click="register"
                >save</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
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
      fullname: { required },
      contact: { required },
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
