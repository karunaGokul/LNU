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
      <v-sheet height="600" v-if="!bookAppointments">
        <v-calendar
          ref="calendar"
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
              <div v-if="activeAppointments">
                <h4>Appointments</h4>
                <v-divider class="my-3"></v-divider>

                <v-btn
                  class="text-capitalize"
                  color="primary"
                  dark
                  @click="Reschedule"
                  >Reschedule</v-btn
                >

                <v-btn
                  class="text-capitalize ml-3"
                  color="red"
                  dark
                  @click="selectedOpen = false"
                  >Cancel</v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Inject } from "vue-property-decorator";

import { BookAppointmentRequestModel, CounselingModel } from "@/model";

import { IAppointmentService, IRegistrationService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class Calendar extends BaseComponent {
  @Inject("appointmentService") appointmentService: IAppointmentService;
  @Inject("registerService") registerService: IRegistrationService;

  @Prop() activeAppointments: boolean;
  @Prop() previousAppointments: boolean;
  @Prop() bookAppointments: boolean;

  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();
  public CounselingTypes: Array<CounselingModel> = [];

  public focus: string = "";
  public type: string = "month";
  public time: number = null;
  public item: any = ["Foo", "Bar", "Fizz", "Buzz"];
  public typeToLabel: any = {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  };
  public selectedEvent: any = {};
  public selectedElement: any = null;
  public selectedOpen: boolean = false;
  public events: Array<any> = [];

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

  mounted() {
    let calendar: any = this.$refs.calendar;
    calendar.checkChange();
  }

  public Reschedule() {
    this.selectedOpen = false;
    this.$emit("reschedule");
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
    this.events.push({
      name: "Behavioural Counseling",
      start: new Date(),
      end: new Date(),
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      timed: true,
    });

    this.events.push({
      name: "Behavioural Counseling",
      start: new Date(),
      end: new Date(),
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      timed: true,
    });

    this.events.push({
      name: "Marriage Counseling",
      start: new Date(),
      end: new Date(),
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      timed: true,
    });
  }

  private rnd(a: number, b: number) {
    return Math.floor((b - a + 1) * Math.random()) + a;
  }
}
</script>
