import axios from 'axios'
import axiosLogged from '../axiosConfig/axiosLogged'
const URL = `${process.env.REACT_APP_API_URL}/api/user`

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

const updatePass = async credentials => {
  const response = await axiosLogged.post('/user/updatePass', credentials)
  return response.data
}

const deleteAccount = async credentials => {
  const response = await axiosLogged.post('user/delete', credentials)
  return response.data
}

export default { login, register, updateU, updatePass, deleteAccount }
