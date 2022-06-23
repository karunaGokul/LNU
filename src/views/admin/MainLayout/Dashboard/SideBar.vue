<template>
  <v-card height="100%" width="256" align="end">
    <v-navigation-drawer class="light-green darken-1 pr-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 my-8">
            Life N You
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link class="mb-4">
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AdminSideBar extends Vue {
  public items: any = [
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
