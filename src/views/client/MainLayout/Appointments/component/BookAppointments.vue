<template>
  <div class="pa-4">
    <div class="text-left mb-4">
      <v-btn depressed color="#1867c0" class="white--text" @click="back">
        <v-icon class="pr-2">keyboard_backspace</v-icon>
        Back
      </v-btn>
    </div>
    <v-row class="px-15 mt-15" justify="center">
      <v-col md="4">
        <v-form @submit.prevent="bookNow">
          <div class="pa-0 text-center mb-5">
            <h1>Book Appointment</h1>
          </div>
          <v-select
            label="Counseling Program"
            outlined
            dense
            v-model="request.CounselingType"
            :items="counselingProgram"
            item-text="Name"
            @change="
              $v.request.CounselingType.$touch();
              getExistingCoach();
            "
            @blur="$v.request.CounselingType.$touch()"
            required
            :error-messages="
              $v.request.CounselingType | errorMessages('CounselingType')
            "
            return-object
          ></v-select>
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
                  $v.request.AppointmentDate | errorMessages('AppointmentDate')
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
                  $v.request.AppointmentTime | errorMessages('AppointmentTime')
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
          <v-checkbox
            v-model="request.ExistingCoach"
            on-icon="check_box"
            off-icon="check_box_outline_blank"
            label="Previous Coach"
            class="mt-0 pt-0"
            :disabled="!request.CounselingType"
            @change="getExistingCoach()"
          ></v-checkbox>
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
          >
            Make payment
          </v-btn>
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
  </div>
</template>
<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import { IAppointmentService, IProfileService } from "@/service";
import {
  BookAppointmentRequestModel,
  BookAppointmentValidationRequestModel,
  CoachDetailsModel,
  PreviousCoachRequestModel,
  UpdatePaymentRequestModel,
} from "@/model";

import BaseComponent from "@/components/base/BaseComponent";
import AppAlert from "@/components/layout/AppAlert.vue";
import { required } from "vuelidate/lib/validators";

import { Settings } from "@/config";

import { StripeCheckout } from "@vue-stripe/vue-stripe";

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
  },
};

@Component({
  validations: validations,
  components: {
    StripeCheckout,
    AppAlert,
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

  created() {
    this.publishableKey = Settings.PublicKey;
    this.successUrl = window.location.origin + "/client/home/success";
    this.cancelUrl = window.location.origin + "/client/home/cancel";
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
      this.profileService
        .getPreviousCoaches(request)
        .then((response) => {
          this.existingCoach = response;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public bookNow() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      let request = new BookAppointmentRequestModel();
      request.AppointmentDate = this.request.AppointmentDate;
      request.AppointmentTime = this.request.AppointmentTime;
      request.CounselingType = this.request.CounselingType;
      request.CoachDetails = this.request.CoachDetails;

      this.service
        .bookAppointments(request)
        .then((response) => {
          this.loadingSpinner("hide");
          console.log(response);
        })
        .catch((err) => {
          this.loadingSpinner("hide");
          console.log(err);
        });

      // this.requestPayment.Amount = 1000;
      // this.requestPayment.Status = "Success";
      // this.requestPayment.PaymentType = "Credit Card";
      // this.requestPayment.appointmentId = "79098e59-3077-4e00-a68b-639b5cf31570";
      // this.service
      //   .updatePayment(this.requestPayment)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      this.showCheckOut = true;
      this.lineItems = [
        { price: this.request.CounselingType.ProductId, quantity: 1 },
      ];

      setTimeout(() => {
        (this.$refs.checkoutRef as any).redirectToCheckout();
      }, 1000);
    }
  }

  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }
}
</script>
