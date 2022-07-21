<template>
  <v-container fluid class="pa-8">
    <v-row>
      <v-col>
        <v-select label="New Messages" :items="items" solo></v-select>
      </v-col>
      <v-col>
        <v-select label="New Messages" :items="items" solo></v-select>
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
