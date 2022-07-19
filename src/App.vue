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


@Component({
})
export default class App extends DIContainer {
  created() {
    this.createFilters();
  }

  createFilters() {
    Vue.filter("errorMessages", (value: any, name: string) => {
      return this.$vuehelper.val.messages(value, name);
    });
  }
}
</script>
