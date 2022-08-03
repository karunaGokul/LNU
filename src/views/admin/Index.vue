<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdminLayout extends Vue {

  created() {
    this.$vuetify.theme.themes.light.primary = "#78B849";
  }
}
</script>