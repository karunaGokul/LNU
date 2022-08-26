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
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
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
              <div v-if="tab == 'Confirmed'">
                <h4>Appointments</h4>
                <v-divider class="my-3"></v-divider>

                <v-btn
                  class="text-capitalize"
                  plain
                  color="primary"
                  @click="reschedule"
                  >Reschedule</v-btn
                >

                <v-btn
                  class="text-capitalize ml-3"
                  plain
                  color="red"
                  @click="cancelAppoinment"
                  >Cancel Appointment</v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
        <app-alert
          v-if="showAlert"
          @cancelAppointment="cancelAppointment"
          @close="onClose"
        ></app-alert>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Inject } from "vue-property-decorator";

import { EventsModel, CancelAppointmentModel } from "@/model";

import BaseComponent from "@/components/base/BaseComponent";
import AppAlert from "@/components/layout/AppAlert.vue";
import { IAdminService } from "@/service";

@Component({
  components: {
    AppAlert,
  },
})
export default class AppointmentCalendar extends BaseComponent {
  @Prop() events: Array<EventsModel>;
  @Prop() tab: string;
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

  mounted() {
    let calendar: any = this.$refs.calendar;
    calendar.checkChange();
  }

  public cancelAppoinment(value: boolean) {
    this.showAlert = true;
    this.selectedOpen = false;
  }

  public cancelAppointment() {
    this.showAlert = false;
    this.request.appointmentId = this.selectedEvent.id;
    this.request.reason = "change the counselling";
    this.service.cancelAppointment(this.request).then((response: any) => {
      this.$emit("cancelAppointment");
    });
  }

  onClose() {
    this.showAlert = false;
  }
  public reschedule() {
    this.selectedOpen = false;
    this.$emit("reschedule", this.selectedEvent.id);
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

  updateRange(data: any) {
    if (this.type == "month")
      this.$emit("updateRange", this.tab, data.start.date);
  }
}
</script>
