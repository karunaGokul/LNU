<template>
  <div class="primary-linear">
    <v-container fluid class="pa-16">
      <div class="d-flex justify-end">
        <v-btn class="text-capitalize" color="primary" @click="edit('add')"
          >add program</v-btn
        >
      </div>

      <v-row class="my-5">
        <v-col cols="4" md="4" sm="12" v-for="data in response" :key="data.Id">
          <v-card class="mx-auto">
            <v-img height="200px" :src="`data:image/png;base64,${data.image}`">
            </v-img>
            <v-card-title>{{ data.Name }}</v-card-title>
            <v-card-text class="text--primary">{{
              data.description
            }}</v-card-text>
            <v-card-actions class="justify-end">
              <v-btn icon color="primary" @click="edit(data.Id)">
                <v-icon>edit</v-icon>
              </v-btn>

              <v-btn icon color="primary" @click="deleteCounselling(data.Id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <edit-counselling
        v-if="dialog"
        @save="OnClose"
        @add="OnClose"
        :counsellingId="counsellingId"
        :add="add"
        @close="OnClose"
      />
      <app-alert
        v-if="deleteDialog"
        user="Admin"
        @cancelAppointment="OnDelete"
        :counsellingId="counsellingId"
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
@Component({
  components: {
    EditCounselling,
    AppAlert,
  },
})
export default class AdminDashboardLayout extends Vue {
  @Inject("dashboardService") dashboardService: IDashboardService;
  public request: AdminCounselingTypeModel = new AdminCounselingTypeModel();
  public response: Array<AdminCounselingTypeModel> = [];
  public dialog = false;
  public deleteDialog = false;
  public img: string = "";
  public counsellingId: string;
  public add = false;
  public handleimage(e: File) {
    this.img = URL.createObjectURL(e);
  }
  public OnClose() {
    this.dialog = false;
    this.add = false;
  }
  public OnDelete() {
    this.deleteDialog = false;
  }
  public edit(id: string) {
    this.counsellingId = id;
    this.dialog = true;
    if (id === "add") this.add = true;
  }
  public deleteCounselling(id: string) {
    this.counsellingId = id;
    this.deleteDialog = true;
  }

  created() {
    this.counsellingType();
  }

  public counsellingType() {
    this.dashboardService.getCounsellingType(this.request).then((res) => {
      console.log(this.response);
      this.response = res.data;
      console.log(this.response);
    });
  }
}
</script>
