import axios from 'axios'

// 自定义错误信息提示内容
const exceptionMessage = {
    1000: "用户名或者密码发生错误"
}

import { Message } from "element-ui";
import store from "../store/index";

// 创建axios实例
const serveice = axios.create({
    // 请求地址
    // baseURL: process.env.VUE_APP_BASE_API,
    // 超时时间
    timeout: 5000
})

// 请求拦截
serveice.interceptors.request.use(function (config) {
    // 获取vuex的token
    const token = store.getters.token
    // 当token存在时，将token发送给后台
    if (token) config.headers.authorization = "Bearer" + token
    return config
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截
serveice.interceptors.response.use(function (response) {
    if (response.status < 400) {
        return response.data.data
    }

    if (response.status === 401) {
        return
    }

    _showError(response.data.code, response.data.message)


    return response
}, function (error) {
    return Promise.reject(error)
})

const _showError = (errorCode, message) => {
    let title
    title = exceptionMessage[errorCode] || message || "发生未知错误"
    Message.error(title)
}

const request = (options) => {
    options.method = options.method || "get"
    if (options.method.toLowerCase() === "get") {
        options.params = options.data || options.params
        delete options.data
    }

    serveice.defaults.baseURL = options.proxy || process.env.VUE_APP_BASE_API
    return serveice(options)
}

// 导出实例对象
export default request