import axios from 'axios'
import axiosLogged from '../axiosConfig/axiosLogged'
const URL = '/api/user'

const login = async credentials => {
  const response = await axios.post(`${URL}/login`, credentials)
  return response.data
}

const register = async credentials => {
  const response = await axios.post(`${URL}/register`, credentials)
  return response.data
}

const updateU = async credentials => {
  const response = await axiosLogged.put('/user/update', credentials)
  return response.data
}

export default { login, register, updateU }
