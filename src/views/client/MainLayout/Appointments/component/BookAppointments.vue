<template>
  <div class="pa-4">
    <div class="text-left mb-4">
      <v-btn depressed color="#1867c0" class="white--text" @click="back">
        <v-icon class="pr-2">keyboard_backspace</v-icon>
        Back
      </v-btn>
    </div>
    <v-row class="px-15 mt-15" justify="center">
      <v-col md="8">
        <v-form @submit.prevent="bookNow">
          <div class="pa-0 text-center mb-5">
            <h1>Book Appointment</h1>
          </div>
          <v-select
            label="Counselling Type"
            outlined
            v-model="request.CounselingType"
            :items="counselingProgram"
            item-text="name"
            required
            :error-messages="
              $v.request.CounselingType | errorMessages('CounselingType')
            "
            return-object
          ></v-select>
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="request.AppointmentDate"
                label="Select Date"
                prepend-inner-icon="calendar_month"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                required
                :error-messages="
                  $v.request.AppointmentDate | errorMessages('AppointmentDate')
                "
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="request.AppointmentDate"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :return-value.sync="time"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="request.AppointmentTime"
                outlined
                label="Select Time"
                append-icon="schedule"
                readonly
                v-bind="attrs"
                v-on="on"
                required
                :error-messages="
                  $v.request.AppointmentTime | errorMessages('AppointmentTime')
                "
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="request.AppointmentTime"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
          <v-btn
            depressed
            color="primary"
            type="submit"
            large
            style="width: 100%"
          >
            Book
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { IAppointmentService } from "@/service";
import { BookAppointmentRequestModel } from "@/model";

import BaseComponent from "@/components/base/BaseComponent";
import { required } from "vuelidate/lib/validators";

@Component({
  validations: {
    request: {
      CounselingType: { required },
      AppointmentDate: { required },
      AppointmentTime: { required },
    },
  },
})
export default class BookAppointments extends BaseComponent {
  @Inject("appointmentService") service: IAppointmentService;

  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();

  public time: number = null;
  public menu2: boolean = false;
  public menu1: boolean = false;
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  public back() {
    this.$router.push("/client/home/appointments");
  }

  public bookNow() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.service
        .bookAppointments(this.request)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }
}
</script>
