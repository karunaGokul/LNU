<template>
  <div class="primary-linear">
    <h1 class="text-xl-h1 mx-15 pt-10 mb-5" style="font-size: 30px">
      Coach Details
    </h1>
    <v-data-table
      :headers="headers"
      :items="response"
      :items-per-page="5"
      class="elevation-1 mx-8"
    >
      <template v-slot:[`item.ProfileImage`]="{ item }">
        <div>
          <v-avatar size="70" v-if="item.ProfileImage !== null">
            <img
              :src="`data:image/png;base64,${item.ProfileImage}`"
              alt="John"
            />
          </v-avatar>
          <div v-else class="box">
            <!-- <span>{{ item.Name[0].toUpperCase() }}</span> -->
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import BaseComponent from "@/components/base/BaseComponent";
import { GetCoachesModel } from "@/model";
import { AdminService, IAdminService } from "@/service";
import { Component, Vue, Inject } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CoachDetails extends BaseComponent {
  @Inject("adminService") adminService: IAdminService;
  public response: Array<GetCoachesModel> = [];

  created() {
    this.getCoaches();
  }

  public headers = [
    {
      text: "Username",
      sortable: false,
      value: "ProfileImage",
    },
    {
      text: "",
      sortable: false,
      value: "Name",
    },
    {
      text: "About",
      sortable: false,
      value: "About",
    },
    {
      text: "Experience",
      sortable: false,
      value: "Experience",
    },
    {
      text: "Counselling Type",
      sortable: false,
      value: "CounsellingType",
    },
    {
      text: "Certificate",
      sortable: false,
      value: "Certificate",
    },
    {
      text: "Email",
      sortable: false,
      value: "Email",
    },
    {
      text: "Phone",
      sortable: false,
      value: "PhoneNumber",
    },
  ];

  private getCoaches() {
    this.loadingSpinner("show");
    this.adminService.getCoaches().then((response: Array<GetCoachesModel>) => {
      this.response = response;
      this.loadingSpinner("hide");
    });
  }
}
</script>

<style>
.v-data-table .v-data-table-header tr th {
  font-size: 14px !important;
  color: #78b849 !important;
}
.box {
  width: 70px;
  height: 70px;
  background-color: #78b849;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
