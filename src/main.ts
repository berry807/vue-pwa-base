import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios, { AxiosInstance } from 'axios'

const app = createApp(App)
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

app.provide('axios', apiClient)
app.use(router)
app.mount('#app')
