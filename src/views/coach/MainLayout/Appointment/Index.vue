<template>
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between">
      <h2 class="font-weight-bold my-4">Appointments</h2>
    </div>

    <appointments-layout User="Coach" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import AppointmentsLayout from "@/components/layout/Appointments/Index.vue";
@Component({
  components: {
    AppointmentsLayout,
  },
})
export default class Appointments extends Vue {
  
  public navigateBookAppointment() {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
    });
  }
}
</script>
