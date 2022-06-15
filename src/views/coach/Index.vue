<template>
  <div>
    Coach Layout
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CoachLayout extends Vue {}
</script>