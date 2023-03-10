import Vue from "vue";
import Vuex from "vuex";

import { AuthenticationModule } from "./modules/authentication.store";
import { ContextModule } from "./modules/context.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { AuthenticationModule, ContextModule },
});
