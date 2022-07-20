<template>
  <v-app>
    <v-main>
      <router-view />
      <ProgressCircular ref="loadingSpinner"></ProgressCircular>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DIContainer } from "./dicontainer";

import axios from "axios";

import ProgressCircular from "@/components/controls/ProgressCircular.vue"

@Component({
  components:{
    ProgressCircular
  }
})
export default class App extends DIContainer {

  created() {
    this.createFilters();
  }

  mounted() {
    let root: any = this.$root;
    let loadingSpinner:any = this.$refs.loadingSpinner as ProgressCircular;

    root.$loadingSpinner = loadingSpinner.show;

    // this.tokenInterceptor();

  }

  createFilters() {
    Vue.filter("errorMessages", (value: any, name: string) => {
      return this.$vuehelper.val.messages(value, name);
    });
  }

  tokenInterceptor() {
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${this.$store.getters.accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const status = error.response ? error.response.status : null;
        axios.interceptors.response.eject(interceptor);

        if (status !== 401) return Promise.reject(error);
        if (status == 401) {
          this.$store.dispatch("logout");
          this.$router.push("/").catch((err) => {});
          return Promise.reject(error);
        }
      }
    );
  }
}
</script>
