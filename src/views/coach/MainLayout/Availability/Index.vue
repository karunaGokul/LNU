<template>
  <div class="primary-linear pa-5">
    <!-- <v-card
      class="mt-2 pa-5 d-flex justify-space-between rounded-xl card"
      width="70%"
    >
      <div class="text">
        <h1 class="mb-2 mt-7">Hi Jack!</h1>
        <p class="mb-10">
          Welcome to your daily event calender. Here! you can add your available
          time to set up meeting with clients.
        </p>
      </div>
      <div class="img">
        <img src="../../../../assets/Metting.png" />
      </div>
    </v-card> -->

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
            <v-btn color="primary mr-8" @click="ScheduleTime">Save</v-btn>
            <v-btn @click="selectedOpen = false">No</v-btn>
          </v-list-item-action>
        </v-list>
      </v-menu>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Availability extends Vue {
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
  public events = [
    {
      name: "Available Time",
      start: "2023-02-23 1:02",
      end: "2023-02-23 4:00",
    },
  ];

  mounted() {
    let calendar: any = this.$refs.calendar;
    calendar.checkChange();
    this.currentWeek = `${calendar.$data.lastStart.date} to ${calendar.$data.lastEnd.date} `;
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
  public ScheduleTime() {
    if (this.mettingEndTime && this.mettingStartTime) {
      this.events.push({
        name: "Available Time",
        start: this.currentDate + "-" + this.mettingStartTime,
        end: this.currentDate + "-" + this.mettingEndTime,
      });

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
  prev() {
    let calendar: any = this.$refs.calendar;

    calendar.prev();

    setTimeout(() => {
      this.currentWeek = `${calendar.$data.lastStart.date} to ${calendar.$data.lastEnd.date} `;
    }, 100);
  }
  next() {
    let calendar: any = this.$refs.calendar;
    setTimeout(() => {
      this.currentWeek = `${calendar.$data.lastStart.date} to ${calendar.$data.lastEnd.date} `;
    }, 100);

    calendar.next();
  }
}
</script>

<style scoped>
.text {
  width: 60%;
}
.img {
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
}
/* .action {
  display: flex;
  flex-direction: row;
  justify-content: end;
} */
</style>
