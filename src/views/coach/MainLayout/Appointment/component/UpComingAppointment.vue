<template>
  <div>
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title class="text-h6">
          <v-icon class="pl-n2 pr-1">today</v-icon>Reschedule
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mb-n6">
          <v-text-field
            outlined
            dense
            class="mt-4"
            label="Appointment Type"
          ></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Select Duration"
                prepend-inner-icon="schedule"
                readonly
                outlined
                dense
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Select Date"
                prepend-inner-icon="calendar_month"
                readonly
                dense
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
          <v-textarea outlined label="Queries"></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="reschedule" class="primary text-capitalize">
            Reschedule
          </v-btn>
          <v-btn class="text-capitalize red white--text" text @click="close">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Prop } from "vue-property-decorator";
import { IAppointmentService } from "@/service";
import { BookAppointmentRequestModel, CounselingModel } from "@/model";
import { required } from "vuelidate/lib/validators";
@Component({
  components: {},
})
export default class UpComingAppointment extends Vue {
  @Inject("appointmentService") service: IAppointmentService;

  @Prop() appointmentId: string;
  public dialog: boolean = true;
  public menu1: boolean = false;
  public menu2: boolean = false;
  public time: number = null;
  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  public reschedule() {
    this.dialog = false;
    console.log(this.request);
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.request.AppointmentId = this.appointmentId;
      this.service
        .rescheduleAppointments(this.request)
        .then((response) => {
          console.log(response);
          this.$emit("appointmentBooked");
          this.dialog = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  public close() {
    this.dialog = false;
    this.$emit("close");
  }
}
</script>
