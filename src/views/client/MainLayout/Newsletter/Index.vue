<template>
  <div class="pa-8">
    <h1>Newsletter</h1>

    <v-row class="my-4 ml-1 mr-4">
      <h4>February</h4>
      <v-card class="mt-2 rounded-lg" elevation="2" height="100">
        <v-card-text class="black--text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum
          corporis ipsam. Rem, tempore adipisci! Soluta, aliquid, doloremque,
          iusto culpa nulla beatae illum dolore eveniet dolor veritatis adipisci
          quo ipsum?</v-card-text
        >
      </v-card>
    </v-row>

    <v-row class="my-4 ml-1 mr-4">
      <h4>March</h4>
      <v-card class="mt-2 rounded-lg" elevation="2" height="100">
        <v-card-text class="black--text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum
          corporis ipsam. Rem, tempore adipisci! Soluta, aliquid, doloremque,
          iusto culpa nulla beatae illum dolore eveniet dolor veritatis adipisci
          quo ipsum?</v-card-text
        >
      </v-card>
    </v-row>

    <v-row class="my-4 ml-1 mr-4">
      <h4>April</h4>
      <v-card class="mt-2 rounded-lg" elevation="2" height="100">
        <v-card-text class="black--text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum
          corporis ipsam. Rem, tempore adipisci! Soluta, aliquid, doloremque,
          iusto culpa nulla beatae illum dolore eveniet dolor veritatis adipisci
          quo ipsum?</v-card-text
        >
      </v-card>
    </v-row>

    <v-btn color="background-orange" rounded class="px-6 text-capitalize">
      Save
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Newsletter extends Vue {}
</script>
