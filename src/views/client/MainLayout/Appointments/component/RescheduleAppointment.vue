<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title class="text-h5 mb-4">
          Reschedule Appointment
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-select
              label="Counselling Type"
              outlined
              dense
              v-model="request.CounselingType"
              :items="counselingProgram"
              item-text="Name"
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
                  dense
                  outlined
                  v-bind="attrs"
                  v-on="on"
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
                  dense
                  label="Select Time"
                  append-icon="schedule"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="request.AppointmentTime"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="primary" @click="reschedule"> Confirm </v-btn>
          <v-btn depressed @click="close"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Inject } from "vue-property-decorator";

import { IAppointmentService, IRegistrationService } from "@/service";
import { BookAppointmentRequestModel, CounselingModel } from "@/model";

import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class RescheduleAppointment extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;
  @Inject("appointmentService") service: IAppointmentService;

  @Prop() appointmentId: string;

  public CounselingTypes: Array<CounselingModel> = [];

  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();

  public time: number = null;
  public dialog: boolean = true;
  public menu2: boolean = false;
  public menu1: boolean = false;
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  public reschedule() {
    this.request.AppointmentId = this.appointmentId;
    this.service
      .rescheduleAppointments(this.request)
      .then((response) => {
        this.$emit("appointmentBooked");
        this.dialog = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public close() {
    this.dialog = false;
    this.$emit("close");
  }

  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }

}
</script>
