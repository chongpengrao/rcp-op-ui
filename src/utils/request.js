import axios from 'axios'

const http = axios.create({
  baseUrl: '/rcp-op',
  timeout: 1000*180,
  withCredentials: true
})

export default http