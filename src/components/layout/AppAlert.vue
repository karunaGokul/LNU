<template>
  <div>
    <v-dialog v-model="dialog" width="250">
      <v-card class="text-center py-4 rounded-lg">
        <v-icon style="font-size: 5rem" color="blue">check_circle</v-icon>
        <v-card-subtitle class="blue--text text-h6"> Success </v-card-subtitle>
        <v-card-text>
          Appointment Booked Successfully
          <!-- {{ this.alertMessage }} -->
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AppAlert extends Vue {
  @Prop() response: string;

  public dialog: boolean = true;
//   public alertMessage: string = "";

//   created() {
//     this.alertMessage = this.response;
//   }
}
</script>
