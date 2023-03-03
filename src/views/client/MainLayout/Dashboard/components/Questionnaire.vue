<template>
  <v-container class="primary-linear card-container pa-0" fluid>
    <nav>
      <div class="px-5 d-flex align-center nav">
        <h3>Life N you</h3>
      </div>
    </nav>
    <div class="d-flex justify-center mt-5">
      <div
        v-for="(count, index) in progressBar"
        :key="'progress-bar--' + index"
        class="ms-5 progress-bar"
        :class="{
          primary: count === progressBarColor,
        }"
      ></div>
    </div>
    <div class="text-center mx-auto header">
      <h3 class="mb-4 text-h4 font-weight-bold">
        Help us match you to the right therapist
      </h3>
      <p class="text-h6 w-70 text-muted">
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
        <h3 class="mb-4">{{ item.title }}</h3>
        <div class="card__item--optionn" v-if="item.type === 'radio'">
          <v-btn-toggle class="d-flex flex-column" style="width: 100%">
            <div
              v-for="(option, index) in item.options"
              :key="'questions-options--' + index"
              class="mb-5 box"
            >
              <v-btn
                outlined
                @click="
                  item.selected = option;
                  next();
                "
                :value="option"
                block
                color="#fcb258"
                class="rounded-pill d-flex justify-start text-capitalize"
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
          <span
            v-for="(b, index) in item.options"
            :key="'questions-checkbox--' + index"
            class="d-flex ma-4"
          >
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
            <v-btn depressed class="primary mt-2 text-capitalize" @click="next">
              Skip
            </v-btn>
          </div>
          <div
            v-if="
              (item.id !== 1 && item.type === 'select') ||
              item.type === 'checkbox'
            "
          >
            <v-btn depressed class="primary mt-2 text-capitalize" @click="next">
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
import { QuestionnaireResponseModel, QuestionnaireRequestModel } from "@/model";

@Component({})
export default class Question extends BaseComponent {
  @Inject("questionnaireService") questionnaireService: IQuestionnaireService;

  public questions: Array<QuestionnaireResponseModel> = [];
  public savedQuestions: Array<QuestionnaireResponseModel> = [];
  public currentQuestion = 0;
  public progressBar: number = 0;
  public progressBarCount: number = 0;
  public progressBarColor: number = 0;

  created() {
    if (this.$route.params.status == "Pending") this.skippedQuestions();
    else this.getQuestionnaire();
  }

  public skippedQuestions() {
    this.loadingSpinner("show");
    this.questionnaireService
      .skippedQuestions()
      .then((skippedQues: Array<number>) => {
        this.loadingSpinner("hide");
        this.getQuestionnaire(skippedQues);
      });
  }

  public getQuestionnaire(skippedQues?: Array<number>) {
    this.loadingSpinner("show");
    this.questionnaireService
      .getQuestionnaire()
      .then((response: Array<QuestionnaireResponseModel>) => {
        this.loadingSpinner("hide");
        this.progressBar = Math.round(response.length / 4.5);

        this.bindQuestions(response, skippedQues);
      });
  }

  private bindQuestions(
    response: Array<QuestionnaireResponseModel>,
    skippedQues?: Array<number>
  ) {
    if (skippedQues) {
      let question: Array<QuestionnaireResponseModel> = [];
      for (let item in skippedQues) {
        let id = skippedQues[item];
        question = response.find((element) => element.id == id);
        this.questions.push(question);
      }
    } else this.questions = response;
  }

  public updateQuestionnaire(request: Array<QuestionnaireRequestModel>) {
    this.questionnaireService
      .updateQuestionnaire(request, this.userId)
      .then((response: any) => {
        this.$router.push("/client/home/dashboard");
      });
  }

  public next() {
    if (this.currentQuestion === this.questions.length - 1) {
      let request: Array<QuestionnaireRequestModel> = [];
      for (let question in this.questions) {
        let obj = new QuestionnaireRequestModel();
        let item = this.questions[question];

        obj.id = item.id;
        obj.label = item.label;
        if (item.type == "checkbox") {
          obj.isSkipped = item.selected.length > 0 ? true : false;
          if (obj.isSkipped) obj.value = item.selected;
        } else {
          obj.isSkipped = item.selected ? true : false;
          if (obj.isSkipped) obj.value.push(item.selected);
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

  get age() {
    let a: Array<number> = [];
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
