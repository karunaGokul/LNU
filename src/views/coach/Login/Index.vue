<template>
  <v-row no-gutters style="background: linear-gradient(180deg, rgb(73, 92, 184) -60.28%, rgb(255, 255, 255) 26.8%)">
    <v-col cols="12" md="6">
      <v-img src="@/assets/coachLogin.png" height="100%">
        <v-container fill-height fluid class="white--text mt-n16">
          <v-row class="pl-10">
            <h4 class="text-h4">Life N You</h4>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="6">
              <h4 class="text-h4">We help you build a better life</h4>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
    <v-col>
      <v-container fill-height fluid class="pa-8">
        <v-row>
          <v-col>
            <v-card
              elevation="2"
              outlined
              width="450"
              class="ml-16 pl-7 rounded-lg indigo lighten-5"
              style="background: linear-gradient(180deg, rgb(186, 198, 255) -78.57%, rgba(255, 255, 255));"
            >
              <v-card-title class="py-3 ml-n10 text-h5 d-flex justify-center"
                >Coach</v-card-title
              >
              <v-form>
                <text-input />
                <password-input />
                <div class="d-flex justify-center">
                  <v-btn
                    depressed
                    rounded
                    width="100"
                    color="#495CB8"
                    class="white--text text-capitalize ml-n4 mb-2"
                    >Login</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-16 mb-n16">
          <h4>No account?</h4>
          <router-link to="/coach/registration" class="text-decoration-none"
            >Register here</router-link
          >
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextInput from "@/components/controls/TextInput.vue";
import PasswordInput from "@/components/controls/PasswordInput.vue";

@Component({
  components: { TextInput, PasswordInput },
})
export default class CoachLogin extends Vue {}
</script>
