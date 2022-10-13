<template>
  <div>
    <calendar
      :events="events"
      :User="User"
      @assignCoach="assignCoach"
      @updateCalender="onUpdateCalender"
      @reschedule="rescheduleAppoinment"
      @cancelAppointment="cancelAppoinment"
    />

    <reschedule-appointment
      v-if="showBookAppoinment"
      @appointmentRescheduled="onAppointmentRescheduled"
      @close="onClose"
      :appointmentId="appointmentId"
    />

    <assign-coach
      v-if="showAssignCoach"
      :selectedEvent="selectedEvent"
      @done="updateAppointment"
      @close="onClose"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject, Prop } from "vue-property-decorator";

import Calendar from "./components/Calender.vue";
import RescheduleAppointment from "./components/RescheduleAppointment.vue";
import AssignCoach from "./components/AssignCoach.vue";

import { IAppointmentService } from "@/service";

import {
  AppoinmentRequestModel,
  EventsModel,
  AppointmentResponseModel,
} from "@/model";

@Component({
  components: {
    RescheduleAppointment,
    Calendar,
    AssignCoach
  },
})
export default class AppointmentsLayout extends Vue {
  @Prop() User: string;
  @Inject("appointmentService") service: IAppointmentService;

  public date: string = "";

  public showBookAppoinment: boolean = false;
  public showAssignCoach:boolean = false;
  public selectedEvent: any;
  public appointmentId: string = "";
  public rescheduleDate: any;

  public request: AppoinmentRequestModel = new AppoinmentRequestModel();
  public response: Array<AppointmentResponseModel> = [];

  public events: Array<EventsModel> = [];

  public getAppointments(date?: any) {
    if (!date) date = this.$vuehelper.date.format(new Date(), "YYYY-MM-DD");

    this.request.dateRange = date;
    this.events = [];
    this.response = [];
    this.service
      .getAppointments(this.request)
      .then((response: Array<AppointmentResponseModel>) => {
        this.response = response;

        response.forEach((item) => {
          let event: EventsModel = new EventsModel();
          event.name = item.counselingType.Name;
          event.status = item.status;
          event.clientName = item.clientName;
          event.coachName = item.coachName;
          event.id = item.id;
          event.counselingTypeId = item.counselingType.Id;
          event.tellAboutYourSelf = item.tellAboutYourSelf;

          if (event.status == "Confirmed") event.color = "#408D43";
          else if (event.status == "Completed") event.color = "#5e5c57";
          else if (event.status == "Pending") event.color = "#cfa532";
          else if (event.status == "Cancelled") event.color = "#2b2a28";
          else event.color = "red";

          event.start = this.getDate(
            item.appointmentDate,
            item.appointmentTime
          );
          event.end = this.getDate(item.appointmentDate, item.appointmentTime);
          event.timed = true;
          this.events.push(event);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public onUpdateCalender(date: string) {
    this.getAppointments(date);
  }

  public navigateBookAppointment() {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
    });
  }

  public assignCoach(event: any) {
    this.showAssignCoach = true;
    this.selectedEvent = event;
  }

  public updateAppointment(date: string) {
    this.showAssignCoach = false;
    this.getAppointments();
  }

  // Reschedule Appoinment Method Start

  onClose() {
    this.showBookAppoinment = false;
    // location.reload();
  }

  public rescheduleAppoinment(id: string) {
    this.appointmentId = id;
    this.showBookAppoinment = true;
  }

  public onAppointmentRescheduled() {
    this.showBookAppoinment = false;
    this.getAppointments();
    // location.reload();
  }

  // Reschedule Appoinment Method End

  public cancelAppoinment() {
    // this.getAppointments();
    location.reload();
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
