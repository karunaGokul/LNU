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
                @click="reschedule"
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
      <up-coming-appointment
        :appointmentId="appointmentId"
        @close="Close"
        v-if="showAppointment"
      />
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
  @Prop() events: Array<EventsModel>;
  @Inject("appointmentService") appointmentService: IAppointmentService;
  @Inject("registerService") registerService: IRegistrationService;
  @Inject("adminService") service: IAdminService;
  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();
  public appointmentId: string = "";
  public focus: string = "";
  public type: string = "month";
  public showAppointment: boolean = false;
  public dialog: boolean = false;
  public selectedEvent: any = {};
  public selectedElement: any = null;
  public selectedOpen: boolean = false;

  public showAlert: boolean = false;
  public removeAppointment: CancelAppointmentModel =
    new CancelAppointmentModel();

  // public events: Array<EventsModel> = [];
  public typeToLabel: any = {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  };

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
 
  public reschedule() {
    this.appointmentId = this.selectedEvent.id;
    this.showAppointment = true;
    this.selectedOpen = false;
  }
  public Close() {
    this.showAppointment = false;
    location.reload();
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
      this.$emit("updateRange", data.start.date);
    }
  }

  public bookAppointment() {
    // this.$v.$touch();
    // if (!this.$v.$invalid) {
    // this.request.appointmentDate = this.focus;
    // console.log(this.request);
    this.appointmentService
      .bookAppointments(this.request)
      .then((response: any) => {
        console.log(response);
      });
    // }
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
        this.$emit("cancelAppointment");
      });
  }

  onClose() {
    this.showAlert = false;
  }
}
</script>
