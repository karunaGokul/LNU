<template>
  <v-container fluid class="pa-8">
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="4">
        <v-select
          label="New Messages"
          :items="items"
          background-color="orange"
          solo
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="LifeNUpdates"
          :items="items"
          background-color="orange"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Messages extends Vue {
  public items = ["Foo", "Bar", "Fizz", "Buzz"];
}
</script>
