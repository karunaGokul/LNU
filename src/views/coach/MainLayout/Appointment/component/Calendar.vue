<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <div
            class="d-flex align-center justify-space-between"
            style="width: 100%"
          >
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>

            <div class="d-flex align-center">
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small> chevron_left </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small> chevron_right </v-icon>
              </v-btn>
            </div>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right> arrow_drop_down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="request.Date"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @change="updateRange"
        ></v-calendar>

        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>more-vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <!-- <span v-html="selectedEvent.details"></span> -->

              <h4>Upcoming Appointments</h4>
              <v-divider class="my-3"></v-divider>

              <v-btn
                class="text-capitalize"
                color="primary"
                dark
                @click="appointment"
                >reschedule</v-btn
              >
              <v-btn
                class="text-capitalize ml-3"
                color="red"
                dark
                @click="deleteAppointment"
                >cancel</v-btn
              >
            </v-card-text>
          </v-card>
        </v-menu>
        <app-alert
          v-if="showAlert"
          @cancelAppointment="cancelAppointment"
          @close="onClose"
        ></app-alert>
      </v-sheet>
      <up-coming-appointment v-if="showAppointment" />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

import {
  BookAppointmentRequestModel,
  CounselingModel,
  CancelAppointmentModel,
  AppoinmentRequestModel,
  EventsModel,
  AppointmentResponseModel,
} from "@/model";

import {
  IAppointmentService,
  IRegistrationService,
  IAdminService,
} from "@/service";

import BaseComponent from "@/components/base/BaseComponent";
import UpComingAppointment from "./UpComingAppointment.vue";
import AppAlert from "@/components/layout/AppAlert.vue";

@Component({
  components: {
    UpComingAppointment,
    AppAlert,
  },
})
export default class Calendar extends BaseComponent {
  @Inject("appointmentService") appointmentService: IAppointmentService;
  @Inject("registerService") registerService: IRegistrationService;
  @Inject("adminService") service: IAdminService;
  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();

  public focus: string = "";
  public type: string = "month";
  public showAppointment: boolean = false;
  public dialog: boolean = false;
  public selectedEvent: any = {};
  public selectedElement: any = null;
  public selectedOpen: boolean = false;

  // public events: Array<any> = [];
  public showAlert: boolean = false;
  public removeAppointment: CancelAppointmentModel =
    new CancelAppointmentModel();
  public requests: AppoinmentRequestModel = new AppoinmentRequestModel();
  public response: Array<AppointmentResponseModel> = [];

  public events: Array<EventsModel> = [];
  public typeToLabel: any = {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  };
  public colors: Array<string> = [
    "blue",
    "indigo",
    "deep-purple",
    "cyan",
    "green",
    "orange",
    "grey darken-1",
  ];
  public names: Array<string> = [
    "Meeting",
    "Holiday",
    "PTO",
    "Travel",
    "Event",
    "Birthday",
    "Conference",
    "Party",
  ];
  created() {
    this.getAppointments("Pending");
  }
  public appointment() {
    this.showAppointment = true;
  }

  mounted() {
    let calendar: any = this.$refs.calendar;
    calendar.checkChange();
  }

  public viewDay(data: any) {
    this.focus = data.date;
    this.type = "day";
  }

  public getEventColor(event: any) {
    return event.color;
  }

  public setToday() {
    this.focus = "";
  }

  prev() {
    let calendar: any = this.$refs.calendar;
    calendar.prev();
  }
  next() {
    let calendar: any = this.$refs.calendar;
    calendar.next();
  }

  showEvent(data: any) {
    let nativeEvent = data.nativeEvent;
    let event = data.event;
    const open = () => {
      this.selectedEvent = event;
      this.selectedElement = nativeEvent.target;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => (this.selectedOpen = true))
      );
    };

    if (this.selectedOpen) {
      this.selectedOpen = false;
      requestAnimationFrame(() => requestAnimationFrame(() => open()));
    } else {
      open();
    }

    nativeEvent.stopPropagation();
  }
  updateRange(data: any) {
    if (this.type == "month") {
      this.getAppointments("Confirmed", data.start.date);
    }
  }
  // updateRange(data: any) {
  //   let start = data.start;
  //   let end = data.end;

  //   const events = [];

  //   const min = new Date(`${start.date}T00:00:00`);
  //   const max = new Date(`${end.date}T23:59:59`);
  //   const days = (max.getTime() - min.getTime()) / 86400000;
  //   const eventCount = this.rnd(days, days + 20);

  //   for (let i = 0; i < eventCount; i++) {
  //     const allDay = this.rnd(0, 3) === 0;
  //     const firstTimestamp = this.rnd(min.getTime(), max.getTime());
  //     const first = new Date(firstTimestamp - (firstTimestamp % 900000));
  //     const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
  //     const second = new Date(first.getTime() + secondTimestamp);

  //     events.push({
  //       name: this.names[this.rnd(0, this.names.length - 1)],
  //       start: first,
  //       end: second,
  //       color: this.colors[this.rnd(0, this.colors.length - 1)],
  //       timed: !allDay,
  //     });
  //   }

  //   this.events = events;
  //   console.log(data);
  // }

  // private rnd(a: number, b: number) {
  //   return Math.floor((b - a + 1) * Math.random()) + a;
  // }

  public bookAppointment() {
    // this.$v.$touch();
    // if (!this.$v.$invalid) {
    // this.request.appointmentDate = this.focus;
    console.log(this.request);
    this.appointmentService
      .bookAppointments(this.request)
      .then((response: any) => {
        console.log(response);
      });
    // }
  }

  public getAppointments(status: string, date?: any) {
    if (!date) date = this.$vuehelper.date.format(new Date(), "YYYY-MM-DD");

    this.requests.dateRange = date;
    this.requests.status = status;
    this.events = [];
    this.appointmentService
      .getAppointments(this.requests)
      .then((response: Array<AppointmentResponseModel>) => {
        this.response = response;
        console.log(this.response);
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
        console.log(this.events);
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

  public deleteAppointment(value: boolean) {
    this.showAlert = true;
    this.selectedOpen = false;
  }

  public cancelAppointment() {
    this.showAlert = false;
    this.removeAppointment.appointmentId = this.selectedEvent.id;
    this.removeAppointment.reason = "change the counselling";
    this.service
      .cancelAppointment(this.removeAppointment)
      .then((response: any) => {
        this.getAppointments("Pending");
      });
  }

  onClose() {
    this.showAlert = false;
  }
}
</script>
