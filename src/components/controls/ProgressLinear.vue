<template>
  <div v-if="progressLinear">
    <v-progress-linear
      indeterminate
      color="blue"
    ></v-progress-linear>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "../base/BaseComponent.vue";

@Component
export default class ProgressLinear extends BaseComponent {
    public progressLinear: boolean = false;
    public message: string = "";

    show(message: string) {
    this.progressLinear = true;
    this.message = message;
  }
}
</script>
