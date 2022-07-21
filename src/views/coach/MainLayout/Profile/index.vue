<template>
  <div
    style="background: linear-gradient(180deg, #5949b8 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="align-start pt-15 mx-15" style="height: 100vh">
      <v-col class="pt-10">
        <h1>Hello Coach, ABC!</h1>
        <v-row class="mt-2">
          <v-col class="d-flex">
            <div>
              <v-icon size="7rem" class="mr-3">account_circle</v-icon>
            </div>
            <div>
              <h2>ABC</h2>
              <p>Lorem Ipsum Coach</p>
              <p>
                Rating
                <span> </span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="align-self-center">
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Full Name"
            required
            v-model="request.fullName"
            @input="$v.request.fullName.$touch()"
            @blur="$v.request.fullName.$touch()"
          ></v-text-field>
          <v-text-field
            label="Qualifications"
            required
            v-model="request.qualifications"
          ></v-text-field>
          <v-text-field label="Experience (years)" required></v-text-field>
          <v-text-field label="Counselling Type" required></v-text-field>
          <v-text-field label="Upcoming Appointments" required></v-text-field>
          <v-text-field label="Payouts" required></v-text-field>
          <div class="d-flex justify-space-between mt-5">
            <v-btn color="#5949B8" class="white--text"> Edit </v-btn>
            <v-btn color="#EBEBEB" class="white--black"> Save </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";

import { required } from "vuelidate/lib/validators";

import {
  CoachRequestModel,
  CoachResponseModel,
} from "@/model/CoachProfile.model";
import BaseComponent from "@/components/base/BaseComponent";

import { ICoachProfileService } from "@/service";

@Component({
  validations: {
    request: {
      fullName: { required },
      qualifications: { required },
      experience: { required },
      counsellingType: { required },
      upcomingAppointments: { required },
      payouts: { required },
    },
  },
})
export default class Profile extends Vue {
  @Inject("coachProfileService") coachProfileService: ICoachProfileService;
  public request: CoachRequestModel = new CoachRequestModel();

  public profile() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      console.log(this.request);
      this.coachProfileService.coachProfile(this.request).then(
        (response: Array<CoachResponseModel>) => {
          console.log(response);
        }
        // (err)=>{
        //   if(err.response.status === 400) {

        //   }
        // }
      );
    }
  }
}
</script>
