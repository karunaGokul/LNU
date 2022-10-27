<template>
  <div class="pa-4" color="primary">
    <router-link to="/client/home/dashboard">
      <v-btn depressed color="primary" class="white--text text-decoration-none text-capitalize">
        <v-icon class="pr-2">keyboard_backspace</v-icon>
        Back
      </v-btn></router-link
    >

    <v-card class="mt-10">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="`data:image/png;base64,${response.Image}`"
      >
      </v-img>
      <v-card-title class="font-weight-bold pa-4">{{
        response.Name
      }}</v-card-title>

      <v-card-text class="text--primary ps-0">
        <div>
          <h4 class="text-subtitle-1 font-weight-bold pa-4">Description</h4>
          <p class="pa-4 pb-0">
            {{ response.Description }}
          </p>
          <h4 class="text-subtitle-1font-weight-bold pa-4">Summary</h4>
          <p class="pa-4 pb-0">
            {{ response.Summary }}
          </p>
          <v-row>
            <v-col col="6"
              ><span class="ps-4 text-subtitle-1 font-weight-bold">Cost:</span>
              <v-icon small>currency_rupee</v-icon> {{ response.Cost }}</v-col
            >
            <v-col col="6"
              ><span class="text-subtitle-1 font-weight-bold">Duration:</span>
              {{ response.Duration }} minutes</v-col
            >
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";

import { IDashboardService } from "@/service";
import { DashboardResponseModel } from "@/model";

@Component
export default class Explore extends BaseComponent {
  @Inject("dashboardService") service: IDashboardService;

  public response: DashboardResponseModel = new DashboardResponseModel();

  mounted() {
    this.service
      .getDetailedCounsellingProgramById(this.$route.params.id)
      .then((response) => {
        this.response = response;
      });
  }
}
</script>
