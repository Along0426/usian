
import request from '../utils/request'


const Getlist = (page = 1, size = 10, data = {}) => {
    return request({
        url: `/member/list/search/${page}/${size}`,
        method: "POST",
        data: data
    })
}

export default {
    Getlist
}