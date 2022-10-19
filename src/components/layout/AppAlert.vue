<template>
  <div>
    <v-dialog v-model="dialog" width="250" persistent v-if="response">
      <v-card class="text-center py-4 rounded-lg">
        <v-icon style="font-size: 5rem" color="blue">check_circle</v-icon>
        <v-card-subtitle class="blue--text text-h6"> Success </v-card-subtitle>
        <v-card-text>
          {{ response }}
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" width="500" persistent v-else>
      <v-card class="pt-10">
        <v-card-text class="text-center red--text" v-if="!(user == 'Admin')"
          >Are you sure you want to cancel the appointments</v-card-text
        >
        <v-card-text class="text-center red--text" v-if="user == 'Admin'"
          >Are you sure you want to delete the counselling type</v-card-text
        >
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            class="text-capitalize"
            @click="cancelAppointment"
            >yes</v-btn
          >
          <v-btn dark color="red" class="text-capitalize" @click="close"
            >no</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { CancelAppointmentModel, EventsModel } from "@/model";
import { IAdminService } from "@/service";
import { Vue, Component, Prop, Inject } from "vue-property-decorator";

@Component
export default class AppAlert extends Vue {
  @Inject("adminService") adminService: IAdminService;

  @Prop() response: string;
  @Prop() selectedEvent: EventsModel;
  @Prop() user: string;

  public dialog: boolean = true;
  public request: CancelAppointmentModel = new CancelAppointmentModel();

  created() {
    if (this.response) {
      setTimeout(() => {
        this.$router.push("/client/home/appointments");
      }, 2000);
    }
  }

  public cancelAppointment() {
    this.$emit("cancelAppointment");
    this.dialog = false;
  }

  public close() {
    this.dialog = false;
    this.$emit("close");
  }
}
</script>
