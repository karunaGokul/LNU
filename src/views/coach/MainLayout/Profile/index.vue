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
        <v-form @submit.prevent="profile" lazy-validation>
          <v-text-field
            label="Full Name"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.fullName"
            @input="$v.request.fullName.$touch()"
            @blur="$v.request.fullName.$touch()"
            :error-messages="$v.request.fullName | errorMessages('Full Name')"
          ></v-text-field>
          <v-text-field
            label="Qualifications"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.qualifications"
            @input="$v.request.qualifications.$touch()"
            @blur="$v.request.qualifications.$touch()"
            :error-messages="
              $v.request.qualifications | errorMessages('Qualifications')
            "
          ></v-text-field>
          <v-text-field
            label="Experience (years)"
            type="text"
            color="#5949B8"
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
          <v-text-field
            label="Counselling Type"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.counsellingType"
            @input="$v.request.counsellingType.$touch()"
            @blur="$v.request.counsellingType.$touch()"
            :error-messages="
              $v.request.counsellingType | errorMessages('Counselling Type')
            "
          ></v-text-field>
          <v-text-field
            label="Upcoming Appointments"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.upcomingAppointments"
            @input="$v.request.upcomingAppointments.$touch()"
            @blur="$v.request.upcomingAppointments.$touch()"
            :error-messages="
              $v.request.upcomingAppointments
                | errorMessages('Upcoming Appointments')
            "
          ></v-text-field>
          <v-text-field
            label="Payouts"
            type="text"
            color="#5949B8"
            filled
            dense
            required
            v-model="request.payouts"
            @input="$v.request.payouts.$touch()"
            @blur="$v.request.payouts.$touch()"
            :error-messages="$v.request.payouts | errorMessages('Payouts')"
          ></v-text-field>
          <div class="d-flex justify-end mt-5">
            <v-btn
              color="#5949B8"
              class="white--text text-capitalize"
              type="submit"
            >
              Save
            </v-btn>
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

import { CoachRequestModel, CoachResponseModel } from "@/model";

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
