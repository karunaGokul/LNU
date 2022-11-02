<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-form @submit.prevent="reschedule">
          <v-card-title class="text-h5 mb-4 font-weight-bold">
            Reschedule Appointment
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Counseling Program"
              outlined
              dense
              readonly
              v-model="selectedEvent.name"
            ></v-text-field>
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
                  label="Select Date"
                  prepend-inner-icon="calendar_month"
                  readonly
                  dense
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  required
                  @input="$v.request.AppointmentDate.$touch()"
                  @blur="$v.request.AppointmentDate.$touch()"
                  v-model="request.AppointmentDate"
                  :error-messages="
                    $v.request.AppointmentDate
                      | errorMessages('AppointmentDate')
                  "
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="request.AppointmentDate"
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="time"
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  dense
                  label="Select Time"
                  append-icon="schedule"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  required
                  @input="$v.request.AppointmentTime.$touch()"
                  @blur="$v.request.AppointmentTime.$touch()"
                  v-model="request.AppointmentTime"
                  :error-messages="
                    $v.request.AppointmentTime
                      | errorMessages('AppointmentTime')
                  "
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="request.AppointmentTime"
                full-width
                @click:minute="$refs.menu.save(time)"
                ampm-in-title
              ></v-time-picker>
            </v-menu>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="close" class="text-capitalize"> Cancel </v-btn>

            <v-btn
              color="primary depressed"
              type="submit"
              class="text-capitalize px-12 py-5"
            >
              Reschedule
            </v-btn>
          </v-card-actions>
          <snack-bar
            v-if="snackbar"
            :snackbarText="snackbarText"
            :snackBarStatus="snackBarStatus"
          />
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";

import { IAppointmentService, IRegistrationService } from "@/service";
import { BookAppointmentRequestModel } from "@/model";

import SnackBar from "@/components/layout/SnackBar.vue";
import { required } from "vuelidate/lib/validators";

@Component({
  components: {
    SnackBar,
  },
  validations: {
    request: {
      AppointmentDate: { required },
      AppointmentTime: { required },
    },
  },
})
export default class RescheduleAppointment extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;
  @Inject("appointmentService") service: IAppointmentService;

  @Prop() appointmentId: string;
  @Prop() selectedEvent: any;

  public request: BookAppointmentRequestModel =
    new BookAppointmentRequestModel();

  public time: number = null;
  public dialog: boolean = true;
  public menu2: boolean = false;
  public menu1: boolean = false;
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  public snackbar: boolean = false;
  public snackbarText: any;
  public snackBarStatus: string = "";

  created() {
    this.request.AppointmentDate = this.selectedEvent.appointmentDate;
    this.request.AppointmentTime = this.selectedEvent.appointmentTime;
  }

  public reschedule() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.request.AppointmentId = this.appointmentId;

      this.service
        .rescheduleAppointments(this.request)
        .then((response) => {
          this.$emit("appointmentRescheduled");

          this.snackbarText = response;
          this.snackbar = true;
          this.snackBarStatus = "Success";
          this.dialog = false;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public close() {
    this.$emit("close");
  }

}
</script>
