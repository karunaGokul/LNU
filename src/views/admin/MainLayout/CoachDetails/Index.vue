<template>
  <div class="primary-linear">
    <h1 class="text-xl-h1 mx-15 pt-10 mb-5" style="font-size: 30px">
      Coach Details
    </h1>
    <v-data-table
      :headers="headers"
      :items="response"
      :items-per-page="5"
      class="mx-8"
      :footer-props="{
        prevIcon: 'chevron_left',
        nextIcon: 'chevron_right',
      }"
    >
      <template v-slot:[`item.ProfileImage`]="{ item }">
        <div>
          <div v-if="item.ProfileImage !== null" class="d-flex align-end">
            <v-avatar size="50">
              <img
                :src="`data:image/png;base64,${item.ProfileImage}`"
                alt="John"
              />
            </v-avatar>
            <p class="ml-2">{{ item.Name }}</p>
          </div>
          <div v-else class="d-flex align-end">
            <div class="box">
              <span>{{ item.Name[0].toUpperCase() }}</span>
            </div>
            <p class="ml-2">{{ item.Name }}</p>
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
      text: "Name",
      sortable: false,
      value: "ProfileImage",
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
      text: "Counselling Program",
      sortable: false,
      value: "CounsellingType",
    },
    {
      text: "Certificate",
      sortable: false,
      value: "Certificate",
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
}
.box {
  width: 50px;
  height: 50px;
  background-color: #78b849;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
