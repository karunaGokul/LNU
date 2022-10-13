<template>
  <div class="pa-8">
    <v-container fluid>
      <div class="text-h5 font-weight-bold">Payments</div>
      <v-card elevation="1">
        <v-simple-table class="mt-4">
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  v-for="(header, i) in headers"
                  :key="i"
                  class="pa-4 text-subtitle-2 font-weight-bold"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index" class="">
                <td>{{ item.CounselingProgram }}</td>
                <td>{{ item.Date }}</td>
                <td>
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
    this.loadingSpinner("show");
    this.paymentService.payment(this.request).then(
      (response: Array<PaymentResponseModel>) => {
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
    "Counseling Program",
    "Date",
    "Coach",
    "Duration",
    "Amount Paid",
  ];

  public items: Array<any> = [
    {
      CounselingProgram: "Marriage Counseling",
      Date: "10.2.22",
      Coach: "alex",
      icon: "@/assets/profile.jpg",
      Duration: "25 min",
      AmountPaid: "1200",
    },
    {
      CounselingProgram: "Child Counseling",
      Date: "15.3.22",
      Coach: "jai",
      Duration: "30 min",
      AmountPaid: "1500",
    },
    {
      CounselingProgram: "Behavioural Counseling",
      Date: "11.4.22",
      Coach: "jhon",
      Duration: "15 min",
      AmountPaid: "500",
    },
    {
      CounselingProgram: "Mental Health Counseling",
      Date: "10.2.22",
      Coach: "alex",
      Duration: "25 min",
      AmountPaid: "1200",
    },
    {
      CounselingProgram: "Child Counseling",
      Date: "15.3.22",
      Coach: "jai",
      Duration: "30 min",
      AmountPaid: "1500",
    },
    {
      CounselingProgram: "Career Counseling",
      Date: "11.4.22",
      Coach: "jhon",
      Duration: "15 min",
      AmountPaid: "500",
    },
  ];
}
</script>