<template>
  <v-row class="mb-n8">
    <v-col cols="12" md="4" class="mt-2">
      <v-label>Username</v-label>
    </v-col>
    <v-col cols="12" md="7">
      <v-text-field
        placeholder="Enter Username"
        color="#FCB258"
        background-color="rgb(252, 178, 88, 0.1)"
        filled
        dense
        :rules="emailRules"
        required
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {}
</script>
