<template>
  <v-row no-gutters style="height: 100%">
    <v-col cols="12" md="6">
      <v-img src="@/assets/login.png" height="100%">
        <v-container fill-height fluid class="white--text">
          <v-row class="pl-10">
            <h4 class="text-h4">Life N You</h4>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="6">
              <h4 class="text-h4">Bring Out The Magic In You</h4>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
    <v-col>
      <v-container fill-height fluid class="pa-8 d-flex justify-center">
        <h2>Feel stuck? We are here to help you!</h2>
        <v-row >
          <v-col>
            <v-card
              elevation="2"
              outlined
              height="250"
              color="#FFE0B2"
              class="mx-10 pl-7  rounded-lg"
             
            >
              <v-form>
                <v-card-title class="py-3 d-flex justify-center">Client</v-card-title>
                <v-row>
                  <v-col class="pt-6" cols="12" md="3">
                    <v-label class="black--text">Username</v-label>
                  </v-col>
                  <v-col cols="12" md="7" offset-md="1">
                    <v-text-field
                      class="white"
                      rounded
                      dense
                      placeholder="Enter Username"
                      height="20"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-6" cols="12" md="3">
                    <v-label>Password</v-label>
                  </v-col>
                  <v-col cols="12" md="7" offset-md="1">
                    <v-text-field
                      class="white"
                      rounded
                      dense
                      placeholder="Enter Password"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center mt-5">
                  <v-btn
                    depressed
                    rounded
                    color="#FFA726"
                    class="white--text text-capitalize"
                    >Submit</v-btn>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center mt-10">
            <h4>If you are an admin,</h4>
            <a href="">Click here</a>
        </v-row>
        <v-row class="d-flex justify-center mt-n6">
            <h4>If you are a coach,</h4>
            <a href="">Click here</a>
        </v-row>
        <v-row class="d-flex justify-center mt-16 mb-n6">
            <h4>No account?</h4>
            <a href="">Register here</a>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClientLogin extends Vue {}
</script>