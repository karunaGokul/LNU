<template>
  <div class="pa-4">
    <v-row>
      <v-col>
        <h2 class="font-weight-bold my-2">Appointments</h2>
      </v-col>
      <!-- <v-spacer>
        <v-col class="d-flex justify-end">
          <v-btn class="text-capitalize mr-4 mt-3" color="background-orange">book appointment</v-btn>
        </v-col>
      </v-spacer> -->
    </v-row>

    <v-tabs v-model="tab">
      <v-tab href="#tab-active-appointments" class="text-capitalize"
        >Active Appointments</v-tab
      >
      <v-tab href="#tab-book-appointments" class="text-capitalize"
        >Book Appointments</v-tab
      >
      <v-tab href="#tab-previous-appointments" class="text-capitalize"
        >Previous Appointments</v-tab
      >
      <v-tab href="#tab-pending-appointments" class="text-capitalize"
        >Pending Appointments</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-active-appointments">
        <calendar :activeAppointments="activeAppointments" />
      </v-tab-item>
      <v-tab-item value="tab-book-appointments">
        <calendar :bookAppointments="bookAppointments" />
      </v-tab-item>
      <v-tab-item value="tab-previous-appointments">
        <v-row class="fill-height">
          <v-col col="12" md="12" sm="6">
            <calendar :previousAppointments="previousAppointments"
          /></v-col>
          <!-- <v-col col="4" md="4" sm="6">
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
          </v-col> -->
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-pending-appointments">
        <PendingAppointments />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calendar from "./component/Calender.vue";
import PendingAppointments from "./component/PendingAppointments.vue";

@Component({
  components: {
    Calendar,
    PendingAppointments,
  },
})
export default class AppointmentsLayout extends Vue {
  public tab: string = "ActiveAppointments";
  public rating: number = 4;
  public activeAppointments: boolean = true;
  public previousAppointments: boolean = true;
  public bookAppointments: boolean = true;
}
</script>
