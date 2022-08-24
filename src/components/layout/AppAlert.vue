<template>
  <div>
    <v-dialog v-model="dialog" width="250"  v-if="response">
      <v-card class="text-center py-4 rounded-lg">
        <v-icon style="font-size: 5rem" color="blue">check_circle</v-icon>
        <v-card-subtitle class="blue--text text-h6"> Success </v-card-subtitle>
        <v-card-text>
          {{ response }}
        </v-card-text>
      </v-card>
      
    </v-dialog>
    <v-dialog v-model="dialog" width="500" v-else>
      <v-card>
        <v-card-text class="text-center pt-4"
          >Are you sure you want to cancel the appointments</v-card-text
        >
        <v-card-actions class="justify-end">
          <v-btn plain color="primary" @click="cancelAppointment">yes</v-btn>
          <v-btn plain color="red" @click="dialog = false">no</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { cancelAppointmentModel, EventsModel } from "@/model";
import { IAdminService } from "@/service";
import { Vue, Component, Prop, Inject } from "vue-property-decorator";

@Component
export default class AppAlert extends Vue {
  @Inject("adminService") adminService: IAdminService;
  
  @Prop() response: string;
  @Prop() selectedEvent: EventsModel;

  public dialog: boolean = true;
  public request: cancelAppointmentModel = new cancelAppointmentModel();

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
 
  
}
</script>
