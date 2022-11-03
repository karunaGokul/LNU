<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CoachLayout extends Vue {

  created() {
    this.$vuetify.theme.themes.light.primary = "#495CB8";
  }

}
</script>