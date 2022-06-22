<template>
  <v-row>
    <v-col>
      <v-form>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-label>Username</v-label>
          </v-col>
          <v-col cols="12" md="7">
            <v-text-field
              class="white"
              rounded
              dense
              placeholder="Enter Username"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-label>Password</v-label>
          </v-col>
          <v-col cols="12" md="7">
            <v-text-field
              class="white"
              rounded
              dense
              placeholder="Enter Password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-5">
          <v-btn
            depressed
            rounded
            color="#FFA726"
            class="white--text text-capitalize"
            >Login</v-btn
          >
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginInput extends Vue {}
</script>
