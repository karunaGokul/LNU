<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
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
            v-model="completeRequest.Notes"
            @input="$v.completeRequest.Notes.$touch()"
            @blur="$v.completeRequest.Notes.$touch()"
            :error-messages="$v.completeRequest.Notes | errorMessages('Notes')"
          ></v-textarea>
          <v-text-field
            v-if="inviteLink !== 'invite'"
            label="Link"
            color="primary"
            filled
            dense
            v-model="completeRequest.Link"
            @input="$v.completeRequest.Link.$touch()"
            @blur="$v.completeRequest.Link.$touch()"
            :error-messages="$v.completeRequest.Link | errorMessages('Link')"
          ></v-text-field>
          <v-text-field
            v-if="inviteLink === 'invite'"
            label="Link"
            color="primary"
            filled
            dense
            v-model="inviteRequest.Link"
            @input="$v.inviteRequest.Link.$touch()"
            @blur="$v.inviteRequest.Link.$touch()"
            :error-messages="$v.inviteRequest.Link | errorMessages('Link')"
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
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";
import { InviteLinkModel, CompleteAppoinmentModel } from "@/model";
import { IAppointmentService } from "@/service";
import { required } from "vuelidate/lib/validators";
@Component({
  validations: {
    completeRequest: {
      Link: { required },
      Notes: { required },
    },
    inviteRequest: {
      Link: { required },
    },
  },
})
export default class ReviewAppointment extends BaseComponent {
  @Inject("appointmentService") appointmentService: IAppointmentService;

  @Prop() appointmentId: string;
  @Prop() inviteLink: string;

  public inviteRequest: InviteLinkModel = new InviteLinkModel();
  public completeRequest: CompleteAppoinmentModel =
    new CompleteAppoinmentModel();

  public dialog: boolean = true;

  public close() {
    this.$emit("close");
  }

  public review() {
    this.$v.completeRequest.$touch();
    this.completeRequest.Id = this.appointmentId;
    if (!this.$v.completeRequest.$invalid) {
      this.loadingSpinner("show");
      this.appointmentService
        .CompleteAppoinment(this.completeRequest)
        .then((response) => {
          this.loadingSpinner("hide");
          this.$emit("review");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  public invite() {
    this.$v.inviteRequest.$touch();

    if (!this.$v.inviteRequest.$invalid) {
      this.loadingSpinner("show");
      this.appointmentService
        .AppoinmentInviteLink(this.inviteRequest)
        .then((response) => {
          this.loadingSpinner("hide");
          this.$emit("invite");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
