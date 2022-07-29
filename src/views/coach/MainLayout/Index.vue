<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="2" sm="2" md="2">
        <v-card height="100vh" width="100%" elevation="0">
          <v-navigation-drawer permanent class="pa-4 none">
            <v-list-item class="pa-0">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-bold py-4">
                  Life N You
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list dense nav class="pa-0">
              <div>
                <router-link
                  to="/coach/home/profile"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="nav-color"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon class="icon">person</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Dashboard</div>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/coach/home/profile"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="nav-color"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon class="icon">person</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Profile</div>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/coach/home/calendar"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="nav-color"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon class="icon">calendar_month</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Calendar</div>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link
                  to="/coach/home/message"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="nav-color"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon class="icon"> chat</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Messages</div>
                  </div>
                </router-link>
              </div>
            </v-list>

            <div class="pa-4 btn">
              <div class="mt-4">
                <v-btn elevation="0" rounded class="px-6 text-capitalize"
                  >Support</v-btn
                >
              </div>
              <div class="mt-4">
                <v-btn
                  elevation="0"
                  color="#5949b8"
                  rounded
                  class="px-7 text-capitalize white--text"
                  @click="logout"
                  >Logout</v-btn
                >
              </div>
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
  public logout() {
    this.$store.dispatch("logout");
    this.$router.push("/");
  }
}
</script>

<style scoped>
.nav-color {
  background-color: #5949b8;
  color: white;
}
.nav-color .icon {
  color: white !important;
}
.btn {
  margin-top: 150px;
}
</style>
