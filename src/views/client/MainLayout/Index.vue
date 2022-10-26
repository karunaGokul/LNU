<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="2" sm="2" md="2" v-if="page">
        <side-bar />
      </v-col>
      <v-col :cols="page ? 10 : 12" :sm="page ? 10 : 12" :md="page ? 10 : 12">
        <div class="primary-linear">
          <router-view />
        </div>
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

  get page() {
    let page: boolean = false,
      name: string = this.$route.name;
    if (name != "Book Appointment" && name != "Explore") page = true;

    return page;
  }
}
</script>
