<template>
  <div
    style="
      background: linear-gradient(180deg, #5949b8 -60.28%, #ffffff 26.8%);
      height: 50vh;
    "
    class="d-flex flex-column justify-center align-center"
  >
    <div class="mb-8">
      <h1>Good Day Coach, ABC!</h1>
    </div>
    <v-container>
      <v-row class="mx-10">
        <v-col class="mr-5">
          <v-card
            height="150"
            class="d-flex align-center justify-center rounded-lg"
            style="box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.15)"
          >
            <v-icon size="80px" color="#5949b8">account_circle</v-icon>
          </v-card>
        </v-col>
        <v-col class="mr-5">
          <v-card
            height="150"
            class="d-flex align-center justify-center rounded-lg"
            style="box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.15)"
          >
            <v-icon size="80px" color="#5949b8">calendar_month</v-icon>
          </v-card>
        </v-col>
        <v-col class="mr-5">
          <v-card
            height="150"
            class="d-flex align-center justify-center rounded-lg"
            style="box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.15)"
          >
            <v-icon size="80px" color="#5949b8">sms</v-icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>
