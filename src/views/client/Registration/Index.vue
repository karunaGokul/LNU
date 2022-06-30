<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-img src="@/assets/registration.png">
            <v-container fill-height fluid>
              <v-row>
                <v-col cols="12" md="6" offset-md="6">
                  <h4 class="text-h4">Life N You Welcomes you</h4>
                  <h4 class="text-h5 ml-16 pl-16">Heal Better, Feel Better</h4>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-container fluid fill-height class="d-flex justify-center mt-n16">
        <v-row justify="center" class="mb-n8"> <h2>Registration Form</h2></v-row>
        <v-form class="my-n16">
          <v-row>
            <v-col cols="12" md="4">
              <v-label>Full Name</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Fullname"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Contact</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Contact"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Email</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-label>Counselling Type</v-label>
              <v-select
                filled
                rounded
                dense
                placeholder="Enter CounsellingType"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Payements</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Payements"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="d-flex align-self">
              <v-spacer></v-spacer>
              <v-btn
                depressed
                rounded
                width="100"
                color="#FFA726"
                class="white--text text-capitalize mt-5"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ClientRegistration extends Vue {}
</script>
