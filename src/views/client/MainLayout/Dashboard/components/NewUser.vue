<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click=close>
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-text class="text-subtitle-1">
          Questionnaire is not yet started. Would you like to do it now?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="text-capitalize" text color="red" @click="close">Close</v-btn>
          <v-btn
            color="primary"
            class="text-capitalize"
            text
            @click="continueQuestionnaire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class DashboardLayout extends BaseComponent {
  public dialog: boolean = true;

  public close() {
    this.$emit("close");
  }

  public continueQuestionnaire() {
     this.$router.push("/client/home/questionnaire")
  }
}
</script>
