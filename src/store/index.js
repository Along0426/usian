import Vue from "vue";
import Vuex from "vuex";
import { PostLogin } from '../api/login'
import { logout, userInfo } from "../api/user";
import { setToken, getToken, setUserInfo, getUserInfo, removeTokenAndUserInfo } from "../utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  // 状态
  state: {
    // token信息
    token: getToken() || "",
    // 用户信息
    userinfo: getUserInfo() || ""
  },
  // 计算属性
  getters: {
    // token信息
    token(state) {
      return state.token
    },
    // 用户信息
    userinfo(state) {
      return state.userinfo
    }
  },
  // 同步操作
  mutations: {
    // 修改token
    SetToken(state, token) {
      state.token = token
      // 将token上传至本地
      setToken(token)
    },
    // 修改用户信息
    SetUserinfo(state, userinfo) {
      state.userinfo = userinfo
      // 将用户信息上传至本地
      setUserInfo(userinfo)
    }
  },
  // 异步操作
  actions: {
    // 登录
    async DisSetToken({ commit }, token) {
      try {
        // 调用登录接口并获取到token信息
        const response = await PostLogin(token)
        // 调用同步中修改token的方法
        commit("SetToken", token)
        // 将token返回
        return response.token
      } catch (e) {
        console.log(e.message);
      }
    },

    // 用户信息
    async DisSetUserInfo({ commit }) {
      try {
        // 获取用户信息并返回
        const userinfo = await userInfo()
        // 调用同步中修改用户信息的方法
        commit("SetUserinfo", userinfo)
        // 返回用户信息
        return userinfo
      } catch (e) {
        console.log(e.message);
      }
    },

    // 退出登录
    async ClearTokenAndUserinfo({ commit }) {
      // 调用退出登录接口
      const response = await logout()
      // 调用同步中修改token的方法
      commit("SetToken", "")
      // 调用同步中修改用户信息的方法
      commit("SetUserinfo", "")
      // 将本地的token以及用户信息删除
      removeTokenAndUserInfo()
      // 返回退出登录信息
      return response
    }
  },
  modules: {},
});
