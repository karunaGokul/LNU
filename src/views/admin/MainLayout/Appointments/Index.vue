<template>
  <v-container class="primary-linear">
    <v-row class="mt-5 ml-4">
      <h2>Appointments</h2>
    </v-row>
   <appointment-calendar :events="events" @assignCoach="assignCoach" @cancelAppointment="cancelAppointment" />
    <assign-coach v-if="showAssignCoach" :selectedEvent="selectedEvent" />
       
  </v-container>
</template>

<script lang="ts">
import { AppoinmentRequestModel, AppointmentResponseModel, cancelAppointmentModel, EventsModel } from "@/model";
import { IAdminService, IAppointmentService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";
import AppointmentCalendar from "./component/AppointmentCalendar.vue";
import AssignCoach from "./component/AssignCoach.vue";

@Component({
  components: {
    AppointmentCalendar, AssignCoach
  },
})
export default class Appointments extends Vue {
  @Inject("appointmentService") service: IAppointmentService;
  @Inject("adminService") adminService: IAdminService;
  
  public items = ["Foo", "Bar", "Fizz", "Buzz"];
  public showAssignCoach: boolean = false;

  public clientName: string = "";
  public coachName: string = "";
  public appointmentId: string = "";
  public selectedEvent: any;

  public cancelRequest: cancelAppointmentModel = new cancelAppointmentModel();
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

  created() {
    this.getAppointments("Confirmed");
    
  }

  public assignCoach(event: any) {
    this.showAssignCoach = true;
    this.selectedEvent = event;
  
  }

  public cancelAppointment(event: any) {
    this.cancelRequest.appointmentId = event.id;
    this.cancelRequest.reason = "change of plan";
    console.log(this.cancelRequest.appointmentId);
    this.adminService
      .cancelAppointment(this.cancelRequest)
      .then((response: any) => {
       this.getAppointments("Confirmed");
      });
  }

  public getAppointments(status: string, date?: any) {
    if (!date) date = this.$vuehelper.date.format(new Date(), "YYYY-MM-DD");

    this.request.dateRange = date;
    this.request.status = status;
    this.events = [];
    this.service
      .getAppointments(this.request)
      .then((response: Array<AppointmentResponseModel>) => {
        this.response = response;
        response.forEach((item) => {
          let event: EventsModel = new EventsModel();
          event.name = item.counselingType.name;
          event.clientName = item.clientName;
          event.coachName = item.coachName;
          // console.log(event.clientName);
          // console.log(event.coachName);
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

  private getDate(date: string, time: string) {
    let value: Date = new Date(date);
    value.setHours(parseInt(time.split(":")[0]));
    value.setMinutes(parseInt(time.split(":")[1]));
    value.setMilliseconds(parseInt(time.split(":")[2]));

    return value;
  }
}
</script>
