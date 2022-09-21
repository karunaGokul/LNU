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

                  <v-radio-group class="ms-3">
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      v-for="n in questionOneData"
                      :key="n"
                      :label="n"
                      :value="n"
                      @change="questionOne(n)"
                    ></v-radio>
                  </v-radio-group>
                  <v-col class="pa-0 ms-3" md="8">
                    <v-text-field
                      name="first-question"
                      class="pa-0 ma-0"
                      v-if="questionOneActive"
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
                  <div>
                    <v-radio-group class="ms-3">
                      <v-radio
                        off-icon="radio_button_unchecked"
                        on-icon="radio_button_checked"
                        v-for="n in questionTwoData"
                        :key="n"
                        :label="n"
                        :value="n"
                        @change="questionTwo(n)"
                      ></v-radio>
                    </v-radio-group>
                    <v-col class="ma-0 pa-0" md="8" v-if="questionTwoActive">
                      <v-text-field class="pa-0" label="Age"></v-text-field>
                      <v-text-field
                        class="pa-0 mt-2"
                        label="Relationship Status"
                      ></v-text-field>
                    </v-col>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-5">
                <v-list-item-content>
                  <v-list-item-title
                    >3. What brought you to visit us?</v-list-item-title
                  >
                  <v-radio-group class="ms-3">
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      v-for="n in questionThreeData"
                      :key="n"
                      :label="n"
                      :value="n"
                      @change="questionThree(n)"
                    ></v-radio>
                  </v-radio-group>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-5">
                <v-list-item-content>
                  <v-list-item-title
                    >4. What do you expect from your interactions with the
                    <p class="ms-5 mt-1">therapist?</p>
                  </v-list-item-title>
                  <v-radio-group class="ms-3">
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      v-for="n in questionFourData"
                      :key="n"
                      :label="n"
                      :value="n"
                      @change="questionFour(n)"
                    ></v-radio>
                  </v-radio-group>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-5">
                <v-list-item-content>
                  <v-list-item-title
                    >5. On a scale of 1 to 10, rate the following (1 being the
                    least or
                    <p class="ms-5 mt-1">
                      worst and 10 being the most or best)
                    </p></v-list-item-title
                  >
                  <div class="d-flex">
                    <v-col md="8" class="pa-0 ma-0">
                      <v-radio-group class="ms-3">
                        <v-radio
                          class="pb-5"
                          off-icon="radio_button_unchecked"
                          on-icon="radio_button_checked"
                          v-for="n in questionFiveData"
                          :key="n"
                          :label="n"
                          :value="n"
                          @change="questionFive(n)"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                    <div style="width: 100%; padding-right: 18px">
                      <v-slider
                        class="mt-2"
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        class="ma-0 pa-0"
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                      <v-slider
                        v-model="value"
                        thumb-label
                        min="0"
                        max="10"
                      ></v-slider>
                    </div>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-5">
                <v-list-item-content>
                  <v-list-item-title
                    >6. Are you already on any medication? If Yes, please
                    mention
                    <p class="ms-5 mt-1">the name.</p>
                  </v-list-item-title>
                  <v-col class="pa-0 ms-3" md="8">
                    <v-text-field
                      class="ma-0 pa-0"
                      name="first-question"
                      label="Name of the medication"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-5">
                <v-list-item-content>
                  <v-list-item-title
                    >7. What is your preferred mode of
                    communication</v-list-item-title
                  >
                  <v-radio-group class="ms-3">
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      v-for="n in questionSevenData"
                      :key="n"
                      :label="n"
                      :value="n"
                      @change="questionSeven(n)"
                    ></v-radio>
                  </v-radio-group>
                </v-list-item-content>
              </v-list-item>
              <p class="mt-5">
                Help us know you better so we can design your personalized
                questionnaire to offer perfect solutions.
              </p>
              <v-list-item class="mt-2">
                <v-list-item-content>
                  <v-list-item-title
                    >1. How should we get in touch with the person requiring
                    <p class="ms-5 mt-1">counseling</p></v-list-item-title
                  >
                  <v-radio-group class="ms-3">
                    <v-radio
                      off-icon="radio_button_unchecked"
                      on-icon="radio_button_checked"
                      v-for="n in questionEightData"
                      :key="n"
                      :label="n"
                      :value="n"
                      @change="questionEight(n)"
                    ></v-radio>
                  </v-radio-group>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mt-2">
                <v-list-item-content>
                  <v-list-item-title
                    >2. The details about the preferred mode of communication to
                    <p class="ms-5 mt-1">
                      collect the data (like Mobile No./Whatsapp number/ e-mail
                    </p>
                    <p class="ms-5 pp" style="margin-top: -10px">
                      ID etc.)
                    </p></v-list-item-title
                  ><v-col class="pa-0 ms-3" md="8">
                    <v-text-field
                      class="ma-0 pa-0"
                      name="first-question"
                      label="preferred communication"
                    ></v-text-field>
                  </v-col>
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
  public questionOneActive = false;
  public questionTwoActive = false;
  public questionOneData: Array<string> = [
    "Yourself",

    "You and Your Spouse",
    "Someone Else- Relationship with you",
  ];
  public questionTwoData: Array<string> = ["Man", "Woman", "Others"];
  public questionThreeData: Array<string> = [
    "Constant feeling low",
    `I've been through a trauma`,
    "Lack of self-confidence",
    "Diagnosed with anxiety and stress",
    "Diagnosed with clinical depression",
    `Not sure, I'm Not OK, and I know that I need help`,
  ];
  public questionFourData: Array<string> = [
    "Just good listening",
    "Help build my confidence",
    "Show me a better way to live",
    "Give me a solution to my problem",
    "Help me cope with my problem",
    "Others",
  ];
  public questionFiveData: Array<string> = [
    "Eating Habits",
    "your physical health score",
    "Your daily eating habits",
    "The current state of mind",
    "Urge to Live",
    "Social Interactions",
    "Dependency on Addictions",
    "Fear of the unknown",
    "The physical feeling of pain or illness",
  ];
  public questionSevenData: Array<string> = [
    "Skype or videoconferencing",
    "Telephonic conversation",
    "Personal meetings",
    "Through emails",
    "Whatsapp",
  ];
  public questionEightData: Array<string> = [
    "Email",
    "Video conferencing",
    "Whatsapp",
    "Phone call",
  ];
  questionOne(n: any) {
    console.log(n);
    if (n === "Someone Else- Relationship with you") {
      this.questionOneActive = true;
    } else {
      this.questionOneActive = false;
    }
  }
  questionTwo(n: any) {
    console.log(n);
    if (n === "Others") {
      this.questionTwoActive = true;
    } else {
      this.questionTwoActive = false;
    }
  }
  questionThree(n: any) {}
  questionFour(n: any) {}
  questionFive(n: any) {}

  questionSeven(n: any) {}
  questionEight(n: any) {}
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
