<template>
  <v-container fluid class="pa-16">
    <h1 class="text-h4 font-weight-bold">Welcome Back {{ userName }}!</h1>

    <!--  <v-row class="my-5">
      <v-col lg="4" md="4" sm="12">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
          >
          </v-img>
          <v-card-title>Behavioural Counseling</v-card-title>

          <v-card-text class="text--primary">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('Behavioural Counseling')"
            >
              Book Appointment
            </v-btn>
            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Client Explore',
                params: {
                  id: 'client-explore',
                  title: 'Behavioural Counselling',
                  cost: 200,
                  duration: 20,
                  img: 'logo',
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="12">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/photo-1542338347-4fff3276af78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVoYXZpb3VyYWwlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          >
          </v-img>
          <v-card-title>Marriage Counseling</v-card-title>

          <v-card-text class="text--primary">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('Marriage Counseling')"
            >
              Book Appointment
            </v-btn>

            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Client Explore',
                params: {
                  id: 'client-explore',
                  title: 'Marriage Counselling',
                  cost: 1750,
                  duration: 40,
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="12">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/photo-1593634804965-0394d1324bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGQlMjAlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          >
          </v-img>
          <v-card-title>Child Counseling</v-card-title>

          <v-card-text class="text--primary">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('Child Counseling')"
            >
              Book Appointment
            </v-btn>

            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Client Explore',
                params: {
                  id: 'client-explore',
                  title: 'Child Counselling',
                  cost: 3000,
                  duration: 60,
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="12">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          >
          </v-img>

          <v-card-title>MentalHealth Counseling</v-card-title>

          <v-card-text class="text--primary">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('MentalHealth Counseling')"
            >
              Book Appointment
            </v-btn>

            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Client Explore',
                params: {
                  id: 'client-explore',
                  title: 'Mental Health Counselling',
                  cost: 1000,
                  duration: 25,
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="12">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://plus.unsplash.com/premium_photo-1661255424179-76d263e53ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          >
          </v-img>
          <v-card-title>Career Counseling</v-card-title>

          <v-card-text class="text--primary">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('Career Counseling')"
            >
              Book Appointment
            </v-btn>

            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Client Explore',
                params: {
                  id: 'client-explore',
                  title: 'Career Counselling',
                  cost: 1500,
                  duration: 35,
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>-->

    <!--<v-row class="mt-6">
      <v-col lg="6" md="6" sm="12">
        <v-card elevation="2" class="rounded">
          <v-card-title class="justify-space-between">
            <h5>
              <v-icon color="primary">receipt</v-icon>
              Upcoming Appointments
            </h5>
            <v-icon>launch</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Date</th>
                    <th class="text-left">Counseling Program</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in appointments" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.counselingType }}</td>
                    <td>{{ item.status }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="6" md="6" sm="12">
        <v-card elevation="2" class="rounded">
          <v-card-title class="justify-space-between">
            <h5>
              <v-icon color="primary">account_balance_wallet</v-icon>
              Recent Payments
            </h5>
            <v-icon>launch</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Date</th>
                    <th class="text-left">Counseling Program</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in appointments" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.counselingType }}</td>
                    <td>{{ item.status }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>-->

    <v-row class="my-5">
      <v-col cols="4" md="4" sm="12" v-for="data in response" :key="data.Id">
        <v-card class="mx-auto">
          <v-img height="200px" :src="`data:image/png;base64,${data.image}`">
          </v-img>
          <v-card-title>{{ data.Name }}</v-card-title>
          <v-card-text class="text--primary">{{
            data.description
          }}</v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              color="primary"
              class="text-capitalize"
              text
              @click="navigateBookAppointment('Behavioural Counseling')"
            >
              Book Appointment
            </v-btn>
            <router-link
              class="text-decoration-none"
              :to="{
                name: 'Explore',
                params: {
                  id: data.Id,
                },
              }"
            >
              <v-btn text color="primary" class="text-capitalize">
                Explore
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import { AdminCounselingTypeModel } from "@/model";

@Component
export default class DashboardLayout extends Vue {
  @Inject("dashboardService") dashboardService: IDashboardService;
  public response: Array<AdminCounselingTypeModel> = [];

  created() {
    this.counsellingType();
  }

  public counsellingType() {
    this.dashboardService.getCounsellingType().then((response) => {
      this.response = response;
    });
  }
  public navigateBookAppointment(appointment: string) {
    this.$router.push({
      name: "Book Appointment",
      params: { id: "book-appointment" },
      query: { appointment: appointment },
    });
  }

  get userName() {
    return this.$store.getters.username;
  }
}
</script>
