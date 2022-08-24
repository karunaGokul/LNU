<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="490">
      <v-card>
        <v-card-title class="text-body-1">
          Are you sure you want to cancel the appointments?</v-card-title
        >
        <!-- <v-card-text> </v-card-text> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('dialog', true)">
            Yes
          </v-btn>
          <v-btn color="gray darken-1" text @click="$emit('dialog', false)">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DialogMessage extends Vue {
  @Prop() dialog: boolean;
}
</script>
