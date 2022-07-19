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

            <v-list dense nav class="pa-0">
              <div
                class="v-list v-sheet theme--light v-list--dense v-list--nav pa-0"
              >
                <router-link
                  to="/client/home/dashboard"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                  exact
                >
                  <div class="v-list-item__icon">
                    <i class="v-icon fa fa-thin fa-vr-cardboard"></i>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Dashboard</div>
                  </div>
                </router-link>
                <router-link
                  to="/client/home/profile"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <i class="v-icon fa fa-solid fa-address-card"></i>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Profile</div>
                  </div>
                </router-link>
                <router-link
                  to="/client/home/appointments"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <i class="v-icon fa fa-thin fa-calendar-check"></i>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Appointments</div>
                  </div>
                </router-link>
                <router-link
                  to="/client/home/payment"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <i class="v-icon fa fa-solid fa-money-check-alt"></i>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Payments</div>
                  </div>
                </router-link>
                <router-link
                  to="/client/home/journal"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <i class="v-icon fa fa-duotone fa-swatchbook"></i>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">My Journal</div>
                  </div>
                </router-link>
                <router-link
                  to="/client/home/newsletter"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="orange-gradient"
                >
                  <div class="v-list-item__icon">
                    <i class="v-icon fa fa-light fa-newspaper"></i>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Newsletter</div>
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
                color="background-orange"
                rounded
                class="px-7 text-capitalize"
                @click="logout"
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

  public logout() {
    this.$store.dispatch("logout");
    this.$router.push('/');
  }

}
</script>
