import axios from "axios";
import router from "../admin/src/router";

const http = axios.create({
  baseURL: 'http://localhost:3000/user/api'
});


//增加中间授权，用户对应不上不能操作数据
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


//服务器错误校验 （axios 相应拦截）
http.interceptors.response.use(res => {
  return res
}, err => {
  console.log(err.response.data.message)
  return Promise.reject(err)
})


export default http;