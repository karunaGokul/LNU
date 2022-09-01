<template>
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
            to="dashboard"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
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
        <div v-if="page == 'client' || page == 'coach'">
          <router-link
            to="profile"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
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
            to="appointments"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
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
        <div v-if="page == 'client' || page == 'coach'">
          <router-link
            to="messages"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
            exact
          >
            <div class="v-list-item__icon">
              <v-icon class="icon">chat</v-icon>
            </div>
            <div class="v-list-item__content">
              <div class="v-list-item__title">Messages</div>
            </div>
          </router-link>
        </div>
        <div v-if="page == 'client'">
          <router-link
            to="payment"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
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
        <div v-if="page == 'client'">
          <router-link
            to="newsletter"
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
        <div v-if="page == 'admin'">
          <router-link
            to="coach"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
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
        <div v-if="page == 'admin'">
          <router-link
            to="client"
            tag="div"
            class="my-4 v-list-item v-list-item--link px-4"
            active-class="primary v-list-item--active"
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
            elevation="0"
            rounded
            class="px-6 text-capitalize"
            @click="support"
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SideBar extends Vue {

  public logout() {
    this.$store.dispatch("logout");
    this.$router.push("/");
  }

  public support() {
    this.$router.push(`${this.page}/home/support`);
  }

  get page() {
    return this.$route.path.split("/")[1];
  }
}
</script>