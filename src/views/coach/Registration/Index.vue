<template>
  <v-row class="indigo lighten-5">
    <v-col style="height: 100%">
      <v-row class="mt-10">
        <v-col class="ml-10"> <h4 class="text-h3">Life N You</h4> </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="4" offset-md="4"> helo </v-col>
      </v-row>

      <v-container fluid fill-height class="d-flex justify-center mt-10">
        <v-form>
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
              <v-label>Experience(Years)</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Experience"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-label>Certification</v-label>
              <v-select
                filled
                rounded
                dense
                placeholder="Enter Certification"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-label>Email</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Email"
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
              <v-label>Payements</v-label>
              <v-text-field
                filled
                rounded
                dense
                placeholder="Enter Payements"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ea vel
          corporis nulla molestiae fugiat pariatur aspernatur eum, dolore
          repellat cum, consequatur quo blanditiis assumenda deserunt temporibus
          possimus, recusandae aliquid! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime porro ab consequatur iure repellendus id
          ullam impedit veritatis. Beatae itaque nihil aliquid quas soluta!
          Repudiandae facere asperiores blanditiis autem aut?
        </p>
        <v-btn
          depressed
          rounded
          color="indigo darken-1"
          class="white--text text-capitalize mt-5 ml-16"
          >Submit</v-btn
        >
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CoachRegistration extends Vue {}
</script>
