<template>
  <v-row no-gutters class="primary-linear">
    <v-col lg="5" md="5" sm="12">
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
    <v-col lg="7" md="7" sm="12" v-if="!showQuestionaire">
      <v-container
        fill-height
        fluid
        d-flex
        justify-center
        align-center
        flex-column
      >
        <h2 class="text-h4 text-start font-weight-bold">Create account</h2>

        <div class="my-12">
          <v-form class="px-8" @submit.prevent="register" autocomplete="off">
            <v-row class="mb-3">
              <v-col>
                <v-text-field
                  label="First Name"
                  color="primary"
                  append-icon="person"
                  filled
                  dense
                  hide-details
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
                  label="Last Name"
                  color="primary"
                  append-icon="person"
                  filled
                  dense
                  hide-details
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
              class="mb-6"
              label="User Name"
              color="primary"
              append-icon="person"
              filled
              dense
              hide-details
              v-model="request.Username"
              required
              @input="$v.request.Username.$touch()"
              @blur="$v.request.Username.$touch()"
              :error-messages="$v.request.Username | errorMessages('Username')"
            ></v-text-field>

            <v-text-field
              label="Password"
              color="primary"
              class="mb-2"
              filled
              dense
              v-model="request.Password"
              required
              @input="$v.request.Password.$touch()"
              @blur="$v.request.Password.$touch()"
              :error-messages="$v.request.Password | errorMessages('Password')"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-text-field
              class="mb-6"
              hide-details
              label="Confirm Password"
              color="primary"
              filled
              dense
              v-model="request.ConfirmPassword"
              required
              @input="$v.request.ConfirmPassword.$touch()"
              @blur="$v.request.ConfirmPassword.$touch()"
              :error-messages="
                $v.request.ConfirmPassword | errorMessages('ConfirmPassword')
              "
              :type="showConfirmpassword ? 'text' : 'password'"
              :append-icon="
                showConfirmpassword ? 'visibility_off' : 'visibility'
              "
              @click:append="showConfirmpassword = !showConfirmpassword"
            ></v-text-field>
            <v-row class="mb-2">
              <v-col lg="6" md="6">
                <v-text-field
                  label="Email"
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
              </v-col>
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
            </v-row>
            <div class="text-center">
              <v-btn
                color="primary"
                depressed
                class="white--text rounded text-capitalize"
                large
                type="submit"
                style="width: 100%"
                >register</v-btn
              >
            </div>
          </v-form>
        </div>
        <div class="text-h7 text-center">
          Already have an account?
          <router-link to="/client/login" class="text-decoration-none" tag="a"
            >Sign In
          </router-link>
        </div>
      </v-container>
    </v-col>
    <v-col lg="7" md="7" sm="12" v-if="showQuestionaire">
      <v-container
        fluid
        style="overflow-y: auto; height: 100vh"
        class="pt-4 pl-4 ml-4"
      >
        <h2 class="mb-4 text-h4 font-weight-bold">Welcome Onboard!</h2>
        <p>
          Help us know you better so we can design your personalized
          questionnaire to offer perfect solutions.
        </p>
        <h4>1. Who is the person who needs help</h4>
        <v-radio-group v-model="questionnaireRequest.WhoIsThePersonNeedHelp">
          <v-radio
            label="Yourself"
            value="Yourself"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          >
          </v-radio>
          <v-radio
            label="Someone else - Relationship with you"
            value="Someone Else- Relationship with you"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          >
          </v-radio>
          <v-text-field
            dense
            placeholder=""
            color="primary"
            filled
            v-if="
              questionnaireRequest.WhoIsThePersonNeedHelp ==
              'Someone Else- Relationship with you'
            "
            v-model="questionnaireRequest.PersonNeedHelp"
          >
          </v-text-field>
          <v-radio
            label="You and Your Spouse"
            value="You and Your Spouse"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          >
          </v-radio>
        </v-radio-group>

        <h3>If it's for yourself, please answer the questions below</h3>
        <br />

        <h4>2. How would you like to identify yourself</h4>
        <v-radio-group v-model="questionnaireRequest.IdentifyYourSelf">
          <v-radio
            v-for="identify in IdentifyYourself"
            :key="identify"
            :label="identify"
            :value="identify"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          >
          </v-radio>
        </v-radio-group>

        <h4>3. What brought you to visit us?</h4>
        <v-radio-group v-model="questionnaireRequest.VisitUs">
          <v-radio
            v-for="visit in VisitUs"
            :key="visit"
            :label="visit"
            :value="visit"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4>
          4. What do you expect from your interactions with the therapist?
        </h4>
        <v-radio-group v-model="questionnaireRequest.ExpectFromTherapist">
          <v-radio
            v-for="expect in ExpectFromTherapist"
            :key="expect"
            :label="expect"
            :value="expect"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4>
          5. On a scale of 1 to 10, rate the following (1 being the least or
          worst and 10 being the most or best)
        </h4>

        <v-row class="mt-2">
          <v-col cols="6" md="4">
            <span>Eating Habits</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.EatingHabits"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>Your understanding of your physical health</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.PhysicalHealth"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template></v-slider
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>Your daily eating habits</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.DailyEatingHabits"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>The current state of mind</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.MindSet"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>Urge to Live</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.UrgeToLive"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>Social Interactions</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.SocialInteractions"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>Dependency on Addictions, if any</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.Addictions"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>Fear of the unknown</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.FearOfUnknown"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="4">
            <span>The physical feeling of pain or illness</span>
          </v-col>
          <v-col>
            <v-slider
              max="10"
              min="1"
              step="1"
              thumb-label
              dense
              class="px-12 mx-12"
              v-model="questionnaireRequest.PhysicalFeeling"
            >
              <template v-slot:prepend>
                <span class="mr-1 mt-1">1</span>
              </template>
              <template v-slot:append>
                <span class="mt-1">10</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>

        <h4 class="my-2">
          6. Are you already on any medication? If Yes, please mention the name.
        </h4>
        <v-row>
          <v-col cols="6" md="6">
            <v-text-field
              placeholder="Medication Name"
              v-model="questionnaireRequest.MedicationName"
              color="primary"
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <h4>7. What is your preferred mode of communication</h4>
        <v-radio-group
          v-model="questionnaireRequest.PreferredModeOfCommunication"
        >
          <v-radio
            v-for="preferred in PreferredModeOfCommunication"
            :key="preferred"
            :label="preferred"
            :value="preferred"
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
        <v-radio-group v-model="questionnaireRequest.GetInTouch">
          <v-radio
            v-for="touch in GetInTouch"
            :key="touch"
            :label="touch"
            :value="touch"
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
          ></v-radio>
        </v-radio-group>

        <h4 class="mb-2">
          The details about the preferred mode of communication to collect the
          data (like Mobile No./Whatsapp number/ e-mail ID etc.)
        </h4>
        <v-row>
          <v-col cols="6" md="6">
            <v-text-field
              placeholder="Mode of Communication"
              v-model="
                questionnaireRequest.PreferredModeOfCommunicationToCollectData
              "
              color="primary"
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex align-center justify-end">
          <v-btn text class="text-capitalize mr-3" @click="skipQuestionnaire"
            >Skip</v-btn
          >
          <v-btn depressed class="primary text-capitalize" @click="updateForm"
            >Done</v-btn
          >
        </div>
      </v-container>
    </v-col>

    <snack-bar
      v-if="snackbar"
      :snackbarText="snackbarText"
      :snackBarStatus="snackBarStatus"
      @close="OnSnackBarClose"
    />
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

