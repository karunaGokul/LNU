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
                  :to="dashboard"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon class="icon">dashboard</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Dashboard</div>
                  </div>
                </router-link>
              </div>
              <div v-if="commonList">
                <router-link
                  :to="profile"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
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
                  :to="appointments"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon class="icon">book_online</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Appointments</div>
                  </div>
                </router-link>
              </div>
              <div v-if="commonList">
                <router-link
                  :to="message"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
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
              <div v-if="clientList">
                <router-link
                  to="/client/home/payment"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon>local_atm</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Payments</div>
                  </div>
                </router-link>
              </div>
              <div v-if="clientList">
                <router-link
                  to="/client/home/newsletter"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon>mark_email_unread</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Newsletter</div>
                  </div>
                </router-link>
              </div>
              <div v-if="coachList">
                <router-link
                  :to="coach"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon> person</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Coaches</div>
                  </div>
                </router-link>
              </div>
              <div v-if="coachList">
                <router-link
                  :to="client"
                  tag="div"
                  class="my-4 v-list-item v-list-item--link px-4"
                  active-class="primary"
                  exact
                >
                  <div class="v-list-item__icon">
                    <v-icon>people</v-icon>
                  </div>
                  <div class="v-list-item__content">
                    <div class="v-list-item__title">Clients</div>
                  </div>
                </router-link>
              </div>
            </v-list>

            <div class="pa-4 btn">
              <div class="mt-4">
                <v-btn
                  :to="support"
                  elevation="0"
                  rounded
                  class="px-6 text-capitalize"
                  >Support</v-btn
                >
              </div>
              <div class="mt-4">
                <v-btn
                  elevation="0"
                  color="primary"
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
        <div class="primary-linear">
          <router-view />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MainLayout extends Vue {
  public profile: string;
  public dashboard: string;
  public appointments: string;
  public message: string;
  public coach: string;
  public client: string;
  public clientList: boolean = false;
  public coachList: boolean = false;
  public commonList: boolean = false;
  public support: string;
  created() {
    const pathName = this.$route.path.split("/")[1];
    console.log(this.$route.path, pathName);
    if (pathName === "client") {
      this.clientList = true;
      this.commonList = true;
      this.support = "/client/home/support";
      this.profile = "/client/home/profile";
      this.dashboard = "/client/home/dashboard";
      this.appointments = "/client/home/appointments";
      this.message = "/client/home/messages";
    } else if (pathName === "coach") {
      this.commonList = true;
      this.profile = "/coach/home/profile";
      this.dashboard = "/coach/home/dashboard";
      this.appointments = "/coach/home/appointments";
      this.message = "/coach/home/message";
      this.support = "/coach/home/support";
    } else if (pathName === "admin") {
      this.coachList = true;
      this.dashboard = "/admin/home/dashboard";
      this.appointments = "/admin/home/appointments";
      this.coach = "/admin/home/details1";
      this.client = "/admin/home/details2";
      this.support = "/admin/home/support";
    }
  }

  public logout() {
    this.$store.dispatch("logout");
    this.$router.push("/");
  }
}
</script>

<style scoped>
.primary {
  background-color: #5949b8;
  color: white;
}
.primary .icon {
  color: white !important;
}
.btn {
  margin-top: 50px;
}
</style>
