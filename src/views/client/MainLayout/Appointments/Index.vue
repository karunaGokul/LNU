<template>
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between">
      <h2 class="font-weight-bold my-4">Appointments</h2>
      <v-btn depressed color="primary" @click="navigateBookAppointment">
        Book Appointment
      </v-btn>
    </div>
    <v-tabs v-model="tab">
      <v-tab
        href="#tab-active-appointments"
        class="text-capitalize"
        @change="reloadToCurrentMonth"
        @click="getAppointments('Confirmed')"
        >Active Appointments</v-tab
      >
      <v-tab
        href="#tab-previous-appointments"
        class="text-capitalize"
        @click="getAppointments('Completed')"
        >Previous Appointments</v-tab
      >
      <v-tab
        href="#tab-pending-appointments"
        class="text-capitalize"
        @click="getAppointments('Pending')"
        >Pending Appointments</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-active-appointments">
        <AppointmentCalendar
          :events="events"
          tab="Confirmed"
          @updateRange="updateAppointment"
          @reschedule="rescheduleAppoinment"
          @cancelAppointment="cancel"
        />
      </v-tab-item>
      <v-tab-item value="tab-previous-appointments">
        <AppointmentCalendar
          :events="events"
          @updateRange="updateAppointment"
          tab="Completed"
        />
      </v-tab-item>
      <v-tab-item value="tab-pending-appointments">
        <PendingAppointments
          @cancelAppointment="cancelAppoinment"
          @pending="onAppointmentRescheduled"
          :response="response"
        />
      </v-tab-item>
    </v-tabs-items>
    <reschedule-appointment
      v-if="showBookAppoinment"
      @appointmentBooked="onAppointmentBooked"
      @close="onClose"
      :appointmentId="appointmentId"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import RescheduleAppointment from "./component/RescheduleAppointment.vue";

import AppointmentCalendar from "./component/AppointmentCalender.vue";
import PendingAppointments from "./component/PendingAppointments.vue";

import { IAppointmentService } from "@/service";
import {
  AppoinmentRequestModel,
  EventsModel,
  AppointmentResponseModel,
} from "@/model";

@Component({
  components: {
    RescheduleAppointment,
    AppointmentCalendar,
    PendingAppointments,
  },
})
export default class AppointmentsLayout extends Vue {
  @Inject("appointmentService") service: IAppointmentService;

  public tab: string = "ActiveAppointments";
  public rating: number = 4;

  public date: string = "";

  public showBookAppoinment: boolean = false;
  public appointmentId: string = "";
  public rescheduleDate: any;

  public request: AppoinmentRequestModel = new AppoinmentRequestModel();
  public response: Array<AppointmentResponseModel> = [];

  public events: Array<EventsModel> = [];
  public colors: Array<string> = [
    "blue",
    "indigo",
    "deep-purple",
    "cyan",
    "green",
    "orange",
    "grey darken-1",
  ];

  public cancelAppoinment() {
    this.getAppointments("Pending");
  }
  reloadToCurrentMonth() {
    location.reload();
  }
  public cancel() {
    this.getAppointments("Confirmed");
    location.reload();
  }

  public onAppointmentRescheduled() {
    this.getAppointments("Pending");
  }

  public getAppointments(status: string, date?: any) {
    if (!date) date = this.$vuehelper.date.format(new Date(), "YYYY-MM-DD");

    this.request.dateRange = date;
    this.request.status = status;
    this.events = [];
    this.response = [];
    this.service
      .getAppointments(this.request)
      .then((response: Array<AppointmentResponseModel>) => {
        this.response = response;
        response.forEach((item) => {
          let event: EventsModel = new EventsModel();
          event.name = item.counselingType.name;
          event.start = this.getDate(
            item.appointmentDate,
            item.appointmentStartTime
          );
          event.end = this.getDate(
            item.appointmentDate,
            item.appointmentEndTime
          );
          event.color =
            this.colors[Math.floor(Math.random() * this.colors.length)];
          event.timed = true;
          event.id = item.id;
          this.events.push(event);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public updateAppointment(status: string, date: string) {
    this.getAppointments(status, date);
  }

  public navigateBookAppointment() {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
    });
  }

  onAppointmentBooked() {
    this.showBookAppoinment = false;
    this.getAppointments("Confirmed");
  }

  onClose() {
    this.showBookAppoinment = false;
  }

  public rescheduleAppoinment(id: string) {
    this.appointmentId = id;
    this.showBookAppoinment = true;
  }

  private getDate(date: string, time: string) {
    let value: Date = new Date(date);
    value.setHours(parseInt(time.split(":")[0]));
    value.setMinutes(parseInt(time.split(":")[1]));
    value.setMilliseconds(parseInt(time.split(":")[2]));

    return value;
  }
}
</script>
