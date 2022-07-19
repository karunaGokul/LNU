<template>
  <v-row class="pa-8">
    <v-col cols="12" md="8">
      <h1>Journal Your Thoughts Here</h1>
      <v-card elevation="0" width="400">
        <h3>How are you feeling today?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          aliquid modi eos itaque molestias repellendus quaerat asperiores
          cupiditate hic. Harum quos at reiciendis eveniet fuga hic alias
          voluptate quis voluptatum.
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4"> <v-card> hello</v-card>  </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { PaymentRequestModel, PaymentResponseModel } from "@/model";

import { IPaymentService } from "@/service";

@Component
export default class Journal extends Vue {
  @Inject("paymentService") paymentService: IPaymentService;
  public request: PaymentRequestModel = new PaymentRequestModel();

  created() {
    this.payment();
  }

  public payment() {
    // this.request.ClientId = "id102"
    console.log(this.request);
    this.paymentService
      .payment(this.request)
      .then((response: Array<PaymentResponseModel>) => {
        console.log(response);
      });
  }
}
</script>
