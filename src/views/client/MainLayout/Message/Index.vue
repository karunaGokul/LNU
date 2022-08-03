<template>
  <!-- <v-container fluid class="pa-8">
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="4">
        <v-select
          label="New Messages"
          :items="items"
          background-color="orange"
          solo
          dark
          style="position: relative"
        >
        </v-select>
        <v-avatar
          color="red"
          size="20"
          absolute
          style="left: 300px; bottom: 90px"
        >
          <span class="white--text">2</span>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="LifeNUpdates"
          :items="items"
          background-color="orange"
          solo
          dark
        ></v-select>
      </v-col>
    </v-row>
  </v-container> -->
  <div>
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
