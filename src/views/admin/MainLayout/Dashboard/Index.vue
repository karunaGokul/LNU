<template>
  <div class="primary-linear">
    <v-container fluid class="pa-16">
      <div class="d-flex justify-end">
        <v-btn
          class="text-capitalize"
          color="primary"
          depressed
          @click="addCounselingProgram"
        >
          <v-icon class="pr-2">add_box</v-icon>
          Add Program</v-btn
        >
      </div>

      <v-row class="my-5">
        <v-col
          cols="4"
          md="4"
          sm="12"
          v-for="(item, index) in response"
          :key="index"
        >
          <v-card class="mx-auto d-flex flex-column" height="100%">
            <v-img height="200px" :src="`data:image/png;base64,${item.Image}`">
            </v-img>
            <v-card-title>{{ item.Name }}</v-card-title>
            <v-card-text class="text--primary">
              {{ item.Summary }}
            </v-card-text>
            <v-card-actions class="justify-end mt-auto">
              <v-btn
                class="mx-2"
                fab
                dark
                depressed
                small
                color="primary"
                @click="updateCounselingProgram(item)"
              >
                <v-icon dark>edit</v-icon>
              </v-btn>

              <v-btn
                class="mx-2"
                fab
                dark
                depressed
                small
                color="red"
                @click="confimProgram(item)"
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
        message="Are you sure you want to delete Counseling progam"
        @No="cancelDeleteProgram"
        @Yes="deleteProgram"
        v-if="showDeleteModel"
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

  public showDeleteModel = false;
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
    this.seletedCounselingProgram = new DashboardResponseModel();
    this.showAddProgramModel = false;
  }

  public confimProgram(seletedCounselingProgram: DashboardResponseModel) {
    this.seletedCounselingProgram = seletedCounselingProgram;
    this.showDeleteModel = true;
  }

  public cancelDeleteProgram() {
    this.seletedCounselingProgram = new DashboardResponseModel();
    this.showDeleteModel = false;
  }

  public deleteProgram() {
    this.dashboardService
      .deleteProgam(this.seletedCounselingProgram.Id)
      .then((response) => {
        this.cancelDeleteProgram();
        this.getCounsellingProgram();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
</script>
