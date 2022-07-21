import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueHelper from "./plugins/vue-helper";
import Vuelidate from "vuelidate";
import "./styles/main.scss";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueHelper);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
