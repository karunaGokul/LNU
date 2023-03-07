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
                ampm-in-title
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
                ampm-in-title
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
    <SnackBar
      v-if="snackbar"
      :snackbarText="snackbarText"
      :snackBarStatus="snackBarStatus"
      @close="snackbar = false"
    ></SnackBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";
import { AvailablityRequestModel, AvailablityResponseModel } from "@/model";
import { IAppointmentService } from "@/service";

import SnackBar from "@/components/layout/SnackBar.vue";

@Component({
  components: {
    SnackBar,
  },
})
export default class Availability extends BaseComponent {
  @Inject("appointmentService") availabilitySerive: IAppointmentService;
  public request: AvailablityRequestModel = new AvailablityRequestModel();
  public response: AvailablityResponseModel = new AvailablityResponseModel();

  public snackbar: boolean = false;
  public snackbarText: string = "";
  public snackBarStatus: string = "";

  public value: string = "";
  public selectedOpen: boolean = false;
  public selectedElement: any = null;
  public menu1: boolean = false;
  public menu2: boolean = false;
  public time: number = null;
  public mettingStartTime: string = "";
  public mettingEndTime: string = "";
  public currentDate: string = "";
  public currentWeek: string = "";
  public startDate: string = "";
  public endDate: string = "";
  public coachId: string = "";
  public events: any = [
    {
      name: "Available Time",
      start: "2023-02-23 1:00",
      end: "2023-02-23 4:00",
    },
  ];

  mounted() {
    let calendar: any = this.$refs.calendar;

    this.setWeekDate(calendar.$data.lastStart.date, "start");
    this.setWeekDate(calendar.$data.lastEnd.date, "end");
    this.currentWeek = `${this.startDate} to ${this.endDate} `;

    this.coachId = this.$store.getters.userInfo.Id;
    this.GetAvailability();
  }

  public GetAvailability() {
    this.$forceUpdate();
    this.loadingSpinner("show");
    this.availabilitySerive
      .getAvailablity()
      .then((response) => {
        this.loadingSpinner("hide");
        let responseData: Array<AvailablityResponseModel> = [];

        this.events.splice(0, this.events.length);

        for (let availableTime in response) {
          const updateEvent = {
            name: "Available Time",
            start:
              response[availableTime].date +
              " " +
              response[availableTime].times[0].startTime,
            end:
              response[availableTime].date +
              " " +
              response[availableTime].times[0].endTime,
          };

          this.events.push(updateEvent);
        }
      })
      .catch((err) => {
        this.loadingSpinner("hide");
        console.log(err);
      });
  }

  public AddAvailability(updateEvent: AvailablityRequestModel) {
    this.availabilitySerive
      .addAvailablity(updateEvent)
      .then((response) => {
        console.log(response);
        this.GetAvailability();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public viewDay(e: any) {
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

  public ScheduleTime() {
    let isStartTimeAvailable = false;
    let isEndTimeAvailable = false;

    this.events.filter((event: any) => {
      const [startDate, startTime] = event.start.split(" ");
      const [endDate, endTime] = event.end.split(" ");

      if (
        startDate === this.currentDate &&
        this.isTimeAvailable(startTime, endTime, this.mettingStartTime) &&
        this.isTimeAvailable(startTime, endTime, this.mettingEndTime)
      ) {
        const finedStartTime = this.isTimeAvailable(
          startTime,
          endTime,
          this.mettingStartTime
        );

        const finedEndTime = this.isTimeAvailable(
          startTime,
          endTime,
          this.mettingEndTime
        );

        isStartTimeAvailable = finedStartTime;
        isEndTimeAvailable = finedEndTime;
        this.selectedOpen = false;
        this.snackbar = true;
        this.snackbarText = `Selected time are already existing please choose different time`;
      } else if (
        startDate === this.currentDate &&
        this.isTimeAvailable(startTime, endTime, this.mettingStartTime)
      ) {
        isStartTimeAvailable = true;
        isEndTimeAvailable = true;
        this.selectedOpen = false;
        this.snackbar = true;
        this.snackbarText = `Selected time are already existing please choose different time`;
      } else if (
        startDate === this.currentDate &&
        this.isTimeAvailable(startTime, endTime, this.mettingEndTime)
      ) {
        isStartTimeAvailable = true;
        isEndTimeAvailable = true;
        this.selectedOpen = false;
        this.snackbar = true;
        this.snackbarText = `Selected time are already existing please choose different time`;
      }
    });

    if (
      this.mettingEndTime &&
      this.mettingStartTime &&
      !isStartTimeAvailable &&
      !isEndTimeAvailable
    ) {
      const updateEvent = {
        date: this.currentDate,
        coachId: this.coachId,
        times: [
          {
            startTime: this.mettingStartTime,
            endTime: this.mettingEndTime,
          },
        ],
      };

      this.AddAvailability(updateEvent);
      this.selectedOpen = false;
    }
  }

  public isTimeAvailable(startTime: any, endTime: any, selectedTime: any) {
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);
    const selectedMinutes = this.timeToMinutes(selectedTime);

    if (startMinutes < endMinutes) {
      return selectedMinutes >= startMinutes && selectedMinutes <= endMinutes;
    } else {
      return selectedMinutes >= startMinutes || selectedMinutes <= endMinutes;
    }
  }

  public timeToMinutes(time: any) {
    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
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

    this.events.find((event: any) => {
      const [startDate, startTime] = event.start.split(" ");
      const [endDate, endTime] = event.end.split(" ");

      if (startDate === this.currentDate) {
        const finedStartTime = this.isTimeAvailable(
          startTime,
          endTime,
          this.mettingStartTime
        );

        const finedEndTime = this.isTimeAvailable(
          startTime,
          endTime,
          this.mettingEndTime
        );

        if (finedStartTime) {
          this.mettingStartTime = startTime;
          this.mettingEndTime = endTime;
        }
      }
    });
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
