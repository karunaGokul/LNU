<template>
  <div>
    <v-dialog v-model="dialog" width="400" persistent>
      <v-card class="text-center py-4 rounded-lg">
        <v-icon
          style="font-size: 5rem"
          :color="status == 'Success' ? 'blue' : 'red'"
          >{{ status == "Success" ? "check_circle" : "error" }}</v-icon
        >
        <v-card-subtitle class="blue--text text-h6">
          {{ status }}
        </v-card-subtitle>
        <v-card-text>
          {{ message }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AppSuccess extends Vue {
  @Prop() message: string;
  @Prop() status: string;

  public dialog: boolean = true;

  mounted() {
    setTimeout(() => {
      this.dialog = false;
    }, 3000);
  }
}
</script>
