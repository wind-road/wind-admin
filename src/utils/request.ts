// import { useAxios } from '@vueuse/integrations/useAxios';
import axios from 'axios'
import { useUserStore } from '@/stores/users'
// create an axios $http
const $http = axios.create({
  baseURL: '',
  withCredentials: false,
  timeout: 10000
  // loading: true,
  // 是否获取源数据
  // getSourceData: true
})

// request interceptor
$http.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    console.log(store.userInfo)
    if (store.userInfo.token) {
      config.headers.Authorization = store.userInfo.token
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
$http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error?.message)
  }
)

export default $http
