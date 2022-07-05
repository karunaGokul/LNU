<template>
  <v-row no-gutters style="height: 100%">
    <v-col cols="12" md="6">
      <v-img src="@/assets/adminLogin.png" height="100%">
        <v-container fill-height fluid class="white--text mt-n16">
          <v-row class="pl-10">
            <h4 class="text-h4">Life N You</h4>
          </v-row>
          <v-row>
            <v-col md="6" offset-md="6">
              <!-- <h4 class="text-h4">Bring Out The Magic In You</h4> -->
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-col>
    <v-col>
      <v-container fill-height fluid>
        <v-row align="center" justify="center" style="min-height: 400px">
          <v-col>
            <v-card
              elevation="2"
              outlined
              height="260"
              class="mx-10 pl-7 rounded-lg light-green lighten-4"
            >
              <v-card-title class="py-3 d-flex justify-center"
                >Admin</v-card-title
              >
              <v-form>
                <text-input />
                <password-input />
                <div class="d-flex justify-center">
                  <v-btn
                    depressed
                    rounded
                    class="white--text text-capitalize light-green darken-1"
                    @click="login"
                    >Login</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-16 mb-n16">
          <h4>No account?</h4>
          <router-link to="" class="text-decoration-none"
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
export default class Index extends Vue {
  public login() {
    this.$router.push('home/dashboard');
  }
}
</script>
