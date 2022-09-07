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
        <v-row class="mt-0" v-if="typeof selectedEvent.coachName === 'string'">
          <v-col class="mt-2" cols="3">
            <v-label>Coach</v-label>
          </v-col>
          <v-col cols="9">
            <v-text-field
              outlined
              dense
              readonly
              :placeholder="selectedEvent.coachName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-select
          v-model="selectedCoachName"
          outlined
          dense
          :menu-props="{ offsetY: true }"
          label="Available Coaches"
          :items="responseCoach"
          item-text="Name"
          item-value="Id"
          class="mt-2"
          v-if="!selectedEvent.coachName"
        ></v-select>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="ml-5 justify-end">
        <v-btn
          dark
          class="text-capitalize"
          color="primary"
          @click="assignCoach"
          v-if="!coachAssigned && !selectedEvent.coachName"
          >Assign</v-btn
        >
        <v-btn
          dark
          class="text-capitalize"
          color="primary"
          v-if="coachAssigned || selectedEvent.coachName"
          @click="confirmAppointment"
          >Confirm</v-btn
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
  AssignCoachModel,
  CoachDetailsModel,
  ConfirmAppointmentModel,
} from "@/model";
import { IAdminService, IAppointmentService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AssignCoach extends BaseComponent {
  @Inject("adminService") adminService: IAdminService;
  @Inject("appointmentService") appointmentService: IAppointmentService;
  @Prop() selectedEvent: any;

  public dialog: boolean = true;
  public request: ConfirmAppointmentModel = new ConfirmAppointmentModel();
  public requestAssignCoach: AssignCoachModel = new AssignCoachModel();
  public responseCoach: Array<CoachDetailsModel> = [];
  public coachName: string;
  public coachAssigned: boolean = false;

  public selectedCoachName: string = "";

  created() {
    this.getCoachesBySelection();
  }

  public confirmAppointment() {
    this.request.appointmentId = this.selectedEvent.id;
    this.loadingSpinner("show");
    this.adminService.confirmAppointment(this.request).then((response: any) => {
      this.loadingSpinner("hide");
      this.dialog = false;
      this.$emit("done");
    });
  }

  private close() {
    this.dialog = false;
    this.$emit("close");
  }

  
  private assignCoach() {
    this.requestAssignCoach.appointmentId = this.selectedEvent.id;
    this.requestAssignCoach.coachId = this.selectedCoachName;
    this.loadingSpinner("show");
    this.adminService
      .assignCoach(this.requestAssignCoach)
      .then((response: any) => {
        this.loadingSpinner("hide");
        this.coachAssigned = true;
      });
  }

  private getCoachesBySelection() {
    this.loadingSpinner("show");
    this.appointmentService
      .getCoachesByTypeForSelection(this.selectedEvent.counselingTypeId)
      .then((response: any) => {
        this.responseCoach = response;
        this.loadingSpinner("hide");
      });
  }
}
</script>
