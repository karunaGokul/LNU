<template>
  <div
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-container fluid class="pa-16">
      <h1 class="text-center" style="font-family: Questario Icon !important">
        Life N You Welcomes You!
      </h1>
      <v-row class="mt-6">
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/client/home/profile"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="#FCA744"
              class="d-flex justify-center pt-4 mb-n4"
              >person</v-icon
            >
            <v-card-title class="justify-center"> Profile </v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/client/home/appointments"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="#FCA744"
              class="d-flex justify-center pt-4 mb-n4"
              >book_online</v-icon
            >
            <v-card-title class="justify-center"> Appointments</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/client/home/messages"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="#FCA744"
              class="d-flex justify-center pt-4 mb-n4"
              >sms</v-icon
            ><v-card-title class="justify-center"> Messages </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-6">
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
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>
