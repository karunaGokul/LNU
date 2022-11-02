<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-form @submit.prevent="reschedule">
          <v-card-title class="text-h5 mb-4 font-weight-bold">
            {{
              inviteLink === "invite"
                ? "Appointment Invite Link"
                : " Complete Appointment"
            }}
          </v-card-title>

          <v-card-text>
            <v-textarea
              v-if="inviteLink !== 'invite'"
              label="Notes"
              type="text"
              color="#FCB258"
              filled
              dense
              v-model="reviewNotes"
            ></v-textarea>
            <v-text-field
              v-if="inviteLink !== 'invite'"
              label="Link"
              color="primary"
              filled
              dense
              v-model="reviewLink"
            ></v-text-field>
            <v-text-field
              v-if="inviteLink === 'invite'"
              label="Link"
              color="primary"
              filled
              dense
              v-model="videoLink"
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="close" class="text-capitalize"> Cancel </v-btn>

            <v-btn
              v-if="inviteLink !== 'invite'"
              depressed
              color="primary"
              type="submit"
              class="text-capitalize px-8 py-5"
              @click="review"
            >
              Complete
            </v-btn>
            <v-btn
              v-if="inviteLink === 'invite'"
              depressed
              color="primary"
              type="submit"
              class="text-capitalize px-8 py-5"
              @click="invite"
            >
              Invite
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
  @Prop() appointmentId: string;
  @Prop() inviteLink: string;
  public dialog: boolean = true;
  public reviewNotes: string = "";
  public reviewLink: string = "";
  public videoLink: string = "";
  public close() {
    this.$emit("close");
  }

  public review() {
    this.$emit("review", this.reviewNotes, this.reviewLink);
  }
  public invite() {
    this.$emit("invite", this.videoLink);
  }
}
</script>
