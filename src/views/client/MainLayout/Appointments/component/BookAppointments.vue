<template>
  <div class="pa-4">
    <div class="text-left mb-4">
      <v-btn
        depressed
        color="#1867c0"
        class="white--text text-capitalize"
        @click="back"
      >
        <v-icon class="pr-2">keyboard_backspace</v-icon>
        Appoinments
      </v-btn>
    </div>
    <v-row class="px-15 mt-2" justify="center">
      <v-col md="5">
        <h1 class="pa-0 text-center mb-4">Book Appointment</h1>
        <v-form @submit.prevent="bookNow">
          <v-container class="pa-0">
            <v-radio-group
              v-model="request.CounselingType"
              class="book-appointment__container"
            >
              <v-radio
                v-for="(program, i) in counselingProgram"
                :key="i"
                off-icon="radio_button_unchecked"
                on-icon="radio_button_checked"
                :label="program.Name"
                :value="program"
                @click="
                  $v.request.CounselingType.$touch();
                  getExistingCoach();
                "
                @blur="$v.request.CounselingType.$touch()"
                required
                :error-messages="
                  $v.request.CounselingType | errorMessages('CounselingType')
                "
              ></v-radio>
            </v-radio-group>
            <div
              class="error-text text-start"
              v-if="
                $v.request.CounselingType.$dirty &&
                $v.request.CounselingType.$invalid
              "
            >
              Counseling Program is required
            </div>

            <v-row class="mt-4 mb-2">
              <v-col class="py-0">
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
                      v-model="request.AppointmentDate"
                      label="Select Date"
                      prepend-inner-icon="calendar_month"
                      readonly
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                      required
                      :error-messages="
                        $v.request.AppointmentDate
                          | errorMessages('AppointmentDate')
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="request.AppointmentDate"
                    :min="new Date().toISOString().substr(0, 10)"
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="py-0">
                <v-menu
                  :nudge-left="150"
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="time"
                  transition="scale-transition"
                  min-width="300"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="request.AppointmentTime"
                      outlined
                      dense
                      label="Select Time"
                      append-icon="schedule"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      required
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
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-textarea
              filled
              label="Notes to coach"
              v-model="request.TellAboutYourSelf"
              @change="$v.request.TellAboutYourSelf.$touch()"
              @blur="$v.request.TellAboutYourSelf.$touch()"
              required
              :error-messages="
                $v.request.TellAboutYourSelf
                  | errorMessages('TellAboutYourSelf')
              "
            ></v-textarea>
            <v-switch
              class="v-input--reverse .v-input__slot"
              style="margin-top: -5px"
              v-model="request.ExistingCoach"
              label="Do you consult.."
              :disabled="!request.CounselingType"
              @change="getExistingCoach()"
            ></v-switch>
            <template
              v-if="
                request.CounselingType &&
                Object.entries(request.CounselingType).length > 0 &&
                request.ExistingCoach
              "
            >
              <v-select
                label="Avaliable Coach"
                outlined
                dense
                v-model="request.CoachDetails"
                :items="existingCoach"
                item-text="Name"
                @change="$v.request.CoachDetails.$touch()"
                @blur="$v.request.CoachDetails.$touch()"
                required
                :error-messages="
                  $v.request.CoachDetails | errorMessages('CoachDetails')
                "
                return-object
              ></v-select>
            </template>

            <v-btn
              depressed
              color="primary"
              type="submit"
              large
              style="width: 100%"
              class="text-capitalize"
            >
              Continue
            </v-btn>
          </v-container>
        </v-form>
        <app-alert v-if="showAlert" :response="response" />
      </v-col>
    </v-row>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :lineItems="lineItems"
      :success-url="successUrl"
      :cancel-url="cancelUrl"
      v-if="showCheckOut"
    />
    <!-- <payment-card @update="onUpdate" v-if="showCheckOut" /> -->
    <snack-bar
      v-if="snackbar"
      :snackbarText="snackbarText"
      :snackBarStatus="snackBarStatus"
      @close="OnSnackBarClose"
    />
  </div>
