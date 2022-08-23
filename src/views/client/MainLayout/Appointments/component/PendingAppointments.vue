<template>
  <div class="pa-8">
    <v-card outlined elevation="0">
      <v-data-table
        :headers="headers"
        :items="response"
        :items-per-page="5"
        class="elevation-0"
      >
        <template v-slot:[`item.Action`]="{  }">
          <v-btn
            depressed
            color="primary"
            class="text-capitalize mr-3"
            @click="rescheduleAppointment"
            >reschedule</v-btn
          >
          <v-btn depressed dark color="red" class="text-capitalize"
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
    </v-card>
  </div>
</template>

<script lang="ts">
import { AppointmentResponseModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";
import RescheduleAppointment from "./RescheduleAppointment.vue";

@Component({
  components: {
    RescheduleAppointment,
  },
})
export default class PendingAppointments extends Vue {
  @Prop() response: Array<AppointmentResponseModel>;

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
  
}
</script>
