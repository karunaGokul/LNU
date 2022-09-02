<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";
import { IAppointmentService } from "@/service";
import {
  BookAppointmentRequestModel,
  BookAppointmentValidationRequestModel,
} from "@/model";

@Component
export default class Success extends BaseComponent {
  @Inject("appointmentService") service: IAppointmentService;

  created() {
    this.loadingSpinner("show");
    this.confirmAppointment();
  }

  private confirmAppointment() {
    setTimeout(() => {
      this.$router.push("/client/home/appointments");
    }, 3000);
    /*let request = new BookAppointmentRequestModel();
    request = this.$store.getters.request;
    this.service
      .bookAppointments(request)
      .then((response) => {
        this.loadingSpinner("hide");
        console.log(response);
      })
      .catch((err) => {
        this.loadingSpinner("hide");
        console.log(err);
      });*/
  }
}
</script>
