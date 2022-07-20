<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <div class="d-flex align-center justify-center" style="width: 100%">
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
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
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <!-- <span v-html="selectedEvent.details"></span> -->
              <div v-if="activeAppointments">
                <h4>Appointments</h4>
                <v-divider class="my-3"></v-divider>
                <v-btn class="text-capitalize" color="primary" dark
                  >reshedule</v-btn
                >
                <v-btn
                  class="text-capitalize ml-3"
                  color="red"
                  dark
                  @click="selectedOpen = false"
                  >cancel</v-btn
                >
              </div>
              <div v-else>
                <h4>Rating</h4>
                <v-divider class="my-3"></v-divider>
                <v-rating
                  background-color="#FCB258"
                  color="#FCB258"
                  half-increments
                  hover
                  value="3"
                  length="5"
                  large
                  >star</v-rating
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
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Calendar extends Vue {
  @Prop() activeAppointments: boolean;

  public focus: string = "";
  public type: string = "month";
  /*public typeToLabel: any = {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  };*/
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
    let start = data.start;
    let end = data.end;

    const events = [];

    const min = new Date(`${start.date}T00:00:00`);
    const max = new Date(`${end.date}T23:59:59`);
    const days = (max.getTime() - min.getTime()) / 86400000;
    const eventCount = this.rnd(days, days + 20);

    for (let i = 0; i < eventCount; i++) {
      const allDay = this.rnd(0, 3) === 0;
      const firstTimestamp = this.rnd(min.getTime(), max.getTime());
      const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
      const second = new Date(first.getTime() + secondTimestamp);

      events.push({
        name: this.names[this.rnd(0, this.names.length - 1)],
        start: first,
        end: second,
        color: this.colors[this.rnd(0, this.colors.length - 1)],
        timed: !allDay,
      });
    }

    this.events = events;
  }

  private rnd(a: number, b: number) {
    return Math.floor((b - a + 1) * Math.random()) + a;
  }
}
</script>
