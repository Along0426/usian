// 调用用户信息接口

import request from "../utils/request";

export const userInfo = () => {
    return request({
        url: `/admin/getUserInfo`,
        method: "GET",
    })
}

export const logout = () => {
    return request({
        url: "/admin/logout",
        method: "POST"
    })
}