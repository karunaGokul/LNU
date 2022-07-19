<template>
  <v-app>
    <v-main>
      <router-view />
      <progress-linear ref="loadingSpinner"></progress-linear>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DIContainer } from "./dicontainer";

import ProgressLinear from "@/components/controls/ProgressLinear.vue";

@Component({
  components: { ProgressLinear },
})
export default class App extends DIContainer {
  created() {
    this.createFilters();
  }

  mounted() {
    let root: any = this.$root;
    let loadingSpinner:any = this.$refs.loadingSpinner as ProgressLinear;

    root.$loadingSpinner = loadingSpinner.show;
  }

  createFilters() {
    Vue.filter("errorMessages", (value: any, name: string) => {
      return this.$vuehelper.val.messages(value, name);
    });
  }
}
</script>
