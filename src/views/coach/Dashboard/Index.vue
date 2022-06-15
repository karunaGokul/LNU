<template>
  <div>
    Coach Dashboard Layout
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CoachDashboardLayout extends Vue {}
</script>