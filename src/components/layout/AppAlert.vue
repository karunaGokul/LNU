<template>
  <v-dialog v-model="dialog" width="500" persistent>
    <v-card class="pt-10">
      <v-card-text
        class="text-center"
        :class="type == questionnaire ? 'black--text' : 'red--text'"
        >{{ message }}</v-card-text
      >
      <v-card-actions class="justify-center pb-3">
        <v-btn
          text
          depressed
          color="primary"
          @click="close('Yes')"
          class="text-capitalize"
          >Yes</v-btn
        >
        <v-btn
          text
          depressed
          color="red"
          @click="close('No')"
          class="text-capitalize"
          >No</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AppAlert extends Vue {
  @Prop() message: string;
  @Prop() type: string;

  public dialog: boolean = true;

  public close(event: string) {
    this.$emit(event);
  }
}
</script>
