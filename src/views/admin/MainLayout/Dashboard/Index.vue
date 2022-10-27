<template>
  <div class="primary-linear">
    <v-container fluid class="pa-16">
      <div class="d-flex justify-end">
        <v-btn
          class="text-capitalize"
          color="primary"
          @click="edit('addCounselling')"
          >add program</v-btn
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
                @click="edit(data.Id)"
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
      <edit-counselling
        v-if="dialog"
        @save="OnClose"
        @addCounselling="OnClose"
        :counsellingProgramData="counsellingProgramData"
        :addCounselling="addCounselling"
        @close="OnClose"
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
import AppAlert from "@/components/layout/AppAlert.vue";
import { Component, Vue, Inject } from "vue-property-decorator";
import EditCounselling from "./components/EditCounselling.vue";
import { AdminCounselingTypeModel } from "@/model";
import { IDashboardService } from "@/service";
import BaseComponent from "@/components/base/BaseComponent";
import store from "@/store";
@Component({
  components: {
    EditCounselling,
    AppAlert,
  },
})
export default class AdminDashboardLayout extends BaseComponent {
  @Inject("dashboardService") dashboardService: IDashboardService;
  public request: AdminCounselingTypeModel = new AdminCounselingTypeModel();
  public response: Array<AdminCounselingTypeModel> = [];
  public dialog = false;
  public deleteDialog = false;
  public img: string = "";
  public counsellingProgramData: any;
  public addCounselling = false;

  created() {
    this.counsellingType();
  }

  public handleimage(e: File) {
    this.img = URL.createObjectURL(e);
  }
  public OnClose() {
    this.dialog = false;
    this.addCounselling = false;

    // this.counsellingType();
    // store.dispatch("removeCounselingProgram");
    // store.dispatch("counselingProgram");
  }
  public OnDelete() {
    this.deleteDialog = false;
  }
  public edit(id: string) {
    this.counsellingProgramData = this.response.filter((counsellingType) => {
      return counsellingType.Id === id;
    })[0];

    this.dialog = true;
    if (id === "addCounselling") this.addCounselling = true;
  }
  public deleteCounselling(id: string) {
    this.counsellingProgramData = id;
    this.deleteDialog = true;
  }

  public counsellingType() {
    this.loadingSpinner("show");
    this.dashboardService
      .getCounsellingType()
      .then((res) => {
        this.response = res;
        this.loadingSpinner("hide");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
