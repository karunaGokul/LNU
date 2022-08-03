<template>
  <!-- <v-container fluid class="pa-8">
    <v-row justify="center" class="mt-8">
      <v-col class="d-flex" cols="12" md="4">
        <v-select
          :items="items"
          label="Solo field"
          solo
          background-color="#5949B8"
          class="red--text"
          color="red"
          dark
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <v-select
          :items="items"
          label="Solo field"
          solo
          background-color="#5949B8"
        ></v-select>
      </v-col>
    </v-row>
  </v-container> -->
  <div class="primary-linear">
    <h1 class="pt-15 text-center">Coming soon</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Messages extends Vue {
  public items = ["Foo", "Bar", "Fizz", "Buzz"];
}
</script>

<style scoped>
.v-application .theme--light.v-label {
  color: red;
}
</style>
