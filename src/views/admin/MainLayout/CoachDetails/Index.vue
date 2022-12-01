<template>
  <div class="primary-linear">
    <h1 class="mx-7 pt-10 mb-2">Coach Details</h1>
    <v-data-table
      :headers="headers"
      :items="response"
      :items-per-page="10"
      class="mx-8"
      :footer-props="{
        prevIcon: 'chevron_left',
        nextIcon: 'chevron_right',
      }"
    >
      <template v-slot:[`item.ProfileImage`]="{ item }">
        <div>
          <div v-if="item.ProfileImage" class="d-flex align-center">
            <v-avatar size="35">
              <img
                :src="`data:image/png;base64,${item.ProfileImage}`"
                alt="John"
              />
            </v-avatar>
            <p class="ma-0 ml-2">{{ item.Name }}</p>
          </div>
          <div v-if="(!item.ProfileImage) && (item.Name)" class="d-flex align-center">
            <v-avatar color="primary" size="35">
              <span class="white--text">
                {{ item.Name.charAt(0).toUpperCase() }}</span>
            </v-avatar>
            <p class="ma-0 ml-2">{{ item.Name }}</p>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";
import { GetCoachesModel } from "@/model";
import { IAdminService } from "@/service";

@Component
export default class CoachDetails extends BaseComponent {
  @Inject("adminService") service: IAdminService;
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
    // {
    //   text: "About",
    //   sortable: false,
    //   value: "About",
    // },
    {
      text: "Experience",
      sortable: false,
      value: "Experience",
    },
    {
      text: "Counseling Program",
      sortable: false,
      value: "CounselingType",
    },
    {
      text: "Certificate",
      sortable: false,
      value: "Certificate",
    },
  ];

  private getCoaches() {
    this.loadingSpinner("show");
    this.service.getCoaches().then((response: Array<GetCoachesModel>) => {
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
</style>
