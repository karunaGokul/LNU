<template>
  <v-container class="primary-linear card-container pa-0" fluid>
    <nav>
      <div class="px-5 d-flex align-center nav">
        <h3>Life N you</h3>
      </div>
    </nav>
    <div class="d-flex justify-center mt-5">
      <div
        v-for="(dash, index) in progressBar"
        :key="'progress-bar--' + index"
        class="ms-5 progressBar"
        :class="dash === progressBarColor ? 'dash' : ''"
      ></div>
    </div>
    <div class="text-center mx-auto header">
      <h3 class="mb-4 text-h4">Help us match you to the right therapist</h3>
      <p class="text-h6 w-70">
        Please fill out this short questionnaire to provide some background
        information about you and the issues you'd like to deal with in therapy.
        It would help us match you with the most suitable therapist for you.
        Your answers will also give this therapist a good starting point in
        getting to know you.
      </p>
    </div>
    <div class="card">
      <v-card
        class="card__item pa-5"
        v-for="(item, index) in questions"
        :key="'questions-card--' + index"
        :style="{
          transform: ` translateX(${200 * (index - currentQuestion)}%) `,
        }"
      >
        <h3 class="px-5 mb-4">{{ item.title }}</h3>
        <div class="card__item--optionn" v-if="item.type === 'radio'">
          <v-btn-toggle class="d-flex flex-column" style="width: 100%">
            <div v-for="(option, index) in item.options" :key="'questions-options--' + index" class="mb-5 box">
              <v-btn
                @click="
                  item.selected = option;
                  next();
                "
                :value="option"
                block
                class="rounded-pill card__item--btn d-flex justify-start text-capitalize"
              >
                {{ option }}
              </v-btn>
            </div>
          </v-btn-toggle>
        </div>
        <div v-if="item.type === 'select'">
          <v-select
            v-if="item.label === 'HowOldAreYou'"
            v-model="item.selected"
            :items="age"
            filled
            label="Filled style"
          ></v-select>
          <v-select
            v-if="item.label !== 'HowOldAreYou'"
            v-model="item.selected"
            :items="item.options"
            filled
            label="Filled style"
          ></v-select>
        </div>
        <div
          v-if="item.type === 'checkbox'"
          class="card__item-checkbox--container"
        >
          <span v-for="(b, index) in item.options" :key="'questions-checkbox--' + index" class="d-flex ma-4">
            <div class="mr-5 input-box mt-1">
              <input
                type="checkbox"
                :id="b.value"
                :value="b.value"
                v-model="item.selected"
                class="card__item--checkbox"
              />
            </div>
            <label class="card__item--checkbox-label" :for="b.value">{{
              b.value
            }}</label>
          </span>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <v-btn class="primary mt-2 text-capitalize" @click="next">
              Skip
            </v-btn>
          </div>
          <div
            v-if="
              (item.id !== 1 && item.type === 'select') ||
              item.type === 'checkbox'
            "
          >
            <v-btn class="primary mt-2 text-capitalize" @click="next">
              Next
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";
import { IQuestionnaireService } from "@/service";

import {
  QuestionnaireResponseModel,
  QuestionnaireRequestModel,
} from "@/model";
@Component({})
export default class Question extends BaseComponent {
  @Inject("questionnaireService") questionnaireService: IQuestionnaireService;

  public questions: Array<QuestionnaireResponseModel> = [];

  public currentQuestion = 0;

  public progressBar: number = 0;
  public progressBarCount: number = 0;
  public progressBarColor: number = 0;

  created() {
    this.getQuestionnaire();
    if (this.$route.params.status == "Pending") {
      this.skippedQuestions();
    }
  }

  public getQuestionnaire() {
    this.loadingSpinner("show");
    this.questionnaireService
      .getQuestionnaire()
      .then((response: Array<QuestionnaireResponseModel>) => {
        // let half_length = Math.ceil(response.length / 4);
        // response = response.slice(0, half_length);

        this.loadingSpinner("hide");
        this.progressBar = Math.round(response.length / 4.5);
        this.questions = this.$vuehelper.clone(response);
      });
  }

  public skippedQuestions() {
    this.loadingSpinner("show");
    this.questionnaireService
      .skippedQuestions()
      .then((response: Array<any>) => {
        console.log(response);

        let result: any;
        for (let j in response) {
          let id = response[j];
          result = this.questions.find((element) => element.id == id);
          console.log(result);
        }
        this.questions.splice(0,40,result);
        this.loadingSpinner("hide");
      });
  }

  public updateQuestionnaire(request: QuestionnaireResponseModel) {
    this.questionnaireService
      .updateQuestionnaire(request, this.userId)
      .then((response: any) => {
        console.log(response);
        this.$router.push("/client/home/dashboard")
      });
  }

  public next() {
    if (this.currentQuestion === this.questions.length - 1) {
      let request: Array<QuestionnaireRequestModel> = [];
      for (let i in this.questions) {
        let obj = new QuestionnaireRequestModel();
        let item = this.questions[i];

        obj.id = item.id;
        obj.label = item.label;

        if (item.type == "checkbox") {
          obj.value = item.selected;
          obj.isSkipped = obj.value.length > 0 ? false : true;
          console.log(obj);
        } else {
          obj.value.push(item.selected);
          obj.isSkipped = obj.value ? false : true;
          console.log(obj);
        }

        request.push(obj);
      }
      this.updateQuestionnaire(request);
    } else {
      this.currentQuestion++;
      this.progressBarCount++;
      if (this.progressBarCount === 4) {
        this.progressBarColor = this.progressBarColor + 1;
        this.progressBarCount = 0;
      }
    }
  }

  public changeQuestion(item: QuestionnaireResponseModel, value: string) {
    console.log({ item });
    console.log({ value });

    /*let questions = new QuestionRequestModel();

    questions.id = item.id;
    questions.label = item.label;

    if (item.type == "radio") {
      questions.value = value;
    } else {
      questions.value = item.selected;
    }

    if (item.type == "checkbox") {
      if (questions.value.length != 0) {
        questions.isSkipped = false;
      } else {
        questions.isSkipped = true;
        questions.value = "";
      }
    } else {
      if (questions.value) {
        questions.isSkipped = false;
      } else {
        questions.isSkipped = true;
        questions.value = "";
      }
    }

    this.questionRequest.push(questions);

    if (this.currentQuestion === this.question.length - 1) {
      this.updateQuestionnaire(this.questionRequest, item);
      this.$router.push("dashboard");
    } else {
      this.currentQuestion++;
      this.dashCount++;
      if (this.dashCount === 4) {
        this.dashBarColor = this.dashBarColor + 1;
        this.dashCount = 0;
      }
    }*/
  }

  get age() {
    let a = [];
    for (let i = 13; i <= 99; i++) {
      a.push(i);
    }
    return a;
  }

  get userId() {
    return this.$store.getters.id;
  }
}
</script>
