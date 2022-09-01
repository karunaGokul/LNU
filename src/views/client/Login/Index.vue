<template>
  <div>
    <login :tab="tab" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Login from "@/components/layout/Login.vue";

@Component({
  components: {
    Login,
  },
})
export default class ClientLogin extends Vue {
  public tab: string = "client";
}
</script>
