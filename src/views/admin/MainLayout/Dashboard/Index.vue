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
            to="/admin/home/coachs"
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
            to="/admin/home/clients"
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
