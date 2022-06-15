<template>
  <div>
    Client Main Layout
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClientMainLayout extends Vue {}
</script>