<template>
  <v-row
    no-gutters
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-col cols="12" md="6">
      <v-img src="@/assets/clientLogin.png" height="100vh">
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
      <v-container fill-height fluid class="d-flex justify-center">
        <div>
          <h2>Feel stuck? We are here to help you!</h2>
          <v-card
            elevation="2"
            outlined
            width="450"
            color="#F8E6C4"
            class="rounded-lg pl-6 pb-4 mb-8"
          >
            <v-row class="mb-n8">
              <v-col cols="12" md="4" offset-md="4">
                <v-card-title class="text-h5">Client</v-card-title>
              </v-col>
              <v-col>
                <v-icon color="#FCB258" class="mt-5 ml-16"
                  >mdi-check-circle</v-icon
                >
              </v-col>
            </v-row>
            <v-form>
              <text-input />
              <password-input />
              <div class="d-flex justify-center ml-n4">
                <v-btn
                  depressed
                  rounded
                  color="background-orange"
                  class="white--text text-capitalize"
                  @click="login"
                  >Login</v-btn
                >
              </div>
            </v-form>
          </v-card>
          <div class="d-flex justify-center">
          If you are an admin,
          <router-link to="/admin/login" class="text-decoration-none"
            >Click here</router-link
          ></div>
          <div class="d-flex justify-center">
            If you are a coach,
            <router-link to="/coach/login" class="text-decoration-none"
              >Click here</router-link
            >
          </div>
          <div class="d-flex justify-center mt-16">
          No account?
          <router-link to="/client/registration" class="text-decoration-none"
            >Register here</router-link
          >
          </div>
        </div>

        <!-- <h2>Feel stuck? We are here to help you!</h2>
        <v-row>
          <v-col>
            <v-card
              elevation="2"
              outlined
              width="450"
              color="#F8E6C4"
              class="ml-16 pl-7 my-n16 rounded-lg"
            >
              <v-row class="mb-n8">
                <v-col cols="12" md="4" offset-md="4">
                  <v-card-title class="text-h5">Client</v-card-title>
                </v-col>
                <v-col>
                  <v-icon color="#FCB258" class="mt-5 ml-16"
                    >mdi-check-circle</v-icon
                  >
                </v-col>
              </v-row>

              <v-form>
                <text-input />
                <password-input />
                <div class="d-flex justify-center">
                  <v-btn
                    depressed
                    rounded
                    class="white--text text-capitalize orange lighten-1"
                    @click="login"
                    >Login</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center mb-n14">
          <h4>If you are an admin,</h4>
          <router-link to="/admin/login" class="text-decoration-none"
            >Click here</router-link
          >
        </v-row>
        <v-row class="d-flex justify-center mt-n16">
          <h4>If you are a coach,</h4>
          <router-link to="/coach/login" class="text-decoration-none"
            >Click here</router-link
          >
        </v-row>
        <v-row class="d-flex justify-center">
          <h4>No account?</h4>
          <router-link to="/client/registration" class="text-decoration-none"
            >Register here</router-link
          >
        </v-row> -->
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
export default class Login extends Vue {
  public login() {
    this.$router.push("home/dashboard");
  }
}
</script>
