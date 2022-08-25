<template>
  <div class="primary-linear">
    <v-container fluid class="pa-16">
      <h1 class="text-h4 text-center font-weight-bold">Welcome Admin!</h1>
      <v-row class="mt-6">
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/appointments"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >book_online</v-icon
            >
            <v-card-title class="justify-center"
              >Appointments</v-card-title
            ></v-card
          >
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/details1"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >person</v-icon
            >
            <v-card-title class="justify-center">Coaches</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/details2"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >people</v-icon
            ><v-card-title class="justify-center">Clients </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row class="mt-6">
        <v-col cols="6" md="4">
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/calendar"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >calendar_month</v-icon
            >
            <v-card-title class="justify-center">Calendar</v-card-title></v-card
          >
        </v-col>
        <v-col cols="4" md="4" align-self="end" offset-md="4">
          <v-btn class="text-capitalize" outlined depressed
            ><v-icon class="pr-2">mark_email_unread</v-icon> Upload Newsletter
            <v-file-input
              prepend-icon="file_upload"
              hide-input
              multiple
              class="mb-4 ml-2"
              @change="handleimage"
            >
            </v-file-input>
          </v-btn>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AdminDashboardLayout extends Vue {
  public img: string = "";
  public handleimage(e: File) {
    this.img = URL.createObjectURL(e);
  }
}
</script>
