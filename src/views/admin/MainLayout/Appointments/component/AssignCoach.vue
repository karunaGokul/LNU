<template>
  <v-dialog width="450" v-model="dialog" persistent>
    <v-card>
      <div class="d-flex justify-space-between pa-1">
        <v-card-title class="pa-1 font-weight-bold">Assign Coach</v-card-title>
        <v-icon @click="close"> clear </v-icon>
      </div>
      <v-divider></v-divider>
      <v-card-text>
        <v-row class="mt-4">
          <v-col class="mt-2" cols="3">
            <v-label>Client</v-label>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              dense
              readonly
              :placeholder="selectedEvent.clientName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col class="mt-2" cols="3">
            <v-label>Coach</v-label>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              dense
              readonly
              :placeholder="coachName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-select
          outlined
          dense
          :menu-props="{ offsetY: true }"
          label="Available Coaches"
          :items="responseCoach"
          item-text="Name"
          class="mt-2"
          v-if="!coachName"
        ></v-select>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="ml-5 justify-end">
        <v-btn
          dark
          class="text-capitalize"
          color="primary"
          @click="confirmAppointment"
          >Assign</v-btn
        >
        <v-btn class="text-capitalize ml-3" color="red" dark @click="close"
          >cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import BaseComponent from "@/components/base/BaseComponent";
import {
  ConfirmAppointmentModel,
  GetPreviousCoachesRequestModel,
  GetPreviousCoachesModel,
  GetCoachesModel,
} from "@/model";
import { IAdminService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AssignCoach extends BaseComponent {
  @Inject("adminService") adminService: IAdminService;
  @Prop() selectedEvent: any;

  public response: Array<GetPreviousCoachesModel> = [];
  public dialog: boolean = true;
  public request: ConfirmAppointmentModel = new ConfirmAppointmentModel();
  public requestCoaches: GetPreviousCoachesRequestModel =
    new GetPreviousCoachesRequestModel();
  public responseCoach: Array<GetCoachesModel> = [];
  public coachName: string;

  created() {
    this.getPreviousCoaches();
    this.getCoaches();
  }

  public confirmAppointment() {
    this.request.appointmentId = this.selectedEvent.id;
    this.adminService.confirmAppointment(this.request).then((response: any) => {
      this.dialog = false;
      this.$emit("done");
    });
  }

  private close() {
    this.dialog = false;
    this.$emit("close");
  }

  private getPreviousCoaches() {
    this.requestCoaches.clientId = this.selectedEvent.clientId;
    this.requestCoaches.counselingTypeId = this.selectedEvent.counselingTypeId;
    this.adminService
      .getPreviousCoaches(this.requestCoaches)
      .then((response: Array<GetPreviousCoachesModel>) => {
        response.forEach((item) => {
          this.coachName = item.name;
        });
      });
  }

  private getCoaches() {
    this.loadingSpinner("show");
    this.adminService.getCoaches().then((response: Array<GetCoachesModel>) => {
      this.responseCoach = response;
      this.loadingSpinner("hide");
    });
  }
  
}
</script>
