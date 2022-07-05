<template>
  <v-row class="mt-n8">
    <v-col cols="12" md="4" class="mt-5">
      <v-label>Password</v-label>
    </v-col>
    <v-col cols="12" md="7">
      <v-text-field
        background-color="white"
        placeholder="Enter Password"
        type="password"
        rounded
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PasswordInput extends Vue {}
</script>
