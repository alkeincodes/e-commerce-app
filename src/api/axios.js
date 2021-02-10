import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://e-commerce.test'
})

instance.interceptors.request.use(req => {
  // let token = localStorage.getItem("token");
  // if(token) {
  //   req.headers.Authorization  = `Bearer ${token}`
  // }

  return req
})

export default instance
