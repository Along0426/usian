import Vue from "vue";
import Vuex from "vuex";
import { setToken, getToken, setUserInfo, getUserInfo, removeTokenAndUserInfo } from "../utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    userinfo: getUserInfo() || ""
  },
  getters: {
    token(state) {
      return state.token
    },
    userinfo(state) {
      return state.userinfo
    }
  },
  mutations: {
    SetToken(state, token) {
      state.token = token
      setToken(token)
    },
    SetUserinfo(state, userinfo) {
      state.userinfo = userinfo
      setUserInfo(userinfo)
    }
  },
  actions: {
    DisSetToken({ commit }, token) {
      commit("SetToken", token)
    },
    DisSetUserInfo({ commit }, userinfo) {
      commit("SetUserinfo", userinfo)
    }
  },
  modules: {},
});
