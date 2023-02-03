<template>
  <v-container class="primary-linear pa-0" fluid style="width: 100%">
    <nav>
      <div class="px-5 d-flex align-center nav">
        <h3>Life N you</h3>
      </div>
    </nav>
    <div class="d-flex justify-center mt-5">
      <div
        v-for="(dash, i) in dashBar"
        :key="i"
        class="ms-5"
        :class="dash === dashBarColor ? 'dash' : ''"
        style="
          width: 60px;
          height: 5px;
          margin-bottom: 20px;
          background-color: rgba(0, 0, 0, 0.2);
        "
      ></div>
    </div>
    <div class="text-center mx-auto" style="width: 70%">
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
        class="card-item pa-5"
        v-for="(item, index) in question[0].steps"
        :key="index"
        :style="{
          transform: ` translateX(${200 * (index - currentQuestion)}%) `,
        }"
      >
        <div>
          <h3 class="px-5">{{ item.title }}</h3>
          <div class="card-item-option" v-if="item.type === 'radio'">
            <v-btn-toggle
              v-model="questionRequest[item.label]"
              class="d-flex flex-column"
              style="width: 100%"
            >
              <div v-for="(b, i) in item.options" :key="i" class="mb-5 box">
                <v-btn
                  @click="changeQuestion(item)"
                  :value="b"
                  block
                  class="rounded-pill btn d-flex justify-start text-capitalize"
                >
                  {{ b }}
                </v-btn>
              </div>
            </v-btn-toggle>
          </div>

          <div v-if="item.type === 'select'">
            <v-select
              v-if="item.label === 'HowOldAreYou'"
              v-model="questionRequest.age"
              :items="age"
              filled
              label="Filled style"
            ></v-select>
            <v-select
              v-if="item.label !== 'HowOldAreYou'"
              v-model="questionRequest.age"
              :items="item.options"
              filled
              label="Filled style"
            ></v-select>
          </div>

          <div v-if="item.type === 'checkbox'">
            <span v-for="(b, i) in item.options" :key="i" class="d-flex ma-4">
              <div class="mr-5 input-box mt-1">
                <input
                  type="checkbox"
                  :id="b.value"
                  :value="b.value"
                  v-model="checkedNames"
                  class="checkbox"
                />
              </div>
              <label class="" :for="b.value">{{ b.value }}</label>
            </span>
            <span>Checked names: {{ checkedNames }}</span>
          </div>

          <div class="d-flex justify-space-between">
            <div>
              <v-btn
                class="primary mt-2 text-capitalize"
                @click="changeQuestion"
              >
                Skip
              </v-btn>
            </div>
            <div
              v-if="
                (item.id !== 1 && item.type === 'select') ||
                item.type === 'checkbox'
              "
            >
              <v-btn
                class="primary mt-2 text-capitalize"
                @click="changeQuestion(item)"
              >
                Next
              </v-btn>
            </div>
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

import { QuestionModel } from "@/model";

@Component({})
export default class Question extends BaseComponent {
  @Inject("questionnaireService") questionnaireService: IQuestionnaireService;
  public questionRequest: QuestionModel = new QuestionModel();
  public question: Array<any> = [];

  public currentQuestion = 0;

  public dashBar: number;
  public dashCount: number = 0;
  public dashBarColor: number = 0;

  public checkedNames: any = [];

  created() {
    this.question = this.questionnaireService.getQuestion();
    console.log(this.questionRequest);
    this.dashBar = Math.round(this.question[0].steps.length / 4);
  }

  public changeQuestion(item: any) {
    if (item.type === "checkbox") {
      const label = item.label;
      // this.questionRequest.label = item.selected;
    }
    console.log(this.questionRequest);
    if (this.currentQuestion === this.question[0].steps.length - 1) {
      return;
    } else {
      this.currentQuestion++;
      this.dashCount++;
      if (this.dashCount === 4) {
        this.dashBarColor = this.dashBarColor + 1;
        this.dashCount = 0;
        console.log(this.dashBarColor);
      }
    }
  }

  get age() {
    let a = [];
    for (let i = 13; i <= 99; i++) {
      a.push(i);
    }
    return a;
  }
}
</script>

<style scoped>
.nav {
  height: 52px;
  margin-bottom: 40px;
  box-shadow: -1px 0 20px rgb(37 38 37 / 5%), 0 1px 5px rgb(37 38 37 / 10%);
}
.card {
  width: 50%;
  margin: 10px auto;
  position: relative;
}
.dash {
  background-color: #fcb258 !important;
}
.card-item {
  width: 100%;
  margin-top: 1px;
  position: absolute;
  transition: all 0.34s;
}
.card-item-option {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.btn {
  background-color: #fcb25890 !important;
}

.checkbox[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1.5px solid #fcb258;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox[type="checkbox"]::after {
  font-family: "Material Icons";
  content: "done";
  font-size: 18px;
  display: none;
}

.checkbox[type="checkbox"]:checked {
  border: 1.5px solid transparent;
  background-color: #fcb25890;
}

.checkbox[type="checkbox"]:checked::after {
  display: block;
}

.input-box + label {
  cursor: pointer;
  user-select: none;
}
</style>
