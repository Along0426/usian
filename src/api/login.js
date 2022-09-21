// 调用登录接口

import request from "../utils/request";

export const PostLogin = (data = {}) => {
    return request({
        url: "/admin/login",
        method: "POST",
        data
    })
}
