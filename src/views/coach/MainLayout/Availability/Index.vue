<template>
  <div class="primary-linear pa-5">
    <v-toolbar flat color="transparent">
      <div class="d-flex align-center justify-center" style="width: 100%">
        <div class="d-flex align-center">
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> chevron_left </v-icon>
          </v-btn>
          <v-toolbar-title>
            {{ currentWeek }}
          </v-toolbar-title>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> chevron_right </v-icon>
          </v-btn>
        </div>
      </div>
    </v-toolbar>
    <v-sheet height="500">
      <v-calendar
        v-model="value"
        ref="calendar"
        :events="events"
        color="primary"
        type="week"
        @click:date="viewDay"
        @click:time="viewTime"
        @click:event="event"
      ></v-calendar>
      <v-menu
        v-model="selectedOpen"
        :activator="selectedElement"
        :close-on-content-click="false"
        offset-x
      >
        <v-list class="pa-5">
          <v-list-item-title>
            <p>Schedule your time</p>
          </v-list-item-title>
          <v-list-item>
            <v-menu
              ref="menu1"
              :nudge-left="150"
              v-model="menu1"
              transition="scale-transition"
              min-width="300"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="mettingStartTime"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                  label="Meeting Start time"
                  append-icon="schedule"
                  readonly
                >
                </v-text-field>
              </template>
              <v-time-picker
                v-model="mettingStartTime"
                v-if="menu1"
                full-width
                @click:minute="$refs.menu1.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-list-item>
          <v-list-item>
            <v-menu
              ref="menu2"
              :nudge-left="150"
              v-model="menu2"
              transition="scale-transition"
              min-width="300"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="mettingEndTime"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                  label="Meeting End time"
                  append-icon="schedule"
                  readonly
                >
                </v-text-field>
              </template>
              <v-time-picker
                v-model="mettingEndTime"
                v-if="menu2"
                full-width
                @click:minute="$refs.menu2.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-list-item>
          <v-list-item-action class="d-flex flex-row justify-end">
            <v-btn
              color="primary mr-8"
              class="text-capitalize"
              @click="ScheduleTime"
              >Save</v-btn
            >
            <v-btn @click="selectedOpen = false" class="text-capitalize"
              >Cancel</v-btn
            >
          </v-list-item-action>
        </v-list>
      </v-menu>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { AvailablityRequestModel, AvailablityResponseModel } from "@/model";
import { IAppointmentService } from "@/service";

@Component({
  components: {},
})
export default class Availability extends Vue {
  @Inject("appointmentService") availablitySerive: IAppointmentService;
  public request: AvailablityRequestModel = new AvailablityRequestModel();
  public response: AvailablityResponseModel = new AvailablityResponseModel();

  public value = "";
  public selectedOpen: boolean = false;
  public selectedElement: any = null;
  public menu1: boolean = false;
  public menu2: boolean = false;
  public time: number = null;
  public mettingStartTime = "";
  public mettingEndTime = "";
  public currentDate = "";
  public currentWeek = "";
  public startDate = "";
  public endDate = "";
  public events = [
    {
      name: "Available Time",
      start: "2023-02-23 1:00",
      end: "2023-02-23 4:00",
    },
  ];

  public duplicateEvent = "";

  mounted() {
    let calendar: any = this.$refs.calendar;
    // calendar.checkChange();

    this.setWeekDate(calendar.$data.lastStart.date, "start");
    this.setWeekDate(calendar.$data.lastEnd.date, "end");
    this.currentWeek = `${this.startDate} to ${this.endDate} `;
  }

  public viewDay(e: any) {
    console.log(e);
    if (e.future || e.present) {
      this.currentDate = e.date;
      this.mettingStartTime = e.time;

      this.selectedOpen = true;
      this.selectedElement = e.nativeEvent.target;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => (this.selectedOpen = true))
      );
    }
  }

  public event(e: any) {
    console.log(e.event.start);
    this.duplicateEvent = e.event.start;
  }

  public ScheduleTime() {
    if (this.mettingEndTime && this.mettingStartTime) {
      const updateEvent = {
        name: "Available Time",
        start: this.currentDate + " " + this.mettingStartTime,
        end: this.currentDate + " " + this.mettingEndTime,
      };

      const updateEventApi = {
        date: this.currentDate,
        coachId: +new Date(),
        times: [this.mettingStartTime, this.mettingEndTime],
      };

      this.availablitySerive.updateAvailablity(updateEventApi);
      this.events.push(updateEvent);

      this.selectedOpen = false;
    }
  }

  public viewTime(e: any) {
    if (e.future) {
      this.currentDate = e.date;
      this.mettingStartTime = e.time;

      this.selectedOpen = true;
      this.selectedElement = e.nativeEvent.target;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => (this.selectedOpen = true))
      );
    }
  }

  public setWeekDate(date: string, type: string) {
    let fullDate = new Date(date);
    let dd: string | number = fullDate.getDate();
    let mm: string | number = fullDate.getMonth();
    let yyyy = fullDate.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    if (type === "start") {
      this.startDate = `${dd}-${mm}-${yyyy}`;
    } else {
      this.endDate = `${dd}-${mm}-${yyyy}`;
    }
  }

  public prev() {
    let calendar: any = this.$refs.calendar;
    calendar.prev();

    setTimeout(() => {
      this.setWeekDate(calendar.$data.lastStart.date, "start");
      this.setWeekDate(calendar.$data.lastEnd.date, "end");

      this.currentWeek = `${this.startDate} to ${this.endDate} `;
    }, 10);
  }
  public next() {
    let calendar: any = this.$refs.calendar;
    calendar.next();

    setTimeout(() => {
      this.setWeekDate(calendar.$data.lastStart.date, "start");
      this.setWeekDate(calendar.$data.lastEnd.date, "end");
      this.currentWeek = `${this.startDate} to ${this.endDate} `;
    }, 10);
  }
}
</script>
