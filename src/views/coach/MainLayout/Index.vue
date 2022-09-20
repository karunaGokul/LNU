<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="2" sm="2" md="2">
        <side-bar />
      </v-col>
      <v-col cols="10" sm="10" md="10">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/layout/SideBar.vue";

@Component({
  components: {
    SideBar,
  },
})
export default class MainLayout extends Vue {
  public logout() {
    this.$store.dispatch("logout");
    this.$router.push("/");
  }
}
</script>