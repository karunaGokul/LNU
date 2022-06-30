<template>
  <v-row
    style="
      background: linear-gradient(
        180deg,
        rgb(73, 92, 184) -60.28%,
        rgb(255, 255, 255) 26.8%
      );
    "
  >
    <v-col style="height: 100%">
      <v-row class="mt-8 mb-6">
        <v-col class="ml-16"> <h4 class="text-h5">Life N You</h4> </v-col>
      </v-row>

      <v-row justify="center">
        <!-- <v-col cols="12" md="4" offset-md="4"> -->
        <v-icon x-large>mdi-account</v-icon>
        <!-- <v-img src="@/assets/coachRegistration.jpg" width="75px"></v-img> -->
        <!-- </v-col> -->
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

          <v-row>
            <v-col cols="12" md="9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique molestiae animi<br />
              adipisci quia consectetur tenetur reiciendis iste id expedita
              voluptatum recusandae,<br />
              autem asperiores dicta impedit quam quisquam deleniti ipsa quae!
              <br />
            </v-col>

            <v-col class="d-flex align-self">
              <v-spacer></v-spacer>
              <v-btn
                depressed
                rounded
                width="100"
                color="rgb(73, 92, 184)"
                class="white--text text-capitalize mt-5"
                >save</v-btn
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
export default class CoachRegistration extends Vue {}
</script>
