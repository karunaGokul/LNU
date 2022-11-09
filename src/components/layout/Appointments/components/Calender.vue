<template>
  <v-row class="fill-height mt-3">
    <v-col>
      <v-sheet height="70" color="transparent">
        <v-toolbar flat color="transparent">
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
      <v-sheet height="680" color="transparent">
        <v-calendar
          ref="calendar"
          v-model="focus"
          :events="events"
          :event-color="getEventColor"
          :event-more="eventMore"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateCalender"
        >
          <template v-slot:events="{ events }">
            <div class="pl-1">
              {{ events }}
            </div>
          </template>
        </v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <div>
                <h4>Appointments</h4>
                <v-divider class="my-3"></v-divider>

                <v-row>
                  <v-col>
                    <v-label>Counseling Program:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.name }}</h4>
                  </v-col>
                </v-row>
                <v-row v-if="selectedEvent.coachName && User != 'Coach'">
                  <v-col>
                    <v-label>Coach Name:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.coachName }}</h4>
                  </v-col>
                </v-row>
                <v-row v-if="selectedEvent.clientName && User == 'Coach'">
                  <v-col>
                    <v-label>Client Name:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.clientName }}</h4>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-label>Appointment Date & Time:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.appointmentDate }}</h4>
                    <h4>{{ selectedEvent.appointmentTime }}</h4>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-label>Notes:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.tellAboutYourSelf }}</h4>
                  </v-col>
                </v-row>
                <v-row v-if="User == 'Coach' && selectedEvent.clientSummary">
                  <v-col>
                    <v-label>Summary:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.clientSummary }}</h4>
                  </v-col>
                </v-row>
                <div v-if="selectedEvent.status == 'Completed'">
                  <v-row v-if="selectedEvent.coachNotes">
                    <v-col>
                      <v-label>Review Notes:</v-label>
                    </v-col>
                    <v-col>
                      <h4>{{ selectedEvent.coachNotes }}</h4>
                    </v-col>
                  </v-row>
                  <v-row v-if="selectedEvent.recordingLink">
                    <v-col>
                      <v-label>Recording Link:</v-label>
                    </v-col>
                    <v-col>
                      <h4>{{ selectedEvent.recordingLink }}</h4>
                    </v-col>
                  </v-row>
                </div>

                <v-row
                  v-if="
                    selectedEvent.status == 'Confirmed' &&
                    User != 'Coach' &&
                    selectedEvent.invitationLink
                  "
                >
                  <v-col>
                    <v-label>Link:</v-label>
                  </v-col>
                  <v-col>
                    <h4>{{ selectedEvent.invitationLink }}</h4>
                  </v-col>
                </v-row>

                <v-row
                  v-if="
                    selectedEvent.status == 'Pending' ||
                    selectedEvent.status == 'Confirmed'
                  "
                >
                  <v-col
                    cols="5"
                    md="5"
                    v-if="selectedEvent.status == 'Pending' && User == 'Admin'"
                  >
                    <v-btn
                      plain
                      dark
                      class="text-capitalize"
                      color="primary"
                      @click="assignCoach"
                      >assign coach</v-btn
                    >
                  </v-col>
                  <v-col
                    cols="5"
                    md="5"
                    v-if="
                      selectedEvent.status == 'Pending' &&
                      User != 'Admin' &&
                      selectedEvent.canConfirm
                    "
                  >
                    <v-btn
                      plain
                      dark
                      class="text-capitalize"
                      color="primary"
                      @click="confirmAppointment"
                      >confirm</v-btn
                    >
                  </v-col>
                  <v-col>
                    <v-btn
                      class="text-capitalize text-wrap"
                      plain
                      color="red"
                      @click="deleteAppointment"
                      >Cancel</v-btn
                    >
                  </v-col>
                  <v-col
                    v-if="
                      selectedEvent.status == 'Confirmed' && User == 'Coach'
                    "
                  >
                    <v-btn
                      class="text-capitalize"
                      plain
                      color="primary"
                      @click="review('invite')"
                      >Invite Link</v-btn
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    class="pt-0"
                    v-if="
                      selectedEvent.status == 'Pending' &&
                      selectedEvent.canReschedule
                    "
                  >
                    <v-btn
                      class="text-capitalize"
                      plain
                      color="primary"
                      @click="reschedule"
                      >Reschedule</v-btn
                    >
                  </v-col>
                  <v-col
                    v-if="
                      this.selectedEvent.status == 'Confirmed' &&
                      User == 'Coach'
                    "
                    class="pt-0"
                  >
                    <v-btn
                      class="text-capitalize"
                      plain
                      color="primary"
                      @click="review"
                      >Complete</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
        <app-alert
          v-if="showAlert"
          message="Are you sure you want to cancel the Appointment"
          @No="onClose"
          @Yes="cancelAppointment"
        ></app-alert>
      </v-sheet>
      <v-sheet height="40">
        <ul
          class="d-flex align-center justify-start legends mt-4"
          style="width: 100%"
        >
          <li class="legends-item">
            <v-icon small color="#408D43">lens</v-icon>
            Active Appointments
          </li>
          <li class="legends-item">
            <v-icon small color="#5e5c57">lens</v-icon>
            Previous Appointments
          </li>
          <li class="legends-item">
            <v-icon small color="#cfa532">lens</v-icon> Pending Appointments
          </li>
          <li class="legends-item">
            <v-icon small color="#2b2a28">lens</v-icon> Cancelled Appointments
          </li>
        </ul>
      </v-sheet>
    </v-col>
    <snack-bar
      v-if="snackbar"
      :snackbarText="snackbarText"
      :snackBarStatus="snackBarStatus"
      @close="OnSnackBarClose"
    />
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";

