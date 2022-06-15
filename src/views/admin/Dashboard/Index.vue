<template>
  <div>
    Admin Dashboard Layout
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdminDashboardLayout extends Vue {}
</script>