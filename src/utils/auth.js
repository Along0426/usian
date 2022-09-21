
const token_key = "token"
const UserInfo_key = "UserInfo"

// 设置token
export const setToken = (token) => {
    localStorage.setItem(token_key, token)
}

// 获取token
export const getToken = () => {
    return localStorage.getItem(token_key)
}

// 设置用户信息
export const setUserInfo = (UserInfo) => {
    localStorage.setItem(UserInfo_key, JSON.stringify(UserInfo))
}

// 获取用户信息
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(UserInfo_key) || "{}")
}

// 删除token和用户信息
export const removeTokenAndUserInfo = () => {
    localStorage.removeItem(token_key)
    localStorage.removeItem(UserInfo_key)
}

