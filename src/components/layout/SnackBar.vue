<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      right
      top
      :color="snackBarStatus == 'Success' ? 'green' : 'red'"
    >
      <v-icon>priority_high </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackBar">
          <v-icon>close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CoachDetails extends Vue {
  @Prop() snackbarText: string;
  @Prop() snackBarStatus: string;

  public snackbar: boolean = true;

  public snackBar() {
    this.$emit("close");
  }

  updated() {
    this.snackBar();
  }
}
</script>
