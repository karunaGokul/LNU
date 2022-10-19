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
      @click:row="getItem"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <tr>
            <td class="pt-2">
              <h4>Myself {{ item.Username }}</h4>
            </td>
          </tr>

          <v-simple-table dense v-if="item.questionnaire">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>What brought you to visit us?</td>
                <td>
                  <h5 class="blue--text">{{ item.questionnaire.visitUs }}</h5>
                </td>
              </tr>

              <tr>
                <td>
                  What do you expect from your interactions with the therapist?
                </td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.expectFromTherapist }}
                  </h5>
                </td>
              </tr>

              <tr>
                <td>Eating Habits:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.eatingHabits }}
                  </h5>
                </td>
              </tr>

              <tr>
                <td>Your understanding of your physical health:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.physicalHealth }}
                  </h5>
                </td>
              </tr>

              <tr>
                <td>Your daily eating habits:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.dailyEatingHabits }}
                  </h5>
                </td>
              </tr>

              <tr>
                <td>The current state of mind:</td>
                <td>
                  <h5 class="blue--text">{{ item.questionnaire.mindSet }}</h5>
                </td>
              </tr>
              <tr>
                <td>Urge to Live:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.urgeToLive }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>Social Interactions:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.socialInteractions }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>Dependency on Addictions, if any:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.addictions }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>Fear of the unknown:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.fearOfUnknown }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>The physical feeling of pain or illness:</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.physicalFeeling }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  Are you already on any medication? If Yes, please mention the
                  name.
                </td>
                <td><h5 class="blue--text">Antibiotic</h5></td>
              </tr>
              <tr>
                <td>What is your preferred mode of communication name.</td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.preferredModeOfCommunication }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  How should we get in touch with the person requiring
                  counseling name.
                </td>
                <td>
                  <h5 class="blue--text">
                    {{ item.questionnaire.getInTouch }}
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  The details about the preferred mode of communication to
                  collect the data (like Mobile No./Whatsapp number/ e-mail ID
                  etc.)
                </td>
                <td><h5 class="blue--text">test@mail.com</h5></td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                    outlined
                    dense
                    label="Summary"
                    class="mt-6"
                    v-model="requestSummary.Summary"
                  ></v-text-field>
                </td>
                <td>
                  <v-btn
                    color="primary"
                    class="text-capitalize"
                    depressed
                    @click="updateSummary"
                    >save</v-btn
                  >
                </td>
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
import { GetClientsModel, UpdateSummaryRequestModel } from "@/model";
import { IAdminService } from "@/service";
@Component({
  components: {},
})
export default class ClientDetails extends BaseComponent {
  @Inject("adminService") service: IAdminService;
  public response: Array<GetClientsModel> = [];
  public requestSummary: UpdateSummaryRequestModel = new UpdateSummaryRequestModel();

  public expanded: any = [];
  public clientId: string;

  created() {
    this.getClient();
  }
  public getItem(data: any) {
    this.clientId = data.Id;
    console.log(this.clientId);
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
      text: "Counseling Program",
      sortable: false,
      value: "CounselingTypeName",
    },
    {
      text: "Summary",
      sortable: false,
      value: "summary",
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
  public updateSummary() {
    this.loadingSpinner("show");
    this.requestSummary.clientId = this.clientId;
    this.service.updateSummary(this.requestSummary).then((response: any) => {
      this.loadingSpinner("hide");
      this.getClient();
    });
  }
}
</script>
