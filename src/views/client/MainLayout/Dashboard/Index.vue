<template>
  <div
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-container fluid class="pa-16">
      <h1 class="text-h4 font-weight-bold">Welcomes Back ABCe...</h1>
      <v-row class="mt-6">
        <v-col lg="6" md="6" sm="12">
          <v-card elevation="1" class="rounded">
            <v-card-title class="justify-space-between">
              <h5>
                <v-icon color="primary">book_online</v-icon>
                Active / Pending Appointments
                </h5>
                <v-icon>launch</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-card elevation="1" height="150" class="rounded"></v-card>
        </v-col>
      </v-row>
      <!--  <v-row class="mt-6">
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/client/home/payment"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="#FCA744"
              class="d-flex justify-center pt-4 mb-n4"
              >local_atm</v-icon
            >
            <v-card-title class="justify-center">
              Payments
            </v-card-title></v-card
          >
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/client/home/journal"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="#FCA744"
              class="d-flex justify-center pt-4 mb-n4"
              >style</v-icon
            >
            <v-card-title class="justify-center">My Journal</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/client/home/newsletter"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="#FCA744"
              class="d-flex justify-center pt-4 mb-n4"
              >mark_email_unread</v-icon
            ><v-card-title class="justify-center">Newsletter </v-card-title>
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>
