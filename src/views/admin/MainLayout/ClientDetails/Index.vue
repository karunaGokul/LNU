<template>
  <div class="primary-linear px-5 pt-10">
    <h1 class="mb-5">All Clients</h1>
    <div>
      <v-card
        v-for="(item, index) in pages"
        :key="index"
        elevation="0"
        rounded="0"
        outlined
      >
        <v-row dense>
          <v-col cols="2">
            <div class="d-flex align-center pa-4">
              <v-avatar
                rounded="0"
                size="35"
                :color="!item.ProfileImage ? avatarColors() : ''"
                style="border-radius: 8px !important"
              >
                <img
                  :src="`data:image/png;base64,${item.ProfileImage}`"
                  alt="John"
                  v-if="item.ProfileImage"
                />
                <span class="white--text" v-else>{{
                  item.Username.charAt(0).toUpperCase()
                }}</span>
              </v-avatar>
              <div>
                <p class="ma-0 ml-2 font-weight-bold">{{ item.Username }}</p>
                <p class="ma-0 ml-2 text-subtitle-2">{{ item.PhoneNumber }}</p>
              </div>
            </div>
          </v-col>
          <v-col cols="3" class="d-flex align-center text-subtitle-2">
            {{ item.Email }}
          </v-col>
          <v-col cols="3" class="d-flex align-center text-subtitle-2">
            {{ item.CounselingTypeName }}
          </v-col>
          <v-col cols="3" class="d-flex align-center text-subtitle-2">
            {{ item.summary }}
          </v-col>
          <v-col cols="1" class="d-flex align-center text-subtitle-2">
            <v-icon @click="openClientinfo(item)" v-if="item.Questionnaire">open_in_new</v-icon>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <v-pagination
      class="pa-4"
      color="#7780D1"
      next-icon="chevron_right"
      prev-icon="chevron_left"
      v-model="page"
      :length="Math.ceil(response.length / perPage)"
      v-if="response.length > 0"
    ></v-pagination>

    <client-info
      :items="clientInfo"
      v-if="showClientInfo"
      @close="showClientInfo = false"
      @summaryUpdated="onUpdateSummary"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject } from "vue-property-decorator";

import BaseComponent from "@/components/base/BaseComponent";

import { GetClientsModel, UpdateSummaryRequestModel } from "@/model";
import { IAdminService } from "@/service";

import ClientInfo from "./components/ClientInfo.vue";

@Component({
  components: { ClientInfo },
})
export default class ClientDetails extends BaseComponent {
  @Inject("adminService") service: IAdminService;

  public response: Array<GetClientsModel> = [];

  public page: number = 1;
  public perPage: number = 5;
  public showClientInfo: boolean = false;
  public clientInfo: GetClientsModel = new GetClientsModel();

  created() {
    this.getClient();
  }

  private getClient() {
    this.loadingSpinner("show");
    this.service.getClient().then((response: Array<GetClientsModel>) => {
      this.response = response;
      this.loadingSpinner("hide");
    });
  }

  public openClientinfo(info: GetClientsModel) {
    this.clientInfo = new GetClientsModel();
    this.clientInfo = info;
    this.showClientInfo = true;
  }

  public onUpdateSummary() {
    this.showClientInfo = false;
    this.getClient();
  }

  public avatarColors() {
    let colorsList = [
      "#D17777",
      "#D1BE77",
      "#77D1C1",
      "#77A1D1",
      "#D177AD",
      "#7780D1",
    ];
    let randomColor = Math.floor(Math.random() * colorsList.length);

    return colorsList[randomColor];
  }

   get pages() {
    return this.response.slice(
      (this.page - 1) * this.perPage,
      this.page * this.perPage
    );
  }
}
</script>
