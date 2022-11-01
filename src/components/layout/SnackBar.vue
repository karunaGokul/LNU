<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      right
      top
      dark
      :color="snackBarStatus == 'Success' ? 'green' : 'red'"
    >
      <v-icon color="white">priority_high </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackBar">
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
  @Prop() snackbar: boolean;
  @Prop() snackBarStatus: string;

  public snackBar() {
    this.$emit("close");
  }
}
</script>
