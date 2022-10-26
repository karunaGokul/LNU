<template>
  <div v-if="showSpinner">
    <v-progress-circular
      indeterminate
      color="blue"
      style="
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
      "
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProgressCircular extends Vue {
  public showSpinner: boolean = false;

  show(message: string) {
    this.showSpinner = message == "show" ? true : false;
  }
}
</script>
