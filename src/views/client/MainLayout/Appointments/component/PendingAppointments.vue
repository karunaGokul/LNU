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
            @click="rescheduleAppointment"
            >reschedule</v-btn
          >
          <v-btn
            depressed
            dark
            color="red"
            class="text-capitalize"
            @click="cancelAppoinment(item.id)"
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
      <reschedule-appointment v-if="reschedule" />
      <dialog-message :dialog="dialog" @dialog="confirmDialog"></dialog-message>
    </v-card>
  </div>
</template>

<script lang="ts">
import { AppointmentResponseModel, cancelAppointmentModel } from "@/model";
import { Component, Prop, Vue, Inject } from "vue-property-decorator";
import RescheduleAppointment from "./RescheduleAppointment.vue";
import DialogMessage from "../Dialog/DialogMessage.vue";
import { IAppointmentService } from "@/service";
@Component({
  components: {
    RescheduleAppointment,
    DialogMessage,
  },
})
export default class PendingAppointments extends Vue {
  @Prop() response: Array<AppointmentResponseModel>;
  @Inject("appointmentService") service: IAppointmentService;
  public request: cancelAppointmentModel = new cancelAppointmentModel();
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

  public reschedule: boolean = false;

  public rescheduleAppointment() {
    this.reschedule = true;
  }

  public dialog = false;
  cancelAppoinment(value: any) {
    this.dialog = !this.dialog;
    this.request.appointmentId = value;
    this.request.reason = "change the counselling";
  }
  confirmDialog(value: boolean) {
    if (value) {
      console.log(this.request);
      this.service.cancelAppointments(this.request).then((response: any) => {
        // this.$emit("cancelAppointment");
      });
    }
    this.dialog = false;
  }
}
</script>