import { ClientRegistrationModel, QuestionnaireModel } from "@/model";
import { IRegistrationService } from "@/service";

import BaseComponent from "@/components/base/BaseComponent";
import SnackBar from "@/components/layout/SnackBar.vue";

const alphaOnly = helpers.regex("alphaOnly", /^[a-zA-Z]*$/i);

@Component({
  components: {
    SnackBar,
  },
  validations: {
    request: {
      FirstName: { required, alphaOnly },
      LastName: { required, alphaOnly },
      Username: { required },
      Email: { required, email },
      Password: {
        required,
        minLength: minLength(8),
        upperCaseLetter: (value: any) => {
          let validation = false;
          if (value && value != "") validation = /^(?=.*?[A-Z])/.test(value);
          return validation;
        },
        lowerCaseLetter: (value: any) => {
          let validation = false;
          if (value && value != "") validation = /^(?=.*?[a-z])/.test(value);
          return validation;
        },
        number: (value: any) => {
          let validation = false;
          if (value && value != "") validation = /[0-9]/.test(value);
          return validation;
        },
        special: (value: any) => {
          let validation = false;
          if (value && value != "")
            validation = /[!@#$%^&*()_+={};':"\\|,.<>]/.test(value);
          return validation;
        },
      },
      ConfirmPassword: { required, sameAsPassword: sameAs("Password") },
      PhoneNumber: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
    },
  },
})
export default class ClientRegistration extends BaseComponent {
  @Inject("registerService") registerService: IRegistrationService;

  public request: ClientRegistrationModel = new ClientRegistrationModel();
  public questionnaireRequest: QuestionnaireModel = new QuestionnaireModel();

  public showPassword: boolean = false;
  public showConfirmpassword: boolean = false;

  public snackbar: boolean = false;
  public snackbarText: string = "";
  public snackBarStatus: string = "";

  private UserId: any;
  public showQuestionaire: boolean = false;
  public radios: number = 1;

  public IdentifyYourself: any = ["Man", "Woman", "Others"];

  public VisitUs: any = [
    "Constant feeling low",
    "I've been through a trauma",
    "Lack of self-confidence",
    "Diagnosed with anxiety and stress",
    "Diagnosed with clinical depression",
    "Not sure, I'm Not OK, and I know that I need help",
  ];

  public ExpectFromTherapist: any = [
    "Just good listening",
    "Help build my confidence",
    "Show me a better way to live",
    "Give me a solution to my problem",
    "Help me cope with my problem",
    "Others",
  ];

  public PreferredModeOfCommunication: any = [
    "Skype or videoconferencing",
    "Telephonic conversation",
    "Personal meetings",
    "Through emails",
    "Whatsapp",
  ];

  public GetInTouch: any = [
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
          this.UserId = response;
          this.loadingSpinner("hide");
          this.showQuestionaire = true;
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

  public skipQuestionnaire() {
    this.snackbarText = "Registered Successfully";
    this.snackbar = true;
    this.snackBarStatus = "Success";
  }

  public updateForm() {
    this.registerService
      .saveQuestionnaire(this.questionnaireRequest, this.UserId)
      .then(
        (response: Array<QuestionnaireModel>) => {

          this.snackbarText = "Registered Successfully";
          this.snackbar = true;
          this.snackBarStatus = "Success";

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

  get counselingProgram() {
    return this.$store.getters.counselingProgram;
  }

  public OnSnackBarClose() {
    this.snackbar = false;
    this.$router.push("login");
  }
}
</script>

<style scoped>
span {
  opacity: 0.8;
}
</style>
