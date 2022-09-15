<template>
  <div>
    <app-success 
      :message="message"
      status="Success"
    />
  </div>
</template>
<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";
import AppSuccess from "@/components/layout/AppSuccess.vue";
import { IAppointmentService } from "@/service";
import { UpdatePaymentRequestModel } from "@/model";

@Component({
  components: {
    AppSuccess,
  },
})
export default class Success extends BaseComponent {
  @Inject("appointmentService") service: IAppointmentService;

  public message: string = '';
  public showAlert = false;

  created() {
    this.loadingSpinner("show");
    this.confirmAppointment();
  }

  private confirmAppointment() {
    let request: UpdatePaymentRequestModel = new UpdatePaymentRequestModel();

    request.AppointmentId = localStorage.getItem("appointmentId");
    request.Status = "Success";
    localStorage.removeItem("appointmentId");

    this.service.updatePayment(request).then((response) => {
      this.message = response;
      this.loadingSpinner("hide");
      this.showAlert = true;

      setTimeout(() => {
        this.$router.push("/client/home/appointments");
        this.showAlert = false;
      }, 3000)
    });
  }
}
</script>
