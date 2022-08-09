<template>
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between">
      <h2 class="font-weight-bold my-4">Appointments</h2>
      <v-btn depressed color="primary" @click="bookNow">
        Book Appointment
      </v-btn>
    </div>
    <v-tabs v-model="tab">
      <v-tab
        href="#tab-active-appointments"
        class="text-capitalize"
        >Active Appointments</v-tab
      >
      <v-tab
        href="#tab-previous-appointments"
        class="text-capitalize"
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
        <!-- <calendar
          :events="events"
          tab="Active Apppointment"
          :activeAppointments="activeAppointments"
          @reschedule="rescheduleAppoinment"
        /> -->
        <AppointmentCalendar
          :events="events"
          tab="Approved"
          @updateRange="updateAppointment"
        />
      </v-tab-item>
      <v-tab-item value="tab-previous-appointments">
        <AppointmentCalendar
          :events="events"
          tab="Completed"
          @updateRange="updateAppointment"
        />
      </v-tab-item>
      <v-tab-item value="tab-pending-appointments">
        <PendingAppointments />
      </v-tab-item>
    </v-tabs-items>
    <reschedule-appointment
      :appointmentType="appointmentType"
      v-if="showBookAppoinment"
      @book="onBookNow"
      @close="onClose"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import RescheduleAppointment from "./component/RescheduleAppointment.vue";

import AppointmentCalendar from "./component/AppointmentCalender.vue";
import Calendar from "./component/Calender.vue";
import PendingAppointments from "./component/PendingAppointments.vue";

import { IAppointmentService } from "@/service";
import { AppoinmentRequestModel, EventsModel } from "@/model";

@Component({
  components: {
    RescheduleAppointment,
    Calendar,
    AppointmentCalendar,
    PendingAppointments,
  },
})
export default class AppointmentsLayout extends Vue {
  @Inject("appointmentService") service: IAppointmentService;

  public tab: string = "ActiveAppointments";
  public rating: number = 4;
  public activeAppointments: boolean = true;
  public previousAppointments: boolean = true;
  public bookAppointments: boolean = true;

  public showBookAppoinment: boolean = false;
  public appointmentType: string = "";

  public request: AppoinmentRequestModel = new AppoinmentRequestModel();

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

  public getAppointments(status: string, date?: any) {
    if (!date) date = this.$vuehelper.date.format(new Date(), "YYYY-MM-DD");

    this.request.dateRange = date;
    this.request.status = status;
    this.events = [];
    this.service
      .getAppointments(this.request)
      .then((response) => {
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

  public bookNow() {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
    });
  }

  onBookNow() {
    this.showBookAppoinment = false;
  }

  onClose() {
    this.showBookAppoinment = false;
  }

  public rescheduleAppoinment() {
    this.showBookAppoinment = true;
    this.appointmentType = "Reschedule Appointment";
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
