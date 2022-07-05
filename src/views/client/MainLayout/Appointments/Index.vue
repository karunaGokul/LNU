<template>
  <div class="pa-4">
    <h2 class="font-weight-bold my-2">Appointments</h2>
    <v-tabs v-model="tab">
      <v-tab href="#tap-active-appointments">Active Appointments</v-tab>
      <v-tab href="#tab-previous-appointments">Prvious Appointments</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tap-active-appointments">
        <calendar />
      </v-tab-item>
      <v-tab-item value="tab-previous-appointments">
        <v-row class="fill-height">
          <v-col col="8" md="8" sm="6"> </v-col>
          <v-col col="4" md="4" sm="6">
            <div class="w-50">
              <div class="d-flex align-center">
                <span class="text-h6 font-weight-bold">Rating</span>
                <v-rating
                  v-model="rating"
                  background-color="orange lighten-3"
                  color="orange"
                ></v-rating>
              </div>
              <v-row no-gutters>
                <v-col cols="3" class="text-center"><span>5 Star</span></v-col>
                <v-col cols="9">
                  <v-progress-linear
                    color="#FCAE53"
                    value="100"
                    rounded
                    height="10"
                    width="70"
                    class="my-3"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="3" class="text-center"><span>4 Star</span></v-col>
                <v-col cols="9">
                  <v-progress-linear
                    color="#FCAE53"
                    value="80"
                    rounded
                    height="10"
                    width="70"
                    class="my-3"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="3" class="text-center"><span>3 Star</span></v-col>
                <v-col cols="9">
                  <v-progress-linear
                    color="#FCAE53"
                    value="60"
                    rounded
                    height="10"
                    width="70"
                    class="my-3"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="3" class="text-center"><span>2 Star</span></v-col>
                <v-col cols="9">
                  <v-progress-linear
                    color="#FCAE53"
                    value="30"
                    rounded
                    height="10"
                    width="70"
                    class="my-3"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="3" class="text-center"><span>1 Star</span></v-col>
                <v-col cols="9">
                  <v-progress-linear
                    color="#FCAE53"
                    value="15"
                    rounded
                    height="10"
                    width="70"
                    class="my-3"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calendar from "./component/Calender.vue";

@Component({
  components: {
    Calendar,
  },
})
export default class AppointmentsLayout extends Vue {
  public tab: string = "ActiveAppointments";
  public rating: number = 4;
}
</script>