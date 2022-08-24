<template>
  <v-dialog width="450" v-model="dialog">
    <v-card class="pb-3">
      <v-card-title class="text-capitalize">assign coach</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-3">
        <v-row>
          <v-col>
            <v-text-field
              filled
              dense
              readonly
              :placeholder="selectedEvent.clientName"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              filled
              dense
              readonly
              :placeholder="selectedEvent.coachName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-select
          outlined
          dense
          :menu-props="{ offsetY: true }"
          label="Available Coaches"
          :items="response"
          item-text="Name"
          v-if="!selectedEvent.coachName"
        ></v-select>
      </v-card-text>
      <v-card-actions class="ml-5">
        <v-btn
          dark
          class="text-capitalize"
          color="primary"
          @click="confirmAppointment"
          >Assign</v-btn
        >
        <v-btn
          class="text-capitalize ml-3"
          color="red"
          dark
          @click="dialog = false"
          >cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { confirmAppointmentModel, GetCoachesModel } from "@/model";
import { IAdminService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AssignCoach extends Vue {
  @Inject("adminService") adminService: IAdminService;
  @Prop() selectedEvent: any;

  public response: Array<GetCoachesModel> = [];
  public availableCoaches: any = [];
  public dialog: boolean = true;
  public request: confirmAppointmentModel = new confirmAppointmentModel();

  created() {
    this.getCoaches();
  }

  public confirmAppointment() {
    console.log(this.selectedEvent.id);
    this.request.appointmentId = this.selectedEvent.id;
    console.log(this.request.appointmentId);
    this.adminService
      .confirmAppointment(this.request)
      .then((response: any) => {
       this.dialog = false;
      });
  }

  private getCoaches() {
    this.adminService.getCoaches().then((response: Array<GetCoachesModel>) => {
      this.response = response;
      for (let i = 0; i < response.length; i++) {
        this.availableCoaches = response[i].Name;
      }
    });
  }
}
</script>
