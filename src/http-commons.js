import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://localhost:8080/api`, // change your port same as your backend
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8081',
    'content-type': 'application/json' // change your port same as your Vue.js
  }
})
