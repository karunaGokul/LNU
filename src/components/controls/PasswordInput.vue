<template>
  <v-row class="mt-n8">
    <v-col cols="12" md="4" class="mt-2">
      <v-label>Password</v-label>
    </v-col>
    <v-col cols="12" md="7">
      <v-text-field
        placeholder="Enter Password"
        color="#FCB258"
        background-color="rgb(252, 178, 88, 0.1)"
        :rules="passwordRules"
        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
        filled
        dense
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PasswordInput extends Vue {}
</script>
