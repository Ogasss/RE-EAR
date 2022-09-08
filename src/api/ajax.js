import axios from 'axios'
import NProgress from 'nprogress/nprogress.js'
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 20000,
})
//新建axios实例用于二次封装

service.interceptors.request.use((config)=>{
    NProgress.start()
    return config
},()=>{

})

const responseMessage = ''

service.interceptors.response.use((response)=>{
    NProgress.done()
    // console.log(response.data)
    return response.data
},(error)=>{
    NProgress.done();
    // alert("请求失败！错误为："+error.message)
    if(error.message == 'Request failed with status code 404'){
        responseMessage = '用户名不存在'
    }
    return new Promise(()=>{})
})

export default service