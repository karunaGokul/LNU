<template>
  <div class="primary-linear px-8 pt-10">
    <h1 class="mb-5">Client Details</h1>
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
            <p class="ma-0 ml-2">{{ item.Username }}</p>
          </div>
          <div v-if="(!item.ProfileImage) && (item.Username)" class="d-flex align-center">
            <v-avatar color="primary" size="35">
              <span class="white--text">{{
                item.Username.charAt(0).toUpperCase()
              }}</span>
            </v-avatar>
            <p class="ma-0 ml-2">{{ item.Username }}</p>
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import BaseComponent from "@/components/base/BaseComponent";
import { GetClientsModel } from "@/model";
import { IAdminService } from "@/service";
@Component({
  components: {},
})
export default class ClientDetails extends BaseComponent {
  @Inject("adminService") service: IAdminService;
  public response: Array<GetClientsModel> = [];

  
  created() {
    this.getClient();
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
      text: "Counselling Program",
      sortable: false,
      value: "CounselingType",
    },
  ];
  private getClient() {
    this.loadingSpinner("show");
    this.service.getClient().then((response: Array<GetClientsModel>) => {
      this.response = response;
      this.loadingSpinner("hide");
    });
  }
}
</script>
