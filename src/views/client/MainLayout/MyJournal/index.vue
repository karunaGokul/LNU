<template>
  <div
    style="background: linear-gradient(180deg, #fca744 -60.28%, #ffffff 26.8%)"
  >
    <v-row class="align-center mx-15" style="height: 80vh">
      <v-col>
        <h1
          style="font-family: Questario Icon !important; color: #fca744"
          class="mb-2"
        >
          Journal Your Thoughts Here
        </h1>
        <h2 class="mb-1">How are you feeling today?</h2>
        <p>
          Tellus adipiscing diam magna in egestas id scelerisque amet. Id nulla
          quam ornare nibh porttitor eros suscipit. Id egestas enim, purus
          consectetur. Pharetra amet tortor nisl in id maecenas quis. Ultrices
          sed placerat nec rhoncus, amet facilisis enim arcu.
        </p>
      </v-col>
      <v-col>
        <v-card class="pa-5 rounded-xl" elevation="4">
          <h3 class="mt-5">Mood Meter</h3>
          <p>
            Pulvinar consequat, amet, odio tortor pellentesque ut arcu diam nam.
            At libero ipsum ipsum nibh risus est vel nunc a.
          </p>

          <v-row>
            <v-col>
              <div
                style="width: 40px; height: 47px; background: #9dacff"
                class="mb-2 rounded-pill"
              ></div>
              <v-card
                class="d-flex justify-center align-center rounded-pill"
                style="
                  width: 40px;
                  height: 16px;
                  text-align: center;
                  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
                "
              >
                <span>...</span>
              </v-card>
            </v-col>
            <v-col>
              <div class="circle"></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div>
      <h3
        class="text-center"
        style="font-family: Questario Icon !important; color: #fca744"
      >
        “Positive quote by famous personalities”
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyJournal extends Vue {}
</script>

<style scoped>
.circle {
  width: 84px;
  height: 84px;
  border: 3px solid #ff8f8f;
  border-left: 3px solid transparent;
  transform: rotate(35deg);
  border-radius: 50%;
  position: relative;
}
.circle::after {
  content: "";
  display: block;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  position: absolute;
}
.circle::before {
  content: "";
  display: block;
  width: 56px;
  height: 56px;
  border: 2px solid #8fa1ff;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  transform: rotate(35deg);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
</style>
