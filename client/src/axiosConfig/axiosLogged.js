import axios from 'axios'

const loggedUser = window.localStorage.getItem('foxINCuser')
const token = loggedUser ? `bearer ${JSON.parse(loggedUser).token}` : null

console.log(token)
const axiosLogged = axios.create({
  baseURL: 'http://localhost:4000/api'
})

axiosLogged.defaults.headers.common['Authorization'] = token

export default axiosLogged
