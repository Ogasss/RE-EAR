import request from './ajax'
//引入ajax

export const loginTel = (id) =>{
    return request({
        url:'/userList/'+id,
        method:'get'
    })
}