import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use(req => {
  // let token = localStorage.getItem("token");
  // if(token) {
  //   req.headers.Authorization  = `Bearer ${token}`
  // }

  console.log('@app: ', process.env.VUE_APP_API_URL)

  return req
})

export default instance
