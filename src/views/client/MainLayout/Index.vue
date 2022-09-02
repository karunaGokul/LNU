<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="2" sm="2" md="2" v-if="page != 'book-appointment'">
        <side-bar />
      </v-col>
      <v-col
        :cols="page != 'book-appointment' ? 10 : 12"
        :sm="page != 'book-appointment' ? 10 : 12"
        :md="page != 'book-appointment' ? 10 : 12"
      >
        <div class="primary-linear">
          <router-view />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";

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

  get page() {
    return this.$route.path.split("/")[4];
  }
}
</script>
