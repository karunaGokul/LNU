<template>
  <div class="primary-linear">
    <v-container fluid class="pa-16">
      <div class="d-flex justify-end">
        <v-btn
          class="text-capitalize"
          color="primary"
          @click="addCounselingProgram"
          >Add Program</v-btn
        >
      </div>

      <v-row class="my-5">
        <v-col cols="4" md="4" sm="12" v-for="data in response" :key="data.Id">
          <v-card class="mx-auto">
            <v-img height="200px" :src="`data:image/png;base64,${data.Image}`">
            </v-img>
            <v-card-title>{{ data.Name }}</v-card-title>
            <v-card-text class="text--primary">
              {{ data.Description }} <br />
              {{ data.Summary }}
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click="updateCounselingProgram(data)"
              >
                <v-icon dark>edit</v-icon>
              </v-btn>

              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click="deleteCounselling(data.Id)"
              >
                <v-icon dark>delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <add-counseling-program
        v-if="showAddProgramModel"
        :response="seletedCounselingProgram"
        :modelType="modelType"
        @counselingProgamAdded="onUpdateProgam"
        @close="onClose"
      />

      <app-alert
        v-if="deleteDialog"
        user="Admin"
        @cancelAppointment="OnDelete"
        :counsellingProgramData="counsellingProgramData"
        @close="OnDelete"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";
import store from "@/store";

import AppAlert from "@/components/layout/AppAlert.vue";
import AddCounselingProgram from "./components/AddCounselingProgram.vue";
import { DashboardResponseModel } from "@/model";
import { IDashboardService } from "@/service";


@Component({
  components: {
    AddCounselingProgram,
    AppAlert,
  },
})
export default class AdminDashboardLayout extends BaseComponent {
  @Inject("dashboardService") dashboardService: IDashboardService;

  public response: Array<DashboardResponseModel> = [];
  public seletedCounselingProgram: DashboardResponseModel =
    new DashboardResponseModel();
  public showAddProgramModel = false;
  public modelType: string = "Add";

  public deleteDialog = false;
  public img: string = "";
  public counsellingProgramData: any;

  created() {
    this.getCounsellingProgram();
  }

  public getCounsellingProgram() {
    this.loadingSpinner("show");
    this.dashboardService
      .getCounsellingProgram()
      .then((res) => {
        this.response = res;
        this.loadingSpinner("hide");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public addCounselingProgram() {
    this.modelType = "Add";
    this.showAddProgramModel = true;
  }

  public updateCounselingProgram(
    seletedCounselingProgram: DashboardResponseModel
  ) {
    this.seletedCounselingProgram = seletedCounselingProgram;
    this.modelType = "Update";
    this.showAddProgramModel = true;
  }

  public onUpdateProgam() {
    this.seletedCounselingProgram = new DashboardResponseModel();
    this.showAddProgramModel = false;
    store.dispatch("removeCounselingProgram");
    store.dispatch("counselingProgram");
    this.getCounsellingProgram();
  }

  public onClose() {
    this.showAddProgramModel = false;
  }
  public OnDelete() {
    this.deleteDialog = false;
  }

  public deleteCounselling(id: string) {
    this.counsellingProgramData = id;
    this.deleteDialog = true;
  }
}
</script>
