<template>
  <div>
    <v-row
      style="
        background: linear-gradient(
          180deg,
          rgb(120, 184, 73) -84.39%,
          rgb(255, 255, 255) 22.9%
        );
      "
    >
      <v-col cols="12" md="3">
        <!-- <side-bar /> -->
        <v-card height="100%" width="256" align="end" class="rounded-0">
          <v-navigation-drawer dark color="#78B849" class="pr-5">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6 my-8">
                  Life N You
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                class="mb-4"
              >
                <v-list-item-icon>
                  <v-icon class="ml-16 pl-5">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col>
        <h1 class="d-flex justify-center mt-16">Welcome Admin!</h1>
        <v-container fluid v-if="dashboard">
          <v-row class="mt-4">
            <v-col cols="12" md="4">
              <v-card
                elevation="4"
                width="177"
                height="100"
                class="mx-auto rounded-lg"
              >
                <v-card-actions class="d-flex justify-center pt-6">
                  <v-btn
                    text
                    x-large
                    class="font-weight-bold text-capitalize"
                    @click="appointment == true && dashboard == false"
                    >Appointments</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card
                elevation="4"
                width="177"
                height="100"
                class="rounded-lg"
                @click="appointment == true && dashboard == false"
              >
                <v-card-title
                  class="d-flex justify-center pt-8 font-weight-bold"
                  >Coaches</v-card-title
                >
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card
                elevation="4"
                width="177"
                height="100"
                class="rounded-lg ml-n10"
              >
                <v-card-title
                  class="d-flex justify-center pt-8 font-weight-bold"
                  >Clients</v-card-title
                >
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mt-8">
            <v-col cols="12" md="4">
              <v-card
                elevation="4"
                width="177"
                height="100"
                class="mx-auto rounded-lg"
              >
                <v-card-title
                  class="d-flex justify-center pt-8 font-weight-bold"
                  >Calendar</v-card-title
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!-- <appointments /> -->
        <!-- <coach-details /> -->
        <!-- <client-details /> -->
      </v-col>
    </v-row>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/views/admin/MainLayout/Dashboard/SideBar.vue";
import Appointments from "@/views/admin/MainLayout/Dashboard/Appointments.vue";
import CoachDetails from "@/views/admin/MainLayout/Dashboard/CoachDetails.vue";
import ClientDetails from "@/views/admin/MainLayout/Dashboard/ClientDetails.vue";

@Component({
  components: { SideBar, Appointments, CoachDetails, ClientDetails },
})
export default class AdminDashboardLayout extends Vue {
  public dashboard = true;
  public appointment = false;
  public items = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Coaches", icon: "mdi-account-tie-outline" },
    { title: "Clients", icon: "mdi-account" },
    { title: "Calendar", icon: "mdi-calendar-month-outline" },
    { title: "", icon: "" },
    { title: "", icon: "" },
    { title: "Support", icon: "mdi-help-box" },
    { title: "Logout", icon: "mdi-logout" },
  ];
}
</script>
