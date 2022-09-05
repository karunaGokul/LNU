import { GetterTree, MutationTree, ActionTree } from "vuex";
import { LoginResponseModel, UserModel } from "@/model";

import JwtDecode from "jwt-decode";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USERNAME = "username";
const ID = "id";
const ROLE = "role";

const state: LoginResponseModel = {
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || "",
  refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY) || "",
  id: localStorage.getItem(ID) || "",
  username: localStorage.getItem(USERNAME) || "",
  role: localStorage.getItem(ROLE) || "",
};
const getters: GetterTree<LoginResponseModel, any> = {
  accessToken: (state) => {
    return state.accessToken;
  },

  userInfo: (state) => {
    let userInfo: UserModel = null;

    if (state.accessToken) {
      const tokenParsed: any = JwtDecode(state.accessToken);

      userInfo = new UserModel();
      userInfo.Id = tokenParsed.Id;
      userInfo.Role = tokenParsed.Role;
    }

    return userInfo;
  },
  isTokenExpired: (state) => {
    let expired = true;

    if (state.accessToken) {
      const tokenParsed: any = JwtDecode(state.accessToken);

      const date = new Date(0);
      const exp = parseInt(tokenParsed.exp);
      if (!isNaN(exp)) date.setUTCSeconds(exp);
      expired = date < new Date();
    }
    return expired;
  },
  isLoggedIn: (state, getters) => {
    return state.accessToken && !getters.isTokenExpired;
  },
  refreshToken: (state) => {
    return state.refreshToken;
  },
  role: (state) => {
    return state.role;
  },
  id: (state) => {
    return state.id;
  },
  username: (state) => {
    return state.username;
  },
};
const mutations: MutationTree<LoginResponseModel> = {
  onLogin(state, payload: LoginResponseModel) {
    localStorage.setItem(ACCESS_TOKEN_KEY, payload.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, payload.refreshToken);
    localStorage.setItem(ROLE, payload.role);
    localStorage.setItem(ID, payload.id);
    localStorage.setItem(USERNAME, payload.username);

    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
    state.username = payload.username;
    state.id = payload.id;
    state.role = payload.role;
  },
  onLogout(state) {
    localStorage.clear();
    state.accessToken = "";
    state.refreshToken = "";
    state.id = "";
    state.username = "";
    state.role = "";
  },
};
const actions: ActionTree<LoginResponseModel, any> = {
  login(context, payload) {
    context.commit("onLogin", payload);
  },
  logout(context) {
    context.commit("onLogout");
  },
};
export const AuthenticationModule = {
  state,
  getters,
  mutations,
  actions,
};
