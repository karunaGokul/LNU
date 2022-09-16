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
  UpdatePaymentRequestModel,
} from "@/model";

@Component
export default class Success extends BaseComponent {
  @Inject("appointmentService") service: IAppointmentService;

  public requestPayment: UpdatePaymentRequestModel =
    new UpdatePaymentRequestModel();

  created() {
    this.loadingSpinner("show");
    this.confirmAppointment();
  }

  private confirmAppointment() {
    setTimeout(() => {
      this.$router.push("/client/home/appointments");
    }, 3000);

    this.requestPayment.Amount = 1000;
    this.requestPayment.Status = "Success";
    this.requestPayment.PaymentType = "Credit Card";
    // this.requestPayment.appointmentId = "79098e59-3077-4e00-a68b-639b5cf31570";
    // this.requestPayment.appointmentId = this.$store.getters.request;

    this.service
      .updatePayment(this.requestPayment)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

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
