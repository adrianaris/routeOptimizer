import axios from 'axios'

const loggedUser = window.localStorage.getItem('foxINCuser')
const token = loggedUser ? `bearer ${JSON.parse(loggedUser).token}` : null

const axiosLogged = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
})

axiosLogged.defaults.headers.common['Authorization'] = token

export default axiosLogged
