import Vue from 'vue'
import axios from 'axios'
import {
  SessionStorage,
  Notify
} from 'quasar'

let token = ''
if (SessionStorage.has('token')) {
  token = SessionStorage.getItem('token')
}

axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

if (process.env == 'prod') {
  axios.defaults.baseURL = process.env.API;
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.prototype.$axios = axios
