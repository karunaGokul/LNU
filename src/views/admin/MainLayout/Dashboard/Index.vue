<template>
  <div class="primary-linear">
    <v-container fluid class="pa-16">
      <div class="d-flex justify-end">
        <v-btn class="text-capitalize" color="primary" @click="edit"
          >add program</v-btn
        >
      </div>

      <v-row class="my-5">
        <v-col cols="4" md="4" sm="12" v-for="data in response" :key="data.Id">
          <v-card class="mx-auto">
            <v-img height="200px" :src="data.Image"> </v-img>
            <v-card-title>{{ data.Title }}</v-card-title>
            <v-card-text class="text--primary">{{
              data.Discription
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
        :counsellingId="counsellingId"
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
import { IAdminService } from "@/service";
@Component({
  components: {
    EditCounselling,
    AppAlert,
  },
})
export default class AdminDashboardLayout extends Vue {
  @Inject("adminService") adminService: IAdminService;
  public request: AdminCounselingTypeModel = new AdminCounselingTypeModel();
  public response: Array<AdminCounselingTypeModel> = [];
  public dialog = false;
  public deleteDialog = false;
  public img: string = "";
  public counsellingId: string;
  public handleimage(e: File) {
    this.img = URL.createObjectURL(e);
  }
  public OnClose() {
    this.dialog = false;
  }
  public OnDelete() {
    this.deleteDialog = false;
  }
  public edit(id: string) {
    this.counsellingId = id;
    this.dialog = true;
  }
  public deleteCounselling(id: string) {
    this.counsellingId = id;
    this.deleteDialog = true;
  }

  created() {
    this.counsellingType();
  }

  public counsellingType() {
    this.adminService.getMockCounsellingType(this.request).then((res) => {
      this.response = res;
    });
  }
}
</script>
