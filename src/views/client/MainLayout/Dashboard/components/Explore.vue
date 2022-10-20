<template>
  <div class="pa-4" color="primary">
    <div class="text-left mb-4">
      <v-btn
        depressed
        color="#1867c0"
        class="white--text text-capitalize"
        @click="back"
      >
        <v-icon class="pr-2">keyboard_backspace</v-icon>
        Back
      </v-btn>
    </div>
    <v-row class="row justify-center">
      <v-col md="5">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        >
        </v-img>
        <v-card-title class="ps-0">Mental Health Counseling</v-card-title>

        <v-card-text class="text--primary ps-0">
          <div>
            <v-label>Description :</v-label>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              adipisci aperiam non dicta animi expedita hic eligendi totam eaque
              rem quasi neque sed quas qui vero modi eveniet, cupiditate
              perspiciatis. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
            </p>
            <v-label>Summary</v-label>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est
              sit quisquam hic perspiciatis beatae nisi deleniti ipsam iure
              repellendus, eligendi libero iste illum dignissimos cum
              voluptatibus recusandae tempora! Voluptates.
            </p>
            <v-label>Cost: 100</v-label> <br />
            <v-label>Duration: 30 minutes</v-label>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Explore extends Vue {
  created() {
    window.scrollTo(0, 0);
  }
  public back() {
    this.$router.push("/client/home/dashboard");
  }
}
</script>
