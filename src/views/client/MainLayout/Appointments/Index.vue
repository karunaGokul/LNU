<template>
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between">
      <h2 class="font-weight-bold my-4">Appointments</h2>
      <v-btn depressed color="primary" @click="bookNow">
        Book Appointment
      </v-btn>
    </div>
    <v-tabs v-model="tab">
      <v-tab href="#tab-active-appointments" class="text-capitalize"
        >Active Appointments</v-tab
      >
      <v-tab href="#tab-previous-appointments" class="text-capitalize"
        >Previous Appointments</v-tab
      >
      <v-tab href="#tab-pending-appointments" class="text-capitalize"
        >Pending Appointments</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-active-appointments">
        <calendar :activeAppointments="activeAppointments" @reschedule="rescheduleAppoinment"/>
      </v-tab-item>
      <v-tab-item value="tab-previous-appointments">
        <v-row class="fill-height">
          <v-col col="12" md="12" sm="6">
            <calendar :previousAppointments="previousAppointments"
          /></v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-pending-appointments">
        <PendingAppointments />
      </v-tab-item>
    </v-tabs-items>
    <reschedule-appointment
      :appointmentType="appointmentType"
      v-if="showBookAppoinment"
      @book="onBookNow"
      @close="onClose"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import RescheduleAppointment from "./component/RescheduleAppointment.vue";

import Calendar from "./component/Calender.vue";
import PendingAppointments from "./component/PendingAppointments.vue";

@Component({
  components: {
    RescheduleAppointment,
    Calendar,
    PendingAppointments,
  },
})
export default class AppointmentsLayout extends Vue {
  public tab: string = "ActiveAppointments";
  public rating: number = 4;
  public activeAppointments: boolean = true;
  public previousAppointments: boolean = true;
  public bookAppointments: boolean = true;

  public showBookAppoinment: boolean = false;
  public appointmentType: string = '';

  public bookNow() {
    this.$router.push({name: 'Book Appointment', params: {id: "book-appointment"}});
  }

  onBookNow() {
    this.showBookAppoinment = false;
  }

  onClose() {
    this.showBookAppoinment = false;
  }

  public rescheduleAppoinment() {
    this.showBookAppoinment = true;
    this.appointmentType = 'Reschedule Appointment';
  }
}
</script>
