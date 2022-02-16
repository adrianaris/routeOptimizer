import axios from 'axios'
const URL = '/api/user'

const login = async credentials => {
  const response = await axios.post(`${URL}/login`, credentials)
  return response.data
}

const register = async credentials => {
  const response = await axios.post(`${URL}/register`, credentials)
  return response.data
}

export default { login, register }
