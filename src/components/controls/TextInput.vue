<template>
  <v-row>
    <v-col cols="12" md="4" class="mt-3">
      <v-label>Username</v-label>
    </v-col>
    <v-col cols="12" md="7">
      <v-text-field
        background-color="white"
        placeholder="Enter Username"
        rounded
        outlined
        dense
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {}
</script>
