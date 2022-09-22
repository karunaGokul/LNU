<template>
  <div class="pa-2 pt-4">
    <v-data-table
      :headers="headers"
      :items="responsePendingAppointment"
      :items-per-page="10"
      class="elevation-0"
      :footer-props="{
        prevIcon: 'chevron_left',
        nextIcon: 'chevron_right',
      }"
    >
      <template v-slot:[`item.Date`]="{ item }">
        test
        {{ item.appointmentDate | dateDisplay("MM/DD/YYYY") }}
      </template>
      <template v-slot:[`item.Action`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              depressed
              fab
              small
              class="mr-3"
              @click="rescheduleAppointment(item.id)"
              ><v-icon color="primary">today</v-icon></v-btn
            >
          </template>
          <span>Reschedule Appointment</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              depressed
              fab
              small
              @click="closeDialog(item.id)"
              ><v-icon color="red">event_busy</v-icon></v-btn
            >
          </template>
          <span>Cancel Appointment</span>
        </v-tooltip>
      </template>
    </v-data-table>
    <reschedule-appointment
      v-if="reschedule"
      @close="onClose"
      :appointmentId="appointmentId"
      @appointmentBooked="onAppointmentBooked"
    />
    <app-alert
      v-if="showAlert"
      @cancelAppointment="cancelAppointment"
      @close="onClose"
    ></app-alert>
  </div>
</template>

<script lang="ts">
import { AppointmentByStatusResponseModel, AppointmentResponseModel, CancelAppointmentModel } from "@/model";
import { Component, Prop, Vue, Inject } from "vue-property-decorator";
import RescheduleAppointment from "./RescheduleAppointment.vue";
import AppAlert from "@/components/layout/AppAlert.vue";
import { IAdminService } from "@/service";

@Component({
  components: {
    RescheduleAppointment,
    AppAlert,
  },
})
export default class PendingAppointments extends Vue {
  @Prop() responsePendingAppointment: Array<AppointmentByStatusResponseModel>;

  @Inject("adminService") service: IAdminService;

  public request: CancelAppointmentModel = new CancelAppointmentModel();
  public appointmentId: string = "";
  public showAlert: boolean = false;
  public reschedule: boolean = false;

  public headers: any = [
    {
      text: "Date",
      align: "start",
      value: "appointmentDate",
      class: "subtitle-1 font-weight-bold",
    },
    {
      text: "Time",
      value: "appointmentStartTime",
      class: "subtitle-1 font-weight-bold",
    },
    {
      text: "Counselling Program",
      value: "counselingType.name",
      class: "subtitle-1 font-weight-bold",
    },
    {
      text: "Action",
      value: "Action",
      sortable: false,
      align: "center",
      class: "subtitle-1 font-weight-bold",
    },
  ];

  public onAppointmentBooked() {
    this.$emit("pending");
    this.reschedule = false;
  }

  public rescheduleAppointment(id: string) {
    this.reschedule = true;
    this.appointmentId = id;
  }

  closeDialog(value: any) {
    this.showAlert = true;
    this.request.appointmentId = value;
  }

  public cancelAppointment() {
    this.showAlert = false;
    this.request.reason = "change the counselling";
    this.service.cancelAppointment(this.request).then((response: any) => {
      this.$emit("cancelAppointment");
    });
  }

  onClose() {
    this.showAlert = false;
    this.reschedule = false;
  }
}
</script>
