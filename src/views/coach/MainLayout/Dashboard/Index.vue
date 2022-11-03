<template>
  <div class="d-flex flex-column justify-center align-center primary-linear">
    <div class="mb-8">
      <h1>Good Day Coach, {{ userName }}!</h1>
    </div>
    <v-container>
      <v-row class="mx-10">
        <v-col class="mr-5">
          <v-card
            to="/coach/home/profile"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">account_circle</v-icon>
            <v-card-title class="pa-0">Profile</v-card-title>
          </v-card>
        </v-col>
        <v-col class="mr-5">
          <v-card
            to="/coach/home/appointments"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">book_online</v-icon>
            <v-card-title class="pa-0">Appointments</v-card-title>
          </v-card>
        </v-col>
        <!-- <v-col class="mr-5">
          <v-card
            to="/coach/home/messages"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">sms</v-icon>
            <v-card-title class="pa-0">Messages</v-card-title>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {
  get userName() {
    return this.$store.getters.username;
  }
}
</script>
