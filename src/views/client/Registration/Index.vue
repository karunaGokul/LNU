<template>
  <v-row no-gutters class="primary-linear">
    <v-col lg="6" md="6" sm="12">
      <v-container fill-height fluid class="pa-0 position-relative">
        <v-img src="@/assets/client-registration.jpg" height="100vh" />
        <h4
          class="text-h3 font-weight-bold white--text position-absolute title"
          style="font-family: Questario Icon !important"
        >
          Life N You Welcomes you
        </h4>
        <h4
          class="text-h4 white--text position-absolute sub-title"
          style="font-family: Questario Icon !important"
        >
          Heal Better, Feel Better
        </h4>
      </v-container>
    </v-col>
    <v-col lg="6" md="6" sm="12" v-if="!questionaire">
      <v-container
        fill-height
        fluid
        d-flex
        justify-center
        align-center
        flex-column
      >
        <h2 class="mb-3 px-8 text-h4 text-start font-weight-bold">
          Create new account
        </h2>
        <div class="mb-4 px-8 text-h7 text-start">
          Already A Member?
          <router-link to="/client/login" class="text-decoration-none" tag="a"
            >Log In
          </router-link>
        </div>
        <div style="width: 590px">
          <v-form class="px-8" @submit.prevent="register" autocomplete="off">
            <v-row>
              <v-col>
                <v-text-field
                  label="First name"
                  color="primary"
                  append-icon="person"
                  filled
                  dense
                  v-model="request.FirstName"
                  required
                  @input="$v.request.FirstName.$touch()"
                  @blur="$v.request.FirstName.$touch()"
                  :error-messages="
                    $v.request.FirstName | errorMessages('FirstName')
                  "
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Last name"
                  color="primary"
                  append-icon="person"
                  filled
                  dense
                  v-model="request.LastName"
                  required
                  @input="$v.request.LastName.$touch()"
                  @blur="$v.request.LastName.$touch()"
                  :error-messages="
                    $v.request.LastName | errorMessages('LastName')
                  "
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              label="Username"
              color="primary"
              append-icon="person"
              filled
              dense
              v-model="request.Username"
              required
              @input="$v.request.Username.$touch()"
              @blur="$v.request.Username.$touch()"
              :error-messages="$v.request.Username | errorMessages('Username')"
            ></v-text-field>
            <v-text-field
              label="Email Id"
              type="text"
              name="email"
              color="primary"
              append-icon="email"
              filled
              dense
              v-model="request.Email"
              required
              @input="$v.request.Email.$touch()"
              @blur="$v.request.Email.$touch()"
              :error-messages="$v.request.Email | errorMessages('Email')"
              autocomplete="off"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                  label="Password"
                  color="primary"
                  filled
                  dense
                  v-model="request.Password"
                  required
                  @input="$v.request.Password.$touch()"
                  @blur="$v.request.Password.$touch()"
                  :error-messages="
                    $v.request.Password | errorMessages('Password')
                  "
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Confirm Password"
                  color="primary"
                  filled
                  dense
                  v-model="request.ConfirmPassword"
                  required
                  @input="$v.request.ConfirmPassword.$touch()"
                  @blur="$v.request.ConfirmPassword.$touch()"
                  :error-messages="
                    $v.request.ConfirmPassword
                      | errorMessages('ConfirmPassword')
                  "
                  :type="showConfirmpassword ? 'text' : 'password'"
                  :append-icon="
                    showConfirmpassword ? 'visibility_off' : 'visibility'
                  "
                  @click:append="showConfirmpassword = !showConfirmpassword"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col lg="6" md="6">
                <v-text-field
                  label="Phone number"
                  color="primary"
                  append-icon="call"
                  filled
                  dense
                  v-model="request.PhoneNumber"
                  required
                  @input="$v.request.PhoneNumber.$touch()"
                  @blur="$v.request.PhoneNumber.$touch()"
                  :error-messages="
                    $v.request.PhoneNumber | errorMessages('Phone number')
                  "
                ></v-text-field>
              </v-col>
              <v-col lg="6" md="6">
                <v-select
                  label="Counselling Type"
                  color="primary"
                  filled
                  dense
                  :items="counselingProgram"
                  append-icon="arrow_drop_down"
                  item-text="Name"
                  item-value="Id"
                  v-model="request.CounselingType"
                  @change="$v.request.CounselingType.$touch()"
                  @blur="$v.request.CounselingType.$touch()"
                  required
                  :error-messages="
                    $v.request.CounselingType | errorMessages('CounselingType')
                  "
                ></v-select>
              </v-col>
            </v-row>
            <div class="text-center">
              <v-btn
                color="primary"
                depressed
                class="white--text rounded font-weight-bold"
                large
                type="submit"
                style="width: 100%"
                >Create account</v-btn
              >
            </div>
          </v-form>
        </div>
      </v-container>
    </v-col>
    <v-col lg="6" md="6" sm="12" v-if="questionaire">
      <v-container
        fluid
        style="overflow: scroll; height: 100vh"
        class="pt-4 pl-4"
      >
        <h3>
          Welcome Onboard! Whatever your requirement from us, we hope to deliver
          the best. So let us do a few quick questions to get started.
        </h3>
        <br />

        <v-row>
          <v-col cols="6" md="4">
            <h4>Name:</h4>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              placeholder="Name"
              color="primary"
              dense
              filled
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <h4>Are you looking for help for yourself or someone else?</h4>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              placeholder="Help for"
              color="primary"
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <br />
        <h3 class="text-capitalize">basic details questionnaire</h3>
        <br />
        <p>
          Help us know you better so we can design your personalized
          questionnaire to offer perfect solutions.
        </p>

        <v-row>
          <v-col cols="6" md="3">
            <h4>Your Email ID:</h4>
          </v-col>
          <v-col cols="6" md="6">
            <v-text-field dense placeholder="Email Id" color="primary" filled>
            </v-text-field>
          </v-col>
        </v-row>

        <h4>1. Who is the person who needs help</h4>
        <v-radio-group v-model="radios">
          <v-radio
            v-for="i in items"
            :key="i"
            :label="i"
            :value="i"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>
        <h3>If it's for yourself, please answer the questions below</h3>
        <br />

        <h4>2. How would you like to identify yourself</h4>
        <v-radio-group v-model="radios">
          <v-radio
            v-for="i in items1"
            :key="i"
            :label="i"
            :value="i"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          >
          </v-radio>
        </v-radio-group>

        <h4>3. What brought you to visit us?</h4>
        <v-radio-group v-model="radios">
          <v-radio
            v-for="i in items2"
            :key="i"
            :label="i"
            :value="i"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4>
          4. What do you expect from your interactions with the therapist?
        </h4>
        <v-radio-group v-model="radios">
          <v-radio
            v-for="i in items3"
            :key="i"
            :label="i"
            :value="i"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4>
          5. On a scale of 1 to 10, rate the following (1 being the least or
          worst and 10 being the most or best)
        </h4>

        <v-row v-for="i in items4" :key="i">
          <v-col cols="6" md="4">
            <v-checkbox
              :label="i"
              :value="i"
              off-icon="check_box_outline_blank"
              on-icon="check_box"
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-16 mx-16"
            ></v-slider>
          </v-col>
        </v-row>

        <h4>
          6. Are you already on any medication? If Yes, please mention the name.
        </h4>
        <v-row>
          <v-col cols="6" md="6">
            <v-text-field
              placeholder="Medication Name"
              color="primary"
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <h4>7. What is your preferred mode of communication</h4>
        <v-radio-group v-model="radios">
          <v-radio
            v-for="i in items5"
            :key="i"
            :label="i"
            :value="i"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4>
          If your appointment is for someone else, please let us know the
          following
        </h4>
        <br />
        <h4>How should we get in touch with the person requiring counseling</h4>
        <v-radio-group v-model="radios">
          <v-radio
            v-for="i in items6"
            :key="i"
            :label="i"
            :value="i"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4>
          The details about the preferred mode of communication to collect the
          data (like Mobile No./Whatsapp number/ e-mail ID etc.)
        </h4>
        <br />
        <v-row>
          <v-col cols="6" md="6">
            <v-text-field
              placeholder="Mode of Communication"
              color="primary"
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="deep-orange lighten-5 pink--text"
      right
      top
    >
      <v-icon color="pink">mdi-exclamation-thick </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";
