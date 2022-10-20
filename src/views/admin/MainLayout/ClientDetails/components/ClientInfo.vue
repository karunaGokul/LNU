<template>
  <div class="modal d-block">
    <div class="modal-content">
      <div class="d-flex justify-space-between align-center">
        <h3 class="border">
          <v-icon>dynamic_form</v-icon>
          Questionnaire & Answer's
        </h3>
        <v-btn class="mx-2" icon @click="close">
          <v-icon dark> close </v-icon>
        </v-btn>
      </div>
      <v-tabs v-model="tabs">
        <v-tab href="#tab-account-overview">Account Overview</v-tab>
        <v-tab href="#tab-summary">Summary</v-tab>
        <v-tab href="#tab-communications">Communications</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item value="tab-account-overview"> 
          Account Overview
          <v-card>
            <div>{{item.Username}}</div>
            <div>{{item.Email}}</div>
            <div>{{item.PhoneNumber}}</div>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-summary"> Summary </v-tab-item>
        <v-tab-item value="tab-communications"> Communicatios </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GetClientsModel } from "@/model";

@Component
export default class ClientInfo extends Vue {
  @Prop() item: GetClientsModel;

  public tabs: string = "";

  public close() {
    this.$emit("close");
  }
}
</script>
