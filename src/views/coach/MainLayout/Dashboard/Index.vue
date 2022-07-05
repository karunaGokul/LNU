<template>
  <div>
    Coach Dashboard Layout
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>