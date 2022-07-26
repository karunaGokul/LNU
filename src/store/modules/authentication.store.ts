import { GetterTree, MutationTree, ActionTree } from "vuex";
import { LoginResponseModel, UserModel } from "@/model";

import JwtDecode from "jwt-decode";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const state: LoginResponseModel = {
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || "",
  refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY) || "",
  id: "",
  expiry: "",
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
      
      console.log(tokenParsed);

      /*userInfo.userName = tokenParsed.preferred_username;
      userInfo.fullName = tokenParsed.name;
      userInfo.firstName = tokenParsed.given_name;
      userInfo.lastName = tokenParsed.family_name;
      userInfo.emailVerified = tokenParsed.email_verified;
      userInfo.phoneNumber = tokenParsed.phoneNumber;*/
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
};
const mutations: MutationTree<LoginResponseModel> = {
  onLogin(state, payload: LoginResponseModel) {
    localStorage.setItem(ACCESS_TOKEN_KEY, payload.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, payload.refreshToken);

    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
  },
  onLogout(state) {
    localStorage.clear();
    state.accessToken = "";
    state.refreshToken = "";
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
