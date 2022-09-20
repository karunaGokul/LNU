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
    <v-col lg="6" sm="12">
      <div
        class="pt-10 px-10 box"
        style="overflow-y: scroll; height: 100vh; overflow-x: hidden"
      >
        <h3 class="text-center">
          Welcome Onboard! Whatever your requirement from us, we hope to deliver
          the best. So let us do a few quick questions to get started.
        </h3>
        <form>
          <v-row>
            <v-col>
              <v-col md="9">
                <v-text-field label="Name"> </v-text-field>
                <v-text-field
                  label="Are you looking for help for yourself or someone else?"
                ></v-text-field>
              </v-col>
              <p>
                If for Yourself, Please fill in the following details, and one
                of our experts will email you a questionnaire to collect further
                information. You can also help fill in details of this
                questionnaire for another person if you think you can answer
                them on their behalf; else, go to the next set of questions.
              </p>
              <p>
                The link to the basic questionnaire is below (the first set of
                questions) If someone else, Please fill in the following basic
                details and share the contact details of the person who should
                be contacted to collect further details. Link to Basic
                questionnaire to talk to the person requiring counseling (the
                one below the first questionnaire)
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h4>BASIC DETAILS QUESTIONNAIRE</h4>
              <p class="mt-2">
                Help us know you better so we can design your personalized
                questionnaire to offer perfect solutions.
              </p>
              <v-col md="7" class="ma-0 pa-0">
                <v-text-field label="Your Email ID"> </v-text-field>
              </v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >1. Who is the person who needs help</v-list-item-title
                  >

                  <!-- <ol type="a" class="mt-5">
                    <li>
                      <input
                        class="mr-3"
                        name="first-question"
                        type="radio"
                        value="HTML"
                      />
                      <label for="html">HTML</label>
                    </li>
                    <li>
                      <v-col class="pa-0" md="5">
                        <v-text-field
                          name="first-question"
                          class="pa-0 ma-0"
                          label="Someone Else- Relationship with you"
                        ></v-text-field>
                      </v-col>
                    </li>
                    <li>
                      <input
                        class="mr-3"
                        type="radio"
                        name="first-question"
                        value="HTML"
                      />
                      <label for="html">You and Your Spouse</label>
                    </li>
                  </ol> -->
                  <v-radio-group class="ms-3">
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      label="yourself"
                      value="Yourself"
                      @change="radioValue('Yourself')"
                    ></v-radio>
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      label="You and Your Spouse"
                      value="You and Your Spouse"
                      @change="radioValue('You and Your Spouse')"
                    ></v-radio>
                  </v-radio-group>
                  <v-col class="pa-0 ms-3" md="8">
                    <v-text-field
                      name="first-question"
                      class="pa-0 ma-0"
                      label="Someone Else- Relationship with you"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <h4 class="mt-5 mb-3 subtitle-1">
                IF IT'S FOR YOURSELF, PLEASE ANSWER THE QUESTIONS BELO
              </h4>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >2. How would you like to identify
                    yourself</v-list-item-title
                  >
                  <ol type="a" class="mt-5">
                    <li>Man</li>
                    <li>Woman</li>
                    <li>
                      <v-col md="7" class="ma-0 pa-0">
                        Others
                        <v-text-field
                          class="pa-0 mt-3"
                          label="Age"
                        ></v-text-field>
                        <v-text-field
                          class="pa-0 mt-2"
                          label="Relationship Status"
                        ></v-text-field>
                      </v-col>
                    </li>
                    <li>You and Your Spouse</li>
                  </ol>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-5">
                <v-list-item-content>
                  <v-list-item-title
                    >3. What brought you to visit us?</v-list-item-title
                  >
                  <ol type="a" class="mt-5">
                    <li>Constant feeling low</li>

                    <li></li>
                  </ol>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </form>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppAlert extends Vue {
  radioValue(n: any) {
    console.log(n);
  }
}
</script>

<style scoped>
h3 {
  word-break: keep-all;
}
li {
  margin-bottom: 12px;
  list-style: none;
}
</style>

<!-- <v-card class="mx-15 px-15 pt-10">
    <h3 class="text-center">
      Welcome Onboard! Whatever your requirement from us, we hope to deliver the
      best.<br />
      So let us do a few quick questions to get started.
    </h3>
    <form>
      <v-row>
        <v-col>
          <v-col md="7">
            <v-text-field label="Name"> </v-text-field>
            <v-text-field
              label="Are you looking for help for yourself or someone else?"
            ></v-text-field>
          </v-col>
          <p>
            If for Yourself, Please fill in the following details, and one of
            our experts will email you a questionnaire to collect further
            information. You can also help fill in details of this questionnaire
            for another person if you think you can answer them on their behalf;
            else, go to the next set of questions.
          </p>
          <p>
            The link to the basic questionnaire is below (the first set of
            questions) If someone else, Please fill in the following basic
            details and share the contact details of the person who should be
            contacted to collect further details. Link to Basic questionnaire to
            talk to the person requiring counseling (the one below the first
            questionnaire)
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h4>BASIC DETAILS QUESTIONNAIRE</h4>
          <p class="mt-2">
            Help us know you better so we can design your personalized
            questionnaire to offer perfect solutions.
          </p>
          <v-col md="7" class="ma-0 pa-0">
            <v-text-field label="Your Email ID"> </v-text-field>
          </v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >1. Who is the person who needs help</v-list-item-title
              >

              <ol type="a" class="mt-5">
                <li>
                  <input
                    class="mr-3"
                    name="first-question"
                    type="radio"
                    value="HTML"
                  />
                  <label for="html">HTML</label>
                </li>
                <li>
                  <v-col class="pa-0" md="5">
                    <v-text-field
                      name="first-question"
                      class="pa-0 ma-0"
                      label="Someone Else- Relationship with you"
                    ></v-text-field>
                  </v-col>
                </li>
                <li>
                  <input
                    class="mr-3"
                    type="radio"
                    name="first-question"
                    value="HTML"
                  />
                  <label for="html">You and Your Spouse</label>
                </li>
              </ol>
            </v-list-item-content>
          </v-list-item>
          <h4 class="mt-5 mb-3 subtitle-1">
            IF IT'S FOR YOURSELF, PLEASE ANSWER THE QUESTIONS BELO
          </h4>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >2. How would you like to identify yourself</v-list-item-title
              >
              <ol type="a" class="mt-5">
                <li>Man</li>
                <li>Woman</li>
                <li>
                  <v-col md="7" class="ma-0 pa-0">
                    Others
                    <v-text-field class="pa-0 mt-3" label="Age"></v-text-field>
                    <v-text-field
                      class="pa-0 mt-2"
                      label="Relationship Status"
                    ></v-text-field>
                  </v-col>
                </li>
                <li>You and Your Spouse</li>
              </ol>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="mt-5">
            <v-list-item-content>
              <v-list-item-title
                >3. What brought you to visit us?</v-list-item-title
              >
              <ol type="a" class="mt-5">
                <li>Constant feeling low</li>

                <li></li>
              </ol>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </form>
  </v-card> -->
