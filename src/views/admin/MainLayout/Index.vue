<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="2" sm="2" md="2">
        <v-card height="100vh" width="100%" elevation="0">
          <v-navigation-drawer permanent class="pa-4 align-center">
            <v-list-item class="pa-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-bold pt-4 pb-4">
                  Life N You
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list nav dense class="pa-0">
              <div
                class="v-list v-sheet theme--light v-list--dense v-list--nav pa-0"
              >
                <router-link
                  to="/admin/home/dashboard"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon>dashboard</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Dashboard</div>
                  </div>
                </router-link>
                <router-link
                  to="/admin/home/appointments"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                >
                  <div class="v-list-item__icon">
                    <v-icon> book_online </v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Appointments</div>
                  </div>
                </router-link>
                <router-link
                  to="/admin/home/details1"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                >
                  <div class="v-list-item__icon">
                    <v-icon> book_online </v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Coaches</div>
                  </div>
                </router-link>
                <router-link
                  to="/admin/home/details2"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                >
                  <div class="v-list-item__icon">
                    <v-icon> book_online </v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Clients</div>
                  </div>
                </router-link>
              </div>
            </v-list>
            <div class="mt-4">
              <v-btn elevation="0" rounded class="px-6 text-capitalize"
                >Support</v-btn
              >
            </div>
            <div class="mt-4">
              <v-btn
                elevation="0"
                color="primary"
                rounded
                class="px-7 text-capitalize"
                >Logout</v-btn
              >
            </div>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="10" sm="10" md="10">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MainLayout extends Vue {
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
