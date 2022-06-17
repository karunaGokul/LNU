<template>
  <div>
    <!-- Admin Layout -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdminLayout extends Vue {}
</script>