import AppAlert from "@/components/layout/AppAlert.vue";
import SnackBar from "@/components/layout/SnackBar.vue";

import { IAdminService } from "@/service";
import { EventsModel, CancelAppointmentModel } from "@/model";

@Component({
  components: {
    AppAlert,
    SnackBar,
  },
})
export default class Calendar extends BaseComponent {
  @Prop() events: Array<EventsModel>;
  @Prop() User: string;
  @Prop() reviewNotes: string;
  @Prop() reviewLink: string;
  @Inject("adminService") service: IAdminService;

  public request: CancelAppointmentModel = new CancelAppointmentModel();
  public focus: string = "";
  public type: string = "month";
  public typeToLabel: any = {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  };
  public selectedEvent: any = {};
  public selectedElement: any = null;
  public selectedOpen: boolean = false;
  public colors: Array<string> = [
    "blue",
    "indigo",
    "deep-purple",
    "cyan",
    "green",
    "orange",
    "grey darken-1",
  ];

  public showAlert: boolean = false;
  public snackbar: boolean = false;
  public snackbarText: string = "";
  public snackBarStatus: string = "";

  mounted() {
    let calendar: any = this.$refs.calendar;
    calendar.checkChange();
  }

  public assignCoach() {
    this.selectedOpen = false;
    this.$emit("assignCoach", this.selectedEvent);
  }

  public deleteAppointment(value: boolean) {
    this.showAlert = true;
    this.selectedOpen = false;
  }

  public confirmAppointment() {
    this.request.appointmentId = this.selectedEvent.id;
    this.loadingSpinner("show");
    this.service.confirmAppointment(this.request).then(
      (response: any) => {
        this.loadingSpinner("hide");
        this.snackbarText = response;
        this.snackbar = true;
        this.snackBarStatus = "Success";
        this.$emit("confirmAppointment", this.selectedEvent.appointmentDate);
      },
      (err) => {
        this.loadingSpinner("hide");
        if (err.response.status === 400) {
          this.snackbarText = err.response.data;
          this.snackbar = true;
        }
      }
    );
  }

  public cancelAppointment() {
    this.showAlert = false;
    this.request.appointmentId = this.selectedEvent.id;
    this.request.reason = "change the counselling";
    this.loadingSpinner("show");
    this.service.cancelAppointment(this.request).then(
      (response: any) => {
        this.loadingSpinner("hide");
        this.snackbarText = response;
        this.snackbar = true;
        this.snackBarStatus = "Success";
        this.$emit("cancelAppointment", this.selectedEvent.appointmentDate);
      },
      (err) => {
        this.loadingSpinner("hide");
        if (err.response.status === 400) {
          this.snackbarText = err.response.data;
          this.snackbar = true;
        }
      }
    );
  }

  onClose() {
    this.showAlert = false;
  }

  public reschedule() {
    this.selectedOpen = false;
    this.$emit("reschedule", this.selectedEvent.id, this.selectedEvent);
  }

  public review(inviteLink: string) {
    this.selectedOpen = false;

    this.$emit("review", this.selectedEvent.id, inviteLink);
  }

  public viewDay(data: any) {
    this.focus = data.date;
    this.type = "day";
  }

  getEventColor(event: any) {
    return event.color;
  }

  setToday() {
    this.focus = "";
  }

  prev() {
    let calendar: any = this.$refs.calendar;
    calendar.prev();
    this.type = "month";
  }

  next() {
    let calendar: any = this.$refs.calendar;
    calendar.next();
    this.type = "month";
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

  updateCalender(data: any) {
    if (this.type == "month") this.$emit("updateCalender", data.start.date);
  }

  get eventMore() {
    return true;
  }

  public OnSnackBarClose() {
    this.snackbar = false;
  }
}
</script>
