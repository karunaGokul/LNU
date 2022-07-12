<template>
  <div
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="d-flex align-center justify-center" style="height: 100vh">
      <v-col cols="4" sm="12" md="5">
        <h4 class="text-h4 font-weight-bold text-center pa-4">Hey, Client!</h4>
        <div class="text-center pa-4" style="position: relative">
          <v-icon x-large color="#E0E0E0" style="font-size: 16rem">
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
          <v-btn color="white" class="text-capitalize rounded-lg">
            <v-icon left>fa fa-solid fa-info-circle</v-icon>
            Payment info
          </v-btn>
        </div>
      </v-col>
      <v-col cols="8" sm="12" md="7" class="pa-8">
        <div class="ma-10 pa-5">
          <v-text-field
            label="Name"
            type="text"
            color="#FCB258"
            filled
            dense
          ></v-text-field>
          <v-text-field
            label="Contact"
            type="text"
            color="#FCB258"
            filled
            dense
          ></v-text-field>
          <v-text-field
            label="Email"
            type="text"
            color="#FCB258"
            filled
            dense
          ></v-text-field>
          <v-textarea
            label="Queries"
            type="text"
            color="#FCB258"
            filled
            dense
          ></v-textarea>
          <div class="text-end">
            <v-btn color="background-orange" class="text-capitalize" rounded>
              Save
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClientProfileLayout extends Vue {}
</script>
