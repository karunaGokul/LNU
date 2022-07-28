<template>
  <v-row
    class="pt-15 px-15 d-flex justify-end"
    style="background: linear-gradient(180deg, #5949b8 -60.28%, #ffffff 26.8%)"
  >
    <v-col style="height: 100%">
      <v-row class="mb-10">
        <h2>Upcoming Appointment</h2>
      </v-row>
      <v-row>
        <v-date-picker
          color="#5949B8"
          width="350"
          v-model="picker"
          prev-icon="chevron_left"
          next-icon="chevron_right"
        ></v-date-picker>
      </v-row>
    </v-col>
    <v-col>
      <v-form class="mt-15" @submit.prevent="submit">
        <v-text-field
          label="Appointment Type"
          type="text"
          color="#5949B8"
          filled
          dense
          required
          v-model="request.AppointmentType"
          @input="$v.request.AppointmentType.$touch()"
          @blur="$v.request.AppointmentType.$touch()"
          :error-messages="
            $v.request.AppointmentType | errorMessages('Appointment Type')
          "
        ></v-text-field>
        <v-text-field
          label="Date"
          type="text"
          color="#5949B8"
          filled
          dense
          required
          v-model="request.Date"
          @input="$v.request.Date.$touch()"
          @blur="$v.request.Date.$touch()"
          :error-messages="$v.request.Date | errorMessages('Date')"
        ></v-text-field>
        <v-text-field
          label="Duration"
          type="text"
          color="#5949B8"
          filled
          dense
          required
          v-model="request.Duration"
          @input="$v.request.Duration.$touch()"
          @blur="$v.request.Duration.$touch()"
          :error-messages="$v.request.Duration | errorMessages('Duration')"
        ></v-text-field>
        <v-textarea
          filled
          auto-grow
          label="Queries"
          rows="2"
          Queries
          required
          v-model="request.Queries"
          @input="$v.request.Queries.$touch()"
          @blur="$v.request.Queries.$touch()"
          :error-messages="$v.request.Queries | errorMessages('Queries')"
        ></v-textarea>
        <div class="d-flex justify-space-between mt-5">
          <v-btn
            color="#EBEBEB"
            class="white--black text-capitalize"
            type="button"
          >
            Reschedule Appointment
          </v-btn>
          <v-btn
            color="#5949B8"
            class="white--text text-capitalize"
            type="submit"
          >
            Confrim Appointment
          </v-btn>
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { required } from "vuelidate/lib/validators";

import { CalendarRequestModel, CalendarResponseModel } from "@/model";

import { ICoachCalendarService } from "@/service";

@Component({
  validations: {
    request: {
      AppointmentType: { required },
      Date: { required },
      Duration: { required },
      Queries: { required },
    },
  },
})
export default class calender extends Vue {
  @Inject("coachCalendarService") coachCalendarService: ICoachCalendarService;

  public picker = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  public request: CalendarRequestModel = new CalendarRequestModel();

  public submit() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      console.log(this.request);
      this.coachCalendarService
        .coachcalendar(this.request)
        .then((response: Array<CalendarResponseModel>) => {
          console.log(response);
        });
    }
  }
}
</script>
