<template>
  <v-row class="primary-linear">
    <v-col class="mx-10 pb-10">
      <h1 class="mt-10">Coach Details</h1>
      <div v-if="response">
        <v-card
          elevation="0"
          outlined
          class="mt-8 rounded-lg pa-3"
          v-for="(row, i) in response"
          :key="i"
        >
      
          <v-row>
            <v-col cols="12" md="3" class="d-flex justify-center align-center">
              <div>
                <v-avatar size="70">
                  <img :src="`data:image/png;base64,${row.ProfileImage}`" alt="John" />
                </v-avatar>

                <h4>{{ row.Name }}</h4>
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
                    {{ row.About }}
                  </h4>
                </v-col>
              </v-row>
              <v-row class="my-n2">
                <v-col cols="4" md="2">
                  <h4>Experience :</h4>
                </v-col>
                <v-col>
                  <h4 class="body-1">{{ row.Experience }} Years</h4>
                </v-col>
              </v-row>
              <v-row class="my-n2">
                <v-col cols="4" md="2">
                  <h4>Counselling Type :</h4>
                </v-col>
                <v-col>
                  <h4 class="body-1">{{ row.CounselingType }}</h4>
                </v-col>
              </v-row>
              <v-row class="my-n2">
                <v-col cols="4" md="2">
                  <h4>Certificate :</h4>
                </v-col>
                <v-col>
                  <h4 class="body-1">{{ row.Certificate.join(", ") }}</h4>
                </v-col>
              </v-row>
              <v-row class="my-n2">
                <v-col cols="4" md="2">
                  <h4>Email :</h4>
                </v-col>
                <v-col>
                  <h4 class="body-1">{{ row.Email }}</h4>
                </v-col>
              </v-row>
              <v-row class="my-n2">
                <v-col cols="4" md="2">
                  <h4>Phone :</h4>
                </v-col>
                <v-col>
                  <h4 class="body-1">{{ row.PhoneNumber }}</h4>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </div>
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
    </v-col>
  </v-row>
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
