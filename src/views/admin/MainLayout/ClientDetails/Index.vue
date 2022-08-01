<template>
  <v-row class="primary-linear">
    <v-col class="mx-10 pb-10">
      <h1 class="mt-10">Client Details</h1>
      <v-card elevation="0" outlined class="mt-8 rounded-lg pa-3">
        <v-row>
          <v-col cols="12" md="3" class="d-flex justify-center align-center">
            <div>
              <v-avatar size="70">
                <img
                  src="@/assets/profile.jpg"
                  alt="John"
                />
              </v-avatar>

              <h4>UserName</h4>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-row class="mb-n2">
              <v-col cols="4" md="2">
                <h4>About :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ut ipsam eos consequuntur temporibus vero sed impedit?
                </h4>
              </v-col>
            </v-row>

            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>CounsellingType :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">Marriage Counselling</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Email :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">coach@mail.com</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Phone :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">1234567890</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card elevation="0" outlined class="mt-8 rounded-lg pa-3">
        <v-row>
          <v-col cols="12" md="3" class="d-flex justify-center align-center">
            <div>
              <v-avatar size="70">
                <img
                  src="@/assets/profile.jpg"
                  alt="John"
                />
              </v-avatar>

              <h4>UserName</h4>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-row class="mb-n2">
              <v-col cols="4" md="2">
                <h4>About :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ut ipsam eos consequuntur temporibus vero sed impedit?
                </h4>
              </v-col>
            </v-row>

            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>CounsellingType :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">Marriage Counselling</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Email :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">coach@mail.com</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Phone :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">1234567890</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card elevation="0" outlined class="mt-8 rounded-lg pa-3">
        <v-row>
          <v-col cols="12" md="3" class="d-flex justify-center align-center">
            <div>
              <v-avatar size="70">
                <img
                  src="@/assets/profile.jpg"
                  alt="John"
                />
              </v-avatar>

              <h4>UserName</h4>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-row class="mb-n2">
              <v-col cols="4" md="2">
                <h4>About :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ut ipsam eos consequuntur temporibus vero sed impedit?
                </h4>
              </v-col>
            </v-row>

            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>CounsellingType :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">Marriage Counselling</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Email :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">coach@mail.com</h4>
              </v-col>
            </v-row>
            <v-row class="my-n2">
              <v-col cols="4" md="2">
                <h4>Phone :</h4>
              </v-col>
              <v-col>
                <h4 class="body-1">1234567890</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ClientDetails extends Vue {}
</script>
