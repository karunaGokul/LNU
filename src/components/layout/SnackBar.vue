<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      light
      right
      top
      class="snackbar"
    >
      <v-icon color="$snackText-color">priority_high </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click=snackBar>
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

 public snackBar() {
  this.$emit("close");
 }

}
</script>