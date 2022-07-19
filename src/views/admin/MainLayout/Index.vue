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
                  active-class="orange-gradient"
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
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <v-icon> book_online </v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Appointments</div>
                  </div>
                </router-link>
                <router-link
                  to="/admin/home/coachDetails"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <v-icon> book_online </v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Coaches</div>
                  </div>
                </router-link>
                <router-link
                  to="/admin/home/clientDetails"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
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
              <v-btn elevation="0" rounded class="px-6 text-capitalize">Support</v-btn>
            </div>
            <div class="mt-4">
              <v-btn
                elevation="0"
                color="background-orange"
                rounded
                class="px-7 text-capitalize"
                >Logout</v-btn
              >
            </div>
          </v-navigation-drawer>
        </v-card>
        <!-- <div>
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
            
            </v-col>
          </v-row>
        </div> -->
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
