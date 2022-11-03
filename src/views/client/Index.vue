<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClientLayout extends Vue {

  created() {
    this.$vuetify.theme.themes.light.primary = "#FCB258";
  }
  
}
</script>