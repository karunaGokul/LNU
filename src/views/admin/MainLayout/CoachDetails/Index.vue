<template>
  <v-simple-table class="primary-linear">
    <template v-slot:default>
      <thead>
        <tr height="90px">
          <th colspan="7">
            <h1 class="text-xl-h1" style="font-size: 30px">Coach Details</h1>
          </th>
        </tr>
        <tr>
          <th class="text-left"><h2>UserName</h2></th>
          <th class="text-left"><h2>About</h2></th>
          <th class="text-left"><h2>Experience</h2></th>
          <th class="text-left"><h2>CounsellingType</h2></th>
          <th class="text-left"><h2>Certificate</h2></th>
          <th class="text-left"><h2>Email</h2></th>
          <th class="text-left"><h2>Phone</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in response" :key="item.id" height="90">
          <td class="ma-10">
            <v-avatar size="70">
              <img
                :src="`data:image/png;base64,${item.ProfileImage}`"
                alt="John"
              />
            </v-avatar>
          </td>
          <td>{{ item.about }}</td>
          <td>{{ item.Experience }}</td>
          <td>{{ item.counsellingType }}</td>
          <td>{{ item.Certificate.join() }}</td>
          <td>{{ item.Email }}</td>
          <td>{{ item.PhoneNumber }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import BaseComponent from "@/components/base/BaseComponent";
import { GetCoachesModel } from "@/model";
import { IAdminService } from "@/service";
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

  private getCoaches() {
    this.loadingSpinner("show");
    this.adminService.getCoaches().then((response: Array<GetCoachesModel>) => {
      this.response = response;
      this.loadingSpinner("hide");
    });
  }
}
</script>

<!-- <v-card elevation="0" outlined class="mt-8 rounded-lg pa-3">
        <v-row>
          <v-col cols="12" md="3" class="d-flex justify-center align-center">
            <div>
              <v-avatar size="70">
                <img src="@/assets/profile.jpg" alt="John" />
              </v-avatar>

              <h4>UserName</h4>
              <h5 class="text-center">rating</h5>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-row class="mb-n2">
              <v-col cols="4" md="2">
                <h4>About :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ut ipsam eos consequuntur temporibus vero sed impedit?
                </h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Experience :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">4 Years</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Certificate :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">One, Two</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Email :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">coach@mail.com</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Phone :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">1234567890</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card elevation="0" outlined class="mt-8 rounded-lg pa-3">
        <v-row>
          <v-col cols="12" md="3" class="d-flex justify-center align-center">
            <div>
              <v-avatar size="70">
                <img src="@/assets/profile.jpg" alt="John" />
              </v-avatar>

              <h4>UserName</h4>
              <h5 class="text-center">rating</h5>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-row class="mb-n2">
              <v-col cols="4" md="2">
                <h4>About :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ut ipsam eos consequuntur temporibus vero sed impedit?
                </h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Experience :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">4 Years</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Certificate :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">One, Two</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Email :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">coach@mail.com</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Phone :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">1234567890</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card> -->
