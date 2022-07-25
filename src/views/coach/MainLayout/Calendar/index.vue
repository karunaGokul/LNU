<template>
  <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class calender extends Vue {}
</script>
