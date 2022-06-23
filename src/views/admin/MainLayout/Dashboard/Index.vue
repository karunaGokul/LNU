<template>
  <div>
    <!-- Admin Dashboard Layout -->
    <v-row>
      <v-col cols="12" md="3">
        <side-bar />
      </v-col>
      <v-col>
        <v-container fluid fill-height align="center" justify="center">
          <v-row>
            <v-col cols="12" md="4" >
              <v-btn class="light-green darken-1">New Appointments</v-btn>
            </v-col>
            <v-col cols="12" md="3" class="ml-n5">
              <v-select label="Coach Available" background-color="light-green darken-1" dense outlined></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn class="light-green darken-1">Date</v-btn>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn class="light-green darken-1">Time</v-btn>
            </v-col>
          </v-row>
           <v-row>
            <v-col cols="12" md="4" >
              <v-btn>New Appointments</v-btn>
            </v-col>
            <v-col cols="12" md="3" class="ml-n5">
              <v-select label="Coach Available" dense outlined></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn>Date</v-btn>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn>Time</v-btn>
            </v-col>
          </v-row>
           <v-row>
            <v-col cols="12" md="4" >
              <v-btn>New Appointments</v-btn>
            </v-col>
            <v-col cols="12" md="3" class="ml-n5">
              <v-select label="Coach Available" dense outlined></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn>Date</v-btn>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn>Time</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="2" offset-md="9">
               <v-btn class="light-green darken-1">Assign</v-btn>
            </v-col>
           
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/views/admin/MainLayout/Dashboard/SideBar.vue";

@Component({
  components: { SideBar },
})
export default class AdminDashboardLayout extends Vue {}
</script>
