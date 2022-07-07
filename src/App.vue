<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
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
