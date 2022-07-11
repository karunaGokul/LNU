<template>
  <div class="mt-n8" style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)">
    <div class="ma-8 pa-8">
      <v-row no-gutters class="pa-4">
        <v-col cols="6" sm="12" md="6">
          <h4 class="text-h4 font-weight-bold text-center pa-4">
            Hey, Client!
          </h4>
          <div class="text-center pa-4" style="position: relative">
            <v-icon x-large color="#cccccc" style="font-size: 20rem">
              fa fa-user-circle
            </v-icon>
            <v-btn
              color="background-orange"
              fab
              absolute
              style="right: 130px; bottom: 60px"
            >
              <v-icon>fa fa-camera</v-icon>
            </v-btn>
          </div>
          <div class="text-center pa-4">
            <v-btn color="white"  class="text-capitalize rounded-lg">
              <v-icon left>fa fa-solid fa-info-circle</v-icon>
              Payment info
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6" sm="12" md="6">
          <v-row>
            <v-col cols="2" class="mt-3">
              <v-label class="font-weight-bold">Name</v-label>
            </v-col>
            <v-col cols="10">
              <v-text-field
                color="#FCB258"
                background-color="#FCB258"
                style="opacity: 0.3"
                filled
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2" class="mt-3">
              <v-label class="font-weight-bold">Contact</v-label>
            </v-col>
            <v-col cols="10">
              <v-text-field
                color="#FCB258"
                background-color="#FCB258"
                style="opacity: 0.3"
                filled
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2" class="mt-3">
              <v-label class="font-weight-bold">Email</v-label>
            </v-col>
            <v-col cols="10">
              <v-text-field
                color="#FCB258"
                background-color="#FCB258"
                style="opacity: 0.3"
                filled
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2" class="mt-3">
              <v-label class="font-weight-bold">Queries</v-label>
            </v-col>
            <v-col cols="10">
              <v-textarea
                color="#FCB258"
                background-color="#FCB258"
                style="opacity: 0.3"
                filled
                dense
              ></v-textarea>
            </v-col>
          </v-row>
          <div class="text-end">
            <v-btn color="background-orange" class="text-capitalize" rounded>
              Save
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClientProfileLayout extends Vue {}
</script>
