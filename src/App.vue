<template>
  <v-app>
    <v-main>
      <router-view />
      <ProgressCircular ref="loadingSpinner"></ProgressCircular>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DIContainer } from "./dicontainer";

import ProgressCircular from "@/components/controls/ProgressCircular.vue"

@Component({
  components:{
    ProgressCircular
  }
})
export default class App extends DIContainer {
  created() {
    this.createFilters();
  }

  mounted() {
    let root: any = this.$root;
    let loadingSpinner:any = this.$refs.loadingSpinner as ProgressCircular;

    root.$loadingSpinner = loadingSpinner.show;

  }

  createFilters() {
    Vue.filter("errorMessages", (value: any, name: string) => {
      return this.$vuehelper.val.messages(value, name);
    });
  }
}
</script>
