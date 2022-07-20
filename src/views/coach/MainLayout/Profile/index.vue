<template>
  <div
    style="background: linear-gradient(180deg, #5949b8 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="align-start pt-15 mx-15" style="height: 100vh">
      <v-col class="pt-10">
        <h1>Hello Coach, ABC!</h1>
        <v-row>
          <v-col>
            <v-icon size="7rem">account_circle</v-icon>
          </v-col>
          <v-col>
            <h2>ABC</h2>
            <p>Lorem Ipsum Coach</p>
            <p>Rating</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="align-self-center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Qualifications"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Experience (years)"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Counselling Type"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Upcoming Appointments"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Payouts"
            required
          ></v-text-field>
          <div class="d-flex justify-space-between mt-5">
            <v-btn color="#5949B8" class="white--text"> Edit </v-btn>
            <v-btn color="#EBEBEB" class="white--black"> Save </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Profile extends Vue {}
</script>
