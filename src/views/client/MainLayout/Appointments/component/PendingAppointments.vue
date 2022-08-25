<template>
  <div class="pa-8">
    <v-card outlined elevation="0">
      <v-data-table
        :headers="headers"
        :items="response"
        :items-per-page="5"
        class="elevation-0"
      >
        <!-- <template v-slot:[`item.ProfileImage`]="{ item }"> -->
        <template v-slot:[`item.Action`]="{ item }">
          <v-btn
            depressed
            color="primary"
            class="text-capitalize mr-3"
            @click="rescheduleAppointment(item.id)"
            >reschedule</v-btn
          >
          <v-btn
            depressed
            dark
            color="red"
            class="text-capitalize"
            @click="closeDialog(item.id)"
            >cancel</v-btn
          >
        </template>
      </v-data-table>
      <!-- <v-simple-table class="mt-4">
        <template v-slot:default>
          <thead>
            <th v-for="(header, i) in headers" :key="i" class="pa-4">
              {{ header }}
            </th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in response" :key="index">
              <td>{{ item.appointmentDate }}</td>
              <td>{{ item.appointmentStartTime }}</td>
              <td>{{ item.counselingType.name }}</td>
              <td class="text-center">
                <v-btn depressed color="primary" class="text-capitalize mr-3" @click="rescheduleAppointment"
                  >reschedule</v-btn
                >
                <v-btn depressed dark color="red" class="text-capitalize"
                  >cancel</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table> -->
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
    </v-card>
  </div>
</template>

<script lang="ts">
import { AppointmentResponseModel, cancelAppointmentModel } from "@/model";
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
  @Prop() response: Array<AppointmentResponseModel>;
  @Inject("adminService") service: IAdminService;

  public request: cancelAppointmentModel = new cancelAppointmentModel();
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
      text: "Counselling Programm",
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
