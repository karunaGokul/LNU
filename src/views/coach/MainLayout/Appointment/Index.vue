<template>
  <div class="pa-4 primary-linear">
    <h2 class="font-weight-bold my-4">Upcoming Appointments</h2>
    <calendar />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";
import Calendar from "./component/Calendar.vue";

@Component({
  components: {
    Calendar,
  },
})
export default class calender extends BaseComponent {}
</script>
