import axios from 'axios'

let token = null
const loggedUser = window.localStorage.getItem('foxINCuser')
if (loggedUser) {
  token = `bearer ${JSON.parse(loggedUser).token}`
}

export const setToken = value => {
  token = `bearer ${value}`
}

const axiosLogged = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
})

axiosLogged.defaults.headers.common['Authorization'] = token

export default axiosLogged
