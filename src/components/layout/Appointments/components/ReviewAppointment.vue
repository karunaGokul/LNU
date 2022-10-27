<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-form @submit.prevent="reschedule">
          <v-card-title class="text-h5 mb-4 font-weight-bold">
            Review Appointment
          </v-card-title>

          <v-card-text>
            <v-textarea
              label="Notes"
              type="text"
              color="#FCB258"
              filled
              dense
              v-model="reviewNotes"
            ></v-textarea>
            <v-text-field
              label="Link"
              color="primary"
              filled
              dense
              v-model="reviewLink"
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="close" class="text-capitalize"> Cancel </v-btn>

            <v-btn
              depressed
              color="primary"
              type="submit"
              class="text-capitalize px-12 py-5"
              @click="review"
            >
              Review
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { PageInfo } from "@/model";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ReviewAppointment extends Vue {
  public dialog: boolean = true;
  public reviewNotes: string = "";
  public reviewLink: string = "";
  public close() {
    this.$emit("close");
  }

  public review() {
    this.$emit("review", this.reviewNotes, this.reviewLink);
  }
}
</script>
