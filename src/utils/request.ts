import axios from 'axios'
import { getToken } from './token'

const baseURL = '/api'
// const baseURL = process.env.BASE_URL

const service = axios.create({
  baseURL,
  timeout: 5000
})

// 发起请求之前的拦截器
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.common.token = token
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// get请求处理
service.adornParams = function (params = {}, openDefultParams = true) {
  const defaults = {
    t: new Date().getTime() // 添加时间戳
  }
  return openDefultParams ? {
    ...params,
    ...defaults
  } : params
}

// post请求处理
service.adornData = function (data = {}, openDefultdata = true) {
  const defaults = {
    t: new Date().getTime() // 添加时间戳
  }
  return openDefultdata ? {
    ...data,
    ...defaults
  } : data
}

export default service
