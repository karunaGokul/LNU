<template>
  <v-container fluid class="pa-16">
    <h1 class="text-h4 font-weight-bold">Welcomes Back ABCe...</h1>
    <v-container>
      <v-row class="mt-5">
        <v-col>
          <v-card
            to="/client/home/profile"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">person</v-icon>
            <v-card-title class="pa-0">Profile</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            to="/client/home/appointments"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">book_online</v-icon>
            <v-card-title class="pa-0">Appointments</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            to="/client/home/message"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">sms</v-icon>
            <v-card-title class="pa-0">Messages</v-card-title>
          </v-card>
        </v-col>
        <v-col class="mr-5">
          <v-card
            to="/client/home/payment"
            height="150"
            class="d-flex flex-column align-center justify-center rounded-lg"
          >
            <v-icon size="80px" color="primary">local_atm</v-icon>
            <v-card-title class="pa-0">Payments</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="mt-6">
      <v-col lg="6" md="6" sm="12">
        <v-card elevation="2" class="rounded">
          <v-card-title class="justify-space-between">
            <h5>
              <v-icon color="primary">receipt</v-icon>
              Active / Pending Appointments
            </h5>
            <v-icon>launch</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Date</th>
                    <th class="text-left">Counseling Type</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in appointments" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.counselingType }}</td>
                    <td>{{ item.status }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="6" md="6" sm="12">
        <v-card elevation="2" class="rounded">
          <v-card-title class="justify-space-between">
            <h5>
              <v-icon color="primary">account_balance_wallet</v-icon>
              Payments
            </h5>
            <v-icon>launch</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Date</th>
                    <th class="text-left">Counseling Type</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in appointments" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.counselingType }}</td>
                    <td>{{ item.status }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {
  public appointments: Array<any> = [
    {
      date: "01/20/2021",
      counselingType: "Behavioural Counseling",
      status: "Completed",
    },
    {
      date: "06/01/2022",
      counselingType: "Behavioural Counseling",
      status: "Completed",
    },
    {
      date: "1/29/2022",
      counselingType: "Behavioural Counseling",
      status: "Pending",
    },
  ];
}
</script>
