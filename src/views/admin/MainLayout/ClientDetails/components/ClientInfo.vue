<template>
  <div class="modal d-block">
    <div class="modal-content">
      <v-card color="#fffff" elevation="0">
        <v-card-title>
          <span class="text-h6">
            <v-icon>dynamic_form</v-icon>
            Questionnaire & Answer's
          </span>
          <v-spacer></v-spacer>
          <v-btn icon @click="close">
            <v-icon dark> close </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-tabs v-model="tabs">
            <v-tab href="#tab-account-overview">Account Overview</v-tab>
            <v-tab href="#tab-communications">Communications</v-tab>
            <v-tab href="#tab-scale">Scale</v-tab>
            <v-tab href="#tab-summary">Summary</v-tab>
          </v-tabs>
        </v-card-text>
      </v-card>
      <v-card elevation="0" color="#E2E2E2">
        <v-card-text>
          <v-tabs-items v-model="tabs" class="client-info--container">
            <v-tab-item value="tab-account-overview">
              <h5 class="text-h6 mb-4 font-weight-bold">
                <v-icon>person_pin</v-icon>
                Account Overview
              </h5>
              <v-card>
                <div class="pa-2">
                  <span class="pa-2"><v-icon> account_circle </v-icon></span>
                  <span>{{ clientInfo.Username }}</span>
                </div>
                <div
                  class="pa-2"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty(
                      'identifyIdentifyYourSelfYourSelf'
                    )
                  "
                >
                  <span class="pa-2"><v-icon> boy </v-icon></span>
                  {{ clientInfo.Questionnaire.IdentifyYourSelf }}
                </div>
                <div class="pa-2">
                  <span class="pa-2"><v-icon> mail </v-icon></span>
                  {{ clientInfo.Email }}
                </div>
                <div class="pa-2">
                  <span class="pa-2"><v-icon>smartphone</v-icon></span>
                  {{ clientInfo.PhoneNumber }}
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item value="tab-communications">
              <h5 class="text-h6 mb-4 font-weight-bold">Communications</h5>
              <v-card>
                <div
                  class="d-flex align-center justify-space-between pa-4"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty('VisitUs')
                  "
                >
                  <h3>What brought you to visit us?</h3>
                  <div>{{ clientInfo.Questionnaire.VisitUs }}</div>
                </div>
                <div
                  class="d-flex align-center justify-space-between pa-4"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty(
                      'ExpectFromTherapist'
                    )
                  "
                >
                  <h3>
                    What do you expect from your interactions with the
                    therapist?
                  </h3>
                  <div>{{ clientInfo.Questionnaire.ExpectFromTherapist }}</div>
                </div>
                <div
                  class="d-flex align-center justify-space-between pa-4"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty('MedicationName')
                  "
                >
                  <h3>
                    Are you already on any medication? If Yes, please mention
                    the name.
                  </h3>
                  <div>{{ clientInfo.Questionnaire.MedicationName }}</div>
                </div>
                <div
                  class="d-flex align-center justify-space-between pa-4"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty(
                      'PreferredModeOfCommunication'
                    )
                  "
                >
                  <h3>What is your preferred mode of communication</h3>
                  <div>
                    {{ clientInfo.Questionnaire.PreferredModeOfCommunication }}
                  </div>
                </div>
                <div
                  class="d-flex align-center justify-space-between pa-4"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty('GetInTouch')
                  "
                >
                  <h3>
                    How should we get in touch with the person requiring
                    counseling
                  </h3>
                  <div>{{ clientInfo.Questionnaire.GetInTouch }}</div>
                </div>
                <div
                  class="d-flex align-center justify-space-between pa-4"
                  v-if="
                    clientInfo.Questionnaire &&
                    clientInfo.Questionnaire.hasOwnProperty(
                      'PreferredModeOfCommunicationToCollectData'
                    )
                  "
                >
                  <h3>
                    The details about the preferred mode of communication to
                    collect the data (like Mobile No./Whatsapp number/ e-mail ID
                    etc.)
                  </h3>
                  <div>
                    {{
                      clientInfo.Questionnaire
                        .PreferredModeOfCommunicationToCollectData
                    }}
                  </div>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item value="tab-scale">
              <h5 class="text-h6 mb-4 font-weight-bold">Scale</h5>

              <v-card>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Eating Habits</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.EatingHabits"
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
                <v-divider></v-divider>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">
                      Your understanding of your physical health
                    </h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.PhysicalHealth"
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
                <v-divider></v-divider>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Your daily eating habits</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.DailyEatingHabits"
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
                <v-divider></v-divider>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">The current state of mind</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.MindSet"
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
                <v-divider></v-divider>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Urge to Live</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.UrgeToLive"
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
                <v-divider></v-divider>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Social Interactions</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.EatingHabits"
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
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Social Interactions</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.SocialInteractions"
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
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Dependency on Addictions, if any</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.Addictions"
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
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">Fear of the unknown</h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.FearOfUnknown"
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
                <v-divider></v-divider>
                <v-row dence>
                  <v-col cols="8">
                    <h3 class="pa-3">
                      The physical feeling of pain or illness
                    </h3>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                      max="10"
                      min="1"
                      step="1"
                      thumb-label
                      dense
                      disabled
                      class="pt-1 pr-4"
                      v-model="clientInfo.Questionnaire.PhysicalFeeling"
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
                <v-divider></v-divider>
              </v-card>
            </v-tab-item>
            <v-tab-item value="tab-summary">
              <v-textarea
                filled
                name="input-7-4"
                label="Summary"
                v-model="clientInfo.summary"
              ></v-textarea>
              <div class="d-flex justify-end">
                <v-btn depressed color="primary" @click="updateSummary">
                  Save
                </v-btn>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Inject } from "vue-property-decorator";

import { GetClientsModel } from "@/model";
import { IAdminService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";

@Component
export default class ClientInfo extends BaseComponent {
  @Inject("adminService") service: IAdminService;
  @Prop() items: GetClientsModel;

  public clientInfo: GetClientsModel = new GetClientsModel();
  public tabs: string = "";

  created() {
    this.clientInfo = this.$vuehelper.clone(this.items);
  }

  public close() {
    this.$emit("close");
  }

  public updateSummary() {
    this.loadingSpinner("show");
    this.service
      .updateSummary(this.clientInfo.Id, this.clientInfo.summary)
      .then((response: any) => {
        this.loadingSpinner("hide");
        this.$emit("summaryUpdated");
      });
  }
}
</script>
