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
            item-text="Name"
            @change="
              $v.request.CounselingType.$touch();
              getExistingCoach();
            "
            @blur="$v.request.CounselingType.$touch()"
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
          <v-checkbox
            v-model="request.ExistingCoach"
            on-icon="check_box"
            off-icon="check_box_outline_blank"
            label="Previous Coach"
            class="mt-0 pt-0"
            :disabled="!request.CounselingType"
            @change="getExistingCoach()"
          ></v-checkbox>
          <template
            v-if="
              request.CounselingType &&
              Object.entries(request.CounselingType).length > 0 &&
              request.ExistingCoach
            "
          >
            <v-select
              label="Avaliable Coach"
              outlined
              v-model="request.CoachDetails"
              :items="existingCoach"
              item-text="Name"
              @change="$v.request.CoachDetails.$touch()"
              @blur="$v.request.CoachDetails.$touch()"
              required
              :error-messages="
                $v.request.CoachDetails | errorMessages('CoachDetails')
              "
              return-object
            ></v-select>
          </template>

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
        <app-alert v-if="showAlert" :response="response" />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import { IAppointmentService, IProfileService } from "@/service";
import {
  BookAppointmentRequestModel,
  BookAppointmentValidationRequestModel,
  CoachDetailsModel,
} from "@/model";

import BaseComponent from "@/components/base/BaseComponent";
import AppAlert from "@/components/layout/AppAlert.vue";
import { required } from "vuelidate/lib/validators";

let validations = {
  request: {
    CounselingType: { required },
    AppointmentDate: { required },
    AppointmentTime: { required },
    CoachDetails: {
      required: (value: any, jsonSchema: any) => {
        let validation = false;

        if (
          jsonSchema.CounselingType &&
          Object.entries(jsonSchema.CounselingType).length > 0 &&
          jsonSchema.ExistingCoach
        ) {
          if (
            jsonSchema.CoachDetails &&
            Object.entries(jsonSchema.CoachDetails).length > 0
          )
            validation = true;
          else validation = false;
        } else validation = true;

        return validation;
      },
    },
  },
};

@Component({
  validations: validations,
  components: {
    AppAlert,
  },
})
export default class BookAppointments extends BaseComponent {
  @Inject("appointmentService") service: IAppointmentService;
  @Inject("profileService") profileService: IProfileService;

  public request: BookAppointmentValidationRequestModel =
    new BookAppointmentValidationRequestModel();

  public response: string = "";

  public time: number = null;
  public menu2: boolean = false;
  public menu1: boolean = false;
  public showAlert: boolean = false;
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  public existingCoach: Array<CoachDetailsModel> = [];

  public back() {
    this.$router.push("/client/home/appointments");
  }

  public getExistingCoach() {
    this.request.CoachDetails = new CoachDetailsModel();
    if (
      this.request.CounselingType &&
      Object.entries(this.request.CounselingType).length > 0 &&
      this.request.ExistingCoach
    ) {
      this.profileService
        .getCoachesByTypeForSelection(this.request.CounselingType.Id)
        .then((response) => {
          this.existingCoach = response;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public bookNow() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      let request = new BookAppointmentRequestModel();
      console.log(request);
      request.AppointmentDate = this.request.AppointmentDate;
      request.AppointmentTime = this.request.AppointmentTime;
      request.CounselingType = this.request.CounselingType;
      request.CoachDetails = this.request.CoachDetails;
      this.service
        .bookAppointments(request)
        .then((response) => {
          this.showAlert = true;
          this.response = response;
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
