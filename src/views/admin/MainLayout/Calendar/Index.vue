<template>
  <div class="pt-15 px-15">
    <v-row>
      <v-col>
        <v-date-picker
          color="#5949B8"
          width="350"
          v-model="picker"
          prev-icon="chevron_left"
          next-icon="chevron_right"
        ></v-date-picker
      ></v-col>
    </v-row>
    <v-row>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        omnis eius officiis, totam quibusdam unde autem numquam hic optio eaque
        placeat ipsam enim mollitia cum atque distinctio tempora vel odit? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptates
        dolor voluptatem, veritatis eius omnis, cupiditate explicabo, doloribus
        optio repellendus amet fuga fugiat animi accusantium est facilis nobis
        necessitatibus quae!
      </p>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

@Component({})
export default class Calender extends Vue {
  public picker = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
}
</script>
