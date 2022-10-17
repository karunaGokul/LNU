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
      expand-icon="keyboard_arrow_down"
      single-expand
      :expanded.sync="expanded"
      item-key="Id"
      show-expand
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <tr>
            <td class="pt-2">
              <h4>Myself {{ item.Username }}</h4>
            </td>
          </tr>

          <v-simple-table dense>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>What brought you to visit us?</td>
                <td><h5 class="blue--text">Constant Feeling Low</h5></td>
              </tr>

              <tr>
                <td>
                  What do you expect from your interactions with the
                  therapist?
                </td>
                <td><h5 class="blue--text">Just Good listening</h5></td>
              </tr>

              <tr>
                <td>Eating Habits:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>

              <tr>
                <td>Your understanding of your physical health:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>

              <tr>
                <td>Your daily eating habits:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>

              <tr>
                <td>The current state of mind:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>
              <tr>
                <td>Urge to Live:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>
              <tr>
                <td>Social Interactions:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>
              <tr>
                <td>Dependency on Addictions, if any:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>
              <tr>
                <td>Fear of the unknown:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>
              <tr>
                <td>The physical feeling of pain or illness:</td>
                <td><h5 class="blue--text">5</h5></td>
              </tr>
              <tr>
                <td>
                  Are you already on any medication? If Yes, please mention
                  the name.
                </td>
                <td><h5 class="blue--text">Antibiotic</h5></td>
              </tr>
              <tr>
                <td>What is your preferred mode of communication name.</td>
                <td><h5 class="blue--text">Whatsapp</h5></td>
              </tr>
              <tr>
                <td>
                  How should we get in touch with the person requiring
                  counseling name.
                </td>
                <td><h5 class="blue--text">Whatsapp</h5></td>
              </tr>
              <tr>
                <td>
                  The details about the preferred mode of communication to
                  collect the data (like Mobile No./Whatsapp number/ e-mail ID
                  etc.)
                </td>
                <td><h5 class="blue--text">test@mail.com</h5></td>
              </tr>
            </tbody>
          </v-simple-table>
        </td>
      </template>

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
          <div
            v-if="!item.ProfileImage && item.Username"
            class="d-flex align-center"
          >
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

  public expanded: any = [];

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
      text: "Counseling Program",
      sortable: false,
      value: "CounselingType",
    },
    {
      text: "Summary",
      sortable: false,
      value: "CounselingType",
    },
    { text: "", value: "data-table-expand" },
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
