<template>
  <div class="pa-8">
    <v-container fluid>
      <v-simple-table class="mt-10">
        <template v-slot:default>
          <thead>
            <th v-for="item in headers" :key="item" class="background-orange">
              {{ item }}
            </th>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item" class="text-center">
              <td>{{ item.counsellingType }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.coach }}</td>
              <td>{{ item.duration }}</td>
              <td>{{ item.amountPaid }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { PaymentRequestModel, PaymentResponseModel } from "@/model";

import { IPaymentService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class Payment extends BaseComponent {
  @Inject("paymentService") paymentService: IPaymentService;
  public request: PaymentRequestModel = new PaymentRequestModel();
  public response: PaymentResponseModel = new PaymentResponseModel();

  created() {
    this.payment()
  }

  public payment() {
    // this.request.ClientId = "id102"
    console.log(this.request)
     this.loadingSpinner("show");
    this.paymentService
        .payment(this.request)
        .then((response: Array<PaymentResponseModel>) => {
          console.log(response);
           this.loadingSpinner("hide");
        },
        (err) => {
          this.loadingSpinner("hide");
          if (err.response.status === 400) {
            // this.snackbarText = err.response.data;
            // this.snackbar = true;
          }
        }
        );
  }

  public headers: any = [
    "Counselling Type",
    "Date",
    "Coach",
    "Duration",
    "Amount Paid",
  ];

  public items: any = [
    {
      counsellingType: "Foo",
      date: "10.2.22",
      coach: "alex",
      duration: "25min",
      amountPaid: "1200",
    },
    {
      counsellingType: "Bar",
      date: "15.3.22",
      coach: "jai",
      duration: "30min",
      amountPaid: "1500",
    },
    {
      counsellingType: "Buzz",
      date: "11.4.22",
      coach: "jhon",
      duration: "15min",
      amountPaid: "500",
    },
    {
      counsellingType: "Foo",
      date: "10.2.22",
      coach: "alex",
      duration: "25min",
      amountPaid: "1200",
    },
    {
      counsellingType: "Bar",
      date: "15.3.22",
      coach: "jai",
      duration: "30min",
      amountPaid: "1500",
    },
    {
      counsellingType: "Buzz",
      date: "11.4.22",
      coach: "jhon",
      duration: "15min",
      amountPaid: "500",
    },
  ];
}
</script>
<style>
tr:nth-of-type(even) {
  background-color: #fca744;
  opacity: 0.5;
  color: white;
}
tr:nth-of-type(even):hover {
  background-color: #fca744 !important;
}
</style>
