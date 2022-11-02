<template>
  <v-container fluid class="pa-16">
    <h1 class="text-h4 font-weight-bold">Welcome Back {{ userName }}!</h1>
    <v-row class="my-5">
      <v-col cols="4" md="4" sm="12" v-for="data in response" :key="data.Id">
        <v-card class="mx-auto">
          <v-img height="200px" :src="$vuehelper.getImageUrl(data.Image)">
          </v-img>
          <v-card-title>{{ data.Name }}</v-card-title>
          <v-card-text class="text--primary">
            {{ data.description }}
            {{ data.Summary }}
            </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('Behavioural Counseling')"
            >
              Book Appointment
            </v-btn>
            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Explore',
                params: {
                  id: data.Id,
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import { DashboardResponseModel } from "@/model";
import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class DashboardLayout extends BaseComponent {
  @Inject("dashboardService") dashboardService: IDashboardService;
  public response: Array<DashboardResponseModel> = [];

  created() {
    this.getCounsellingProgram();
  }

  public getCounsellingProgram() {
    this.loadingSpinner("show");
    this.dashboardService.getCounsellingProgram().then((response) => {
      this.response = response;
      this.loadingSpinner("hide");
    });
  }
  public navigateBookAppointment(appointment: string) {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
      query: { appointment: appointment },
    });
  }

  get userName() {
    return this.$store.getters.username;
  }
}
</script>