import {
  required,
  sameAs,
  numeric,
  minLength,
  maxLength,
  email,
  helpers,
} from "vuelidate/lib/validators";

import { ClientRegistrationModel, CounselingModel } from "@/model";
import { IRegistrationService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";

const alphaOnly = helpers.regex("alphaOnly", /^[a-zA-Z]*$/i);

@Component({
  validations: {
    request: {
      FirstName: { required, alphaOnly },
      LastName: { required, alphaOnly },
      Username: { required },
      Email: { required, email },
      Password: { required },
      ConfirmPassword: { required, sameAsPassword: sameAs("Password") },
      PhoneNumber: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      CounselingType: { required },
    },
  },
})
export default class ClientRegistration extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;

  public request: ClientRegistrationModel = new ClientRegistrationModel();

  public showPassword: boolean = false;
  public showConfirmpassword: boolean = false;
  public snackbar: boolean = false;
  public snackbarText: string = "";

  public questionaire: boolean = true;
  public radios: number = 1;

  public items: any = [
    "Yourself",
    "Someone Else- Relationship with you",
    "You and Your Spouse",
  ];

  public items1: any = ["Man", "Woman", "Others"];

  public items2: any = [
    "Constant feeling low",
    "I've been through a trauma",
    "Lack of self-confidence",
    "Diagnosed with anxiety and stress",
    "Diagnosed with clinical depression",
    "Not sure, I'm Not OK, and I know that I need help",
  ];

  public items3: any = [
    "Just good listening",
    "Help build my confidence",
    "Show me a better way to live",
    "Give me a solution to my problem",
    "Help me cope with my problem",
    "Others",
  ];

  public items4: any = [
    "Eating Habits",
    "Your understanding of your physical health",
    "Your daily eating habits",
    "The current state of mind",
    "Urge to Live",
    "Social Interactions",
    "Dependency on Addictions, if any",
    "Fear of the unknown",
    "The physical feeling of pain or illness",
  ];
  public items5: any = [
    "Skype or videoconferencing",
    "Telephonic conversation",
    "Personal meetings",
    "Through emails",
    "Whatsapp",
  ];

  public items6: any = [
    "Email",
    "Video conferencing",
    "Whatsapp",
    "Phone call",
  ];

  public register() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      this.request.Role = "Client";
      this.loadingSpinner("show");
      this.registerService.clientRegister(this.request).then(
        (response: Array<ClientRegistrationModel>) => {
          this.loadingSpinner("hide");
          this.questionaire = true;
          this.$router.push("login");
        },
        (err) => {
          this.loadingSpinner("hide");
          if (err.response.status === 400) {
            this.snackbarText = err.response.data;
            this.snackbar = true;
          }
        }
      );
    }
  }

  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }
}
</script>
