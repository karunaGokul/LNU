<template>
  <v-container fluid fill-height class="justify-space-around primary-linear">
    <v-row class="mt-5 ml-4">
      <h2>Appointments</h2>
    </v-row>
    <!-- <v-simple-table class="mt-4">
      <template v-slot:default>
        <thead>
          <th v-for="(header, i) in headers" :key="i" class="primary pa-4">
            {{ header }}
          </th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items1" :key="index" class="text-center">
            <td>{{ item.CounsellingType }}</td>
            <td>{{ item.Date }}</td>
            <td>{{ item.Coach }}</td>
            <td>{{ item.Duration }}</td>
            <td>{{ item.AmountPaid }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->
    <!-- <v-card elevation="2" class="rounded-lg pb-3"> 
      <v-card-title>New Appointment</v-card-title>
      <v-divider></v-divider>
      <v-row class="px-3 mt-3">
        <v-col>
          <h5>Alex</h5>
          <h5>Child Counselling</h5>
          <h5>alex@mail.com</h5>
          <h5>2131415161</h5>
        </v-col>
        <v-col>
          <v-select
            outlined
            dense
            label="Coach Available"
            :items="items"
          ></v-select>
          <v-card-action>
            <v-btn rounded class="primary text-capitalize">Assign</v-btn>
          </v-card-action>
        </v-col>
      </v-row>
    </v-card>
    <v-card elevation="2" class="rounded-lg pb-3"> 
      <v-card-title>Reschedule Appointment</v-card-title>
      <v-divider></v-divider>
      <v-row class="px-3 mt-3">
        <v-col>
          <h5>name</h5>
          <h5>CounsellingType</h5>
          <h5>email</h5>
          <h5>contact</h5>
        </v-col>
        <v-col>
          <v-select
            outlined
            dense
            label="Coach Available"
            :items="items"
          ></v-select>
          <v-card-action>
            <v-btn rounded class="primary text-capitalize">Assign</v-btn>
          </v-card-action>
        </v-col>
      </v-row>
    </v-card>
    <v-card elevation="2" class="rounded-lg pb-3"> 
      <v-card-title>New Appointment</v-card-title>
      <v-divider></v-divider>
      <v-row class="px-3 mt-3">
        <v-col>
          <h5>name</h5>
          <h5>CounsellingType</h5>
          <h5>email</h5>
          <h5>contact</h5>
        </v-col>
        <v-col>
          <v-select
            outlined
            dense
            label="Coach Available"
            :items="items"
          ></v-select>
          <v-card-action>
            <v-btn rounded class="primary text-capitalize">Assign</v-btn>
          </v-card-action>
        </v-col>
      </v-row>
    </v-card>
    <v-card elevation="2" class="rounded-lg pb-3"> 
      <v-card-title>Reschedule Appointment</v-card-title>
      <v-divider></v-divider>
      <v-row class="px-3 mt-3">
        <v-col>
          <h5>name</h5>
          <h5>CounsellingType</h5>
          <h5>email</h5>
          <h5>contact</h5>
        </v-col>
        <v-col>
          <v-select
            outlined
            dense
            label="Coach Available"
            :items="items"
          ></v-select>
          <v-card-action>
            <v-btn rounded class="primary text-capitalize">Assign</v-btn>
          </v-card-action>
        </v-col>
      </v-row>
    </v-card> -->
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Appointments extends Vue {
  public items = ["Foo", "Bar", "Fizz", "Buzz"];

  public headers: Array<string> = [
    "Counselling Type",
    "Date",
    "Coach",
    "Duration",
    "Amount Paid",
  ];

  public items1: Array<any> = [
    {
      CounsellingType: "Foo",
      Date: "10.2.22",
      Coach: "alex",
      Duration: "25 min",
      AmountPaid: "1200",
    },
    {
      CounsellingType: "Bar",
      Date: "15.3.22",
      Coach: "jai",
      Duration: "30 min",
      AmountPaid: "1500",
    },
    {
      CounsellingType: "Buzz",
      Date: "11.4.22",
      Coach: "jhon",
      Duration: "15 min",
      AmountPaid: "500",
    },
    {
      CounsellingType: "Foo",
      Date: "10.2.22",
      Coach: "alex",
      Duration: "25 min",
      AmountPaid: "1200",
    },
    {
      CounsellingType: "Bar",
      Date: "15.3.22",
      Coach: "jai",
      Duration: "30 min",
      AmountPaid: "1500",
    },
    {
      CounsellingType: "Buzz",
      Date: "11.4.22",
      Coach: "jhon",
      Duration: "15 min",
      AmountPaid: "500",
    },
  ];
}
</script>
