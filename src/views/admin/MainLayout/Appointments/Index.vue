<template>
  <v-container fluid fill-height class="ml-8">
    <v-row class="mt-5">
      <h2>Appointments</h2>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <v-btn depressed dark color="#78B849" class="text-capitalize"
          >New Appointments</v-btn
        >
      </v-col>
      <v-col cols="12" md="3" class="">
        <v-select
          label="Coach Available"
          background-color="#78B849"
          dense
          dark
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="2" class="ml-8">
        <v-btn
          depressed
          dark
          width="100px"
          color="#78B849"
          class="text-capitalize"
          >Date</v-btn
        >
      </v-col>
      <v-col cols="12" md="">
        <v-btn
          depressed
          dark
          width="100px"
          color="#78B849"
          class="darken-1 text-capitalize"
          >Time</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-n6">
      <v-col cols="12" md="3">
        <v-btn class="text-capitalize light-green--text"
          >New Appointments</v-btn
        >
      </v-col>
      <v-col cols="12" md="3" class="">
        <v-select
          label="Coach Available"
          class="light-green--text"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="2" class="ml-8">
        <v-btn width="100px" class="text-capitalize light-green--text"
          >Date</v-btn
        >
      </v-col>
      <v-col cols="12" md="">
        <v-btn width="100px" class="text-capitalize light-green--text"
          >Time</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-n6">
      <v-col cols="12" md="3">
        <v-btn depressed dark color="#78B849" class="text-capitalize"
          >New Appointments</v-btn
        >
      </v-col>
      <v-col cols="12" md="3" class="">
        <v-select
          label="Coach Available"
          background-color="#78B849"
          dense
          dark
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="2" class="ml-8">
        <v-btn
          depressed
          dark
          width="100px"
          color="#78B849"
          class="text-capitalize"
          >Date</v-btn
        >
      </v-col>
      <v-col cols="12" md="">
        <v-btn
          depressed
          dark
          width="100px"
          color="#78B849"
          class="text-capitalize"
          >Time</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-n6">
      <v-col cols="12" md="3">
        <v-btn class="text-capitalize light-green--text"
          >New Appointments</v-btn
        >
      </v-col>
      <v-col cols="12" md="3" class="">
        <v-select label="Coach Available" dense outlined></v-select>
      </v-col>
      <v-col cols="12" md="2" class="ml-8">
        <v-btn width="100px" class="text-capitalize light-green--text"
          >Date</v-btn
        >
      </v-col>
      <v-col cols="12" md="">
        <v-btn width="100px" class="text-capitalize light-green--text"
          >Time</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-n6">
      <v-col cols="12" md="2" offset-md="8">
        <v-btn
          rounded
          dark
          width="100px"
          class="light-green darken-1 text-capitalize ml-8"
          >Assign</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Appointments extends Vue {}
</script>
