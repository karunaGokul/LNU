<template>
  <div>
    <v-container>
      <v-row class="my-3">
        <h2>Life N You</h2>
      </v-row>
      <v-row>
        <v-img src="@/assets/registration.png"></v-img>
      </v-row>
      <v-row justify="space-between" class="mt-10">
        <v-card outline tile width="350">
          <v-row justify="center" class="my-5">
            <v-btn fab>
              <v-icon x-large>mdi-account-group</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-card-actions>
              <v-btn class="success text-capitalize" to="/client/login"> Login</v-btn></v-card-actions
            >
          </v-row>
          <v-row>
            <v-card-text>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                placeat iusto cumque possimus rerum saepe rem accusantium
                doloremque blanditiis unde qui, corporis facilis modi debitis
                tenetur natus quo nulla officiis.
              </p>
            </v-card-text>
          </v-row>
        </v-card>
        <v-card outline tile width="350">
          <v-row justify="center" class="my-5">
            <v-btn fab>
              <v-icon x-large>mdi-account-settings</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-card-actions>
              <v-btn class="success text-capitalize" to="/coach/login"> Login</v-btn></v-card-actions
            >
          </v-row>
          <v-row>
            <v-card-text>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                placeat iusto cumque possimus rerum saepe rem accusantium
                doloremque blanditiis unde qui, corporis facilis modi debitis
                tenetur natus quo nulla officiis.
              </p>
            </v-card-text>
          </v-row>
        </v-card>
        <v-card outline tile width="350">
          <v-row justify="center" class="my-5">
            <v-btn fab>
              <v-icon x-large>mdi-account-tie</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-card-actions>
              <v-btn class="success text-capitalize" to="/admin/login"> Login</v-btn></v-card-actions
            >
          </v-row>
          <v-row>
            <v-card-text>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                placeat iusto cumque possimus rerum saepe rem accusantium
                doloremque blanditiis unde qui, corporis facilis modi debitis
                tenetur natus quo nulla officiis.
              </p>
            </v-card-text>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
    <!-- <router-link to="/admin/login">Admin Login</router-link>
    <router-link to="/client/login">Client Login</router-link>
    <router-link to="/coach/login">Coach Login</router-link> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MainLayout extends Vue {}
</script>
