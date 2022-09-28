<template>
  <div class="pa-4 primary-linear">
    <h2 class="font-weight-bold my-4">Upcoming Appointments</h2>
    <calendar
      :events="events"
      @updateRange="updateRange"
      @cancelAppointment="cancelAppointment"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import {
  AppoinmentRequestModel,
  EventsModel,
  AppointmentResponseModel,
} from "@/model";
import { IAppointmentService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";
import Calendar from "./component/Calendar.vue";

@Component({
  components: {
    Calendar,
  },
})
export default class calender extends BaseComponent {
  @Inject("appointmentService") appointmentService: IAppointmentService;
  public requests: AppoinmentRequestModel = new AppoinmentRequestModel();
  public events: Array<EventsModel> = [];
  public response: Array<AppointmentResponseModel> = [];
  public colors: Array<string> = [
    "blue",
    "indigo",
    "deep-purple",
    "cyan",
    "green",
    "orange",
    "grey darken-1",
  ];

  public updateRange(data: any) {
    this.getAppointments("Confirmed", data);
  }
  public cancelAppointment() {
    this.getAppointments("Confirmed");
  }
  public getAppointments(status: string, date?: any) {
    if (!date) date = this.$vuehelper.date.format(new Date(), "YYYY-MM-DD");

    this.requests.dateRange = date;
    // this.requests.status = status;
    this.events = [];
    this.appointmentService
      .getAppointments(this.requests)
      .then((response: Array<AppointmentResponseModel>) => {
        this.response = response;

        response.forEach((item) => {
          let event: EventsModel = new EventsModel();
          event.name = item.counselingType.Name;
          // event.start = this.getDate(
          //   item.appointmentDate,
          //   item.appointmentStartTime
          // );
          // event.end = this.getDate(
          //   item.appointmentDate,
          //   item.appointmentEndTime
          // );
          event.color =
            this.colors[Math.floor(Math.random() * this.colors.length)];
          event.timed = true;
          // event.id = item.id;
          this.events.push(event);
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
