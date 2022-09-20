import axios from 'axios'
// 创建axios实例
const serveice = axios.create({
    // 请求地址
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时时间
    timeout: 5000
})

// 请求拦截
serveice.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return "请求失败！"
})

// 响应拦截
serveice.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return "请求失败！"
})

// 导出实例对象
export default serveice