import axios from 'axios'

const loggedUser = window.localStorage.getItem('foxINCuser')
const token = loggedUser ? `bearer ${JSON.parse(loggedUser).token}` : null

const axiosLogged = axios.create({
  baseURL: '/api'
})

console.log(token)
axiosLogged.defaults.headers.common['Authorization'] = token

export default axiosLogged
