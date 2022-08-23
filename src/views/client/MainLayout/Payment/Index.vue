<template>
  <div class="pa-8">
    <v-container fluid>
      <div class="text-h5 font-weight-bold">Payments</div>
      <v-card>
        <v-simple-table class="mt-4">
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  v-for="(header, i) in headers"
                  :key="i"
                  class="pa-4 text-subtitle-2 font-weight-bold primary--text"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index" class="">
                <td>{{ item.CounsellingType }}</td>
                <td>{{ item.Date }}</td>
                <td>
                  <!-- <v-avatar size="40">
                    <img
                      :src="require('@/assets/profile.jpg' )"
                      alt="John"
                    /> </v-avatar> -->
                  {{ item.Coach }}
                </td>
                <td>{{ item.Duration }}</td>
                <td>{{ item.AmountPaid }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import { PaymentRequestModel, PaymentResponseModel } from "@/model";
import { IPaymentService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class Payment extends BaseComponent {
  @Inject("paymentService") paymentService: IPaymentService;

  public request: PaymentRequestModel = new PaymentRequestModel();
  public response: PaymentResponseModel = new PaymentResponseModel();

  created() {
    this.payment();
  }

  public payment() {
    // this.request.ClientId = "id102"
    console.log(this.request);
    this.loadingSpinner("show");
    this.paymentService.payment(this.request).then(
      (response: Array<PaymentResponseModel>) => {
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

  public headers: Array<string> = [
    "Counselling Type",
    "Date",
    "Coach",
    "Duration",
    "Amount Paid",
  ];

  public items: Array<any> = [
    {
      CounsellingType: "Marriage Counselling",
      Date: "10.2.22",
      Coach: "alex",
      icon: "@/assets/profile.jpg",
      Duration: "25 min",
      AmountPaid: "1200",
    },
    {
      CounsellingType: "Child Counselling",
      Date: "15.3.22",
      Coach: "jai",
      Duration: "30 min",
      AmountPaid: "1500",
    },
    {
      CounsellingType: "Behavioural Counselling",
      Date: "11.4.22",
      Coach: "jhon",
      Duration: "15 min",
      AmountPaid: "500",
    },
    {
      CounsellingType: "Mental Health Counselling",
      Date: "10.2.22",
      Coach: "alex",
      Duration: "25 min",
      AmountPaid: "1200",
    },
    {
      CounsellingType: "Child Counselling",
      Date: "15.3.22",
      Coach: "jai",
      Duration: "30 min",
      AmountPaid: "1500",
    },
    {
      CounsellingType: "Career Counselling",
      Date: "11.4.22",
      Coach: "jhon",
      Duration: "15 min",
      AmountPaid: "500",
    },
  ];
}
</script>
<style>
/* tr:nth-of-type(even) {
  background-color: #f7a3422e;
}
tr:nth-of-type(even):hover {
  background-color: #fca744 !important;
} */
</style>
