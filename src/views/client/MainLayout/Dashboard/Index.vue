<template>
  <v-container>
    <v-system-bar height="40" v-if="questionStatus" class="mx-10 systemBar">
      <v-icon class="primary--text">priority_high</v-icon>
      <!-- <span v-if="questionStatus == 'Pending'" class="primary--text">
        Few questions are incomplete in Questionnaire. Would you like to
        complete it now?
      </span>
      <span v-if="questionStatus == 'Completed'">
        We are Happy to help you as per your need.
      </span>
      <span v-if="questionStatus == 'UnStarted'" class="primary--text">
        Questionnaire is not yet started. Would you like to do it now?
      </span> -->

      <span class="primary--text">
        {{ questionStatus }}
      </span>

      <v-spacer></v-spacer>
      <router-link to="questionnaire" class="text-decoration-none">
        <v-btn
          text
          class="text-capitalize blue--text"
        >
          click here
        </v-btn>
      </router-link>
    </v-system-bar>

    <v-container fluid class="pa-16">
      <div>
        <h1 class="text-h4 font-weight-bold">Welcome Back {{ userName }}!</h1>
        <v-row class="my-5">
          <v-col
            cols="4"
            md="4"
            sm="12"
            v-for="data in response"
            :key="data.Id"
          >
            <v-card class="mx-auto d-flex flex-column" height="100%">
              <v-img height="200px" :src="$vuehelper.getImageUrl(data.Image)">
              </v-img>
              <v-card-title class="text-subtitle-1 font-weight-bold">{{
                data.Name
              }}</v-card-title>
              <v-card-text class="text--primary">
                {{ data.description }}
                {{ data.Summary }}
              </v-card-text>
              <v-card-actions class="justify-end mt-auto">
                <v-btn
                  color="primary"
                  class="text-capitalize"
                  text
                  @click="navigateBookAppointment('Behavioural Counseling')"
                >
                  Book Appointment
                </v-btn>
                <router-link
                  class="text-decoration-none"
                  :to="{
                    name: 'Explore',
                    params: {
                      id: data.Id,
                    },
                  }"
                >
                  <v-btn text color="primary" class="text-capitalize">
                    Explore
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";

import { IDashboardService, IQuestionnaireService } from "@/service";

import { DashboardResponseModel, QuestionnaireStatusModel } from "@/model";

@Component
export default class DashboardLayout extends BaseComponent {
  @Inject("dashboardService") dashboardService: IDashboardService;
  @Inject("questionnaireService") questionnaireService: IQuestionnaireService;

  public response: Array<DashboardResponseModel> = [];
  public questionStatus: string = "";

  public dialog: boolean = false;

  created() {
    this.questionnaireStatus();
    this.dialog = true;
    this.getCounsellingProgram();
  }

  public questionnaireStatus() {
    this.questionnaireService.isQuestionsPresent().then((response: any) => {
      console.log(response);
      this.questionStatus = response
        ? "Few questions are incomplete in Questionnaire. Would you like to complete it now?"
        : "We are Happy to help you as per your need.";
    });
  }

  public getCounsellingProgram() {
    this.loadingSpinner("show");
    this.dashboardService.getCounsellingProgram().then((response) => {
      this.response = response;
      this.loadingSpinner("hide");
    });
  }
  public navigateBookAppointment(appointment: string) {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
      query: { appointment: appointment },
    });
  }

  get userName() {
    return this.$store.getters.username;
  }
}
</script>

<style scoped>
.systemBar {
  background-color: #ffffff !important;
  border-left: 5px solid orange !important;
}
</style>
