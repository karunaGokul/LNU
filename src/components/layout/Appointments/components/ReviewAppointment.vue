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
            v-model="completeRequest.notes"
            @input="$v.completeRequest.notes.$touch()"
            @blur="$v.completeRequest.notes.$touch()"
            :error-messages="$v.completeRequest.notes | errorMessages('Notes')"
          ></v-textarea>
          <v-text-field
            v-if="inviteLink !== 'invite'"
            label="Link"
            color="primary"
            filled
            dense
            v-model="completeRequest.link"
            @input="$v.completeRequest.link.$touch()"
            @blur="$v.completeRequest.link.$touch()"
            :error-messages="$v.completeRequest.link | errorMessages('Link')"
          ></v-text-field>
          <v-text-field
            v-if="inviteLink === 'invite'"
            label="Link"
            color="primary"
            filled
            dense
            v-model="inviteRequest.inviteLink"
            @input="$v.inviteRequest.inviteLink.$touch()"
            @blur="$v.inviteRequest.inviteLink.$touch()"
            :error-messages="
              $v.inviteRequest.inviteLink | errorMessages('inviteLink')
            "
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
      link: { required },
      notes: { required },
    },
    inviteRequest: {
      inviteLink: { required },
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

    if (!this.$v.completeRequest.$invalid) {
      this.loadingSpinner("show");
      this.completeRequest.appointmentId = this.appointmentId;
      this.appointmentService
        .CompleteAppoinment(this.completeRequest)
        .then((response) => {
          this.loadingSpinner("hide");
          this.$emit("review", response);
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
      this.inviteRequest.appointmentId = this.appointmentId;
      this.appointmentService
        .AppoinmentInviteLink(this.inviteRequest)
        .then((response) => {
          this.loadingSpinner("hide");
          this.$emit("invite", response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
