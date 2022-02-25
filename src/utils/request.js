import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 20000
})

function errorHandler(errorResponse) {
  return Promise.reject(errorResponse)
}

instance.interceptors.request.use((config) => {
  return config
}, errorHandler)

instance.interceptors.response.use((response) => {
  return response
}, errorHandler)

export default instance