</template>
<script lang="ts">
import { Component, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";
import { required } from "vuelidate/lib/validators";
import { Settings } from "@/config";

import { StripeCheckout } from "@vue-stripe/vue-stripe";

import AppAlert from "@/components/layout/AppAlert.vue";
import SnackBar from "@/components/layout/SnackBar.vue";
import PaymentCard from "./PaymentCard.vue";

import { IAppointmentService, IProfileService } from "@/service";
import {
  BookAppointmentRequestModel,
  BookAppointmentValidationRequestModel,
  CoachDetailsModel,
  PreviousCoachRequestModel,
  UpdatePaymentRequestModel,
} from "@/model";

let validations = {
  request: {
    CounselingType: { required },
    AppointmentDate: { required },
    AppointmentTime: { required },
    CoachDetails: {
      required: (value: any, jsonSchema: any) => {
        let validation = false;

        if (
          jsonSchema.CounselingType &&
          Object.entries(jsonSchema.CounselingType).length > 0 &&
          jsonSchema.ExistingCoach
        ) {
          if (
            jsonSchema.CoachDetails &&
            Object.entries(jsonSchema.CoachDetails).length > 0
          )
            validation = true;
          else validation = false;
        } else validation = true;

        return validation;
      },
    },
    TellAboutYourSelf: { required },
  },
};

@Component({
  validations: validations,
  components: {
    StripeCheckout,
    AppAlert,
    PaymentCard,
    SnackBar,
  },
})
export default class BookAppointments extends BaseComponent {
  @Inject("appointmentService") service: IAppointmentService;
  @Inject("profileService") profileService: IProfileService;

  public request: BookAppointmentValidationRequestModel =
    new BookAppointmentValidationRequestModel();

  public requestPayment: UpdatePaymentRequestModel =
    new UpdatePaymentRequestModel();

  public showCheckOut: boolean = false;
  public publishableKey: string = "";
  public lineItems: any = [];
  public successUrl: string = "";
  public cancelUrl: string = "";

  public response: string = "";

  public time: number = null;
  public menu2: boolean = false;
  public menu1: boolean = false;
  public showAlert: boolean = false;
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  public existingCoach: Array<CoachDetailsModel> = [];
  public snackbar: boolean = false;
  public snackbarText: string = "";
  public snackBarStatus: string = "";

  created() {
    this.publishableKey = Settings.PublicKey;
    this.successUrl = window.location.origin + "/client/home/success";
    this.cancelUrl = window.location.origin + "/client/home/cancel";
    this.request.AppointmentTime = "9:00";

    this.request.CounselingType = this.counselingProgram.find((item: any) => {
      return item.Name === this.$route.query.appointment;
    });
  }

  public back() {
    this.$router.push("/client/home/appointments");
  }

  public getExistingCoach() {
    this.request.CoachDetails = new CoachDetailsModel();

    let request = new PreviousCoachRequestModel();
    request.clientId = this.$store.getters.id;
    request.counselingTypeId = this.request.CounselingType.Id;

    if (
      this.request.CounselingType &&
      Object.entries(this.request.CounselingType).length > 0 &&
      this.request.ExistingCoach
    ) {
      this.loadingSpinner("show");
      this.profileService
        .getPreviousCoaches(request)
        .then((response) => {
          this.loadingSpinner("hide");
          this.existingCoach = response;
        })
        .catch((err) => {
          this.loadingSpinner("hide");
          console.log(err);
        });
    }
  }

  public bookNow() {
    this.showCheckOut = true;
    this.$v.$touch();
    if (!this.$v.$invalid) {
      let request = new BookAppointmentRequestModel();
      request.AppointmentDate = this.request.AppointmentDate;
      request.AppointmentTime = this.request.AppointmentTime;
      request.CounselingType = this.request.CounselingType;
      request.CoachDetails = this.request.CoachDetails;
      request.TellAboutYourSelf = this.request.TellAboutYourSelf;

      this.loadingSpinner("show");
      this.service
        .bookAppointments(request)
        .then((response) => {
          this.loadingSpinner("hide");
          this.snackbarText = response;
          this.snackbar = true;
          this.snackBarStatus = "Success";

          localStorage.setItem("appointmentId", response);
          this.showCheckOut = true;
          this.lineItems = [
            { price: this.request.CounselingType.ProductId, quantity: 1 },
          ];
          setTimeout(() => {
            (this.$refs.checkoutRef as any).redirectToCheckout();
          }, 1000);
        })
        .catch((err) => {
          this.loadingSpinner("hide");
          this.snackbarText = err.response.data;
          this.snackbar = true;
        });
    }
  }

  onUpdate(token: any) {
    console.log(token);
    this.showCheckOut = false;
  }

  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }

  public OnSnackBarClose() {
    this.snackbar = false;
  }
}
</script>
