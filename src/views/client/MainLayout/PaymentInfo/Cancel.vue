<template>
  <div></div>
</template>
<script lang="ts">
import BaseComponent from "@/components/base/BaseComponent";
import { Component } from "vue-property-decorator";

@Component
export default class Cancel extends BaseComponent {
    
  created() {
    this.loadingSpinner("show");
    setTimeout(() => {
      this.redirectAppointment();
    }, 3000);
  }

  redirectAppointment() {
    this.loadingSpinner("hide");
    this.$router.push("/client/home/appointments");
  }
}
</script>
