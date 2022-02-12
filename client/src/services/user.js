import axios from 'axios'
const loginUrl = 'http://localhost:4000/api/login'
const registerUrl = '/api/register'

const login = async credentials => {
  const response = await axios.post(loginUrl, credentials)
  return response.data
}

const register = async credentials => {
  const response = await axios.post(registerUrl, credentials)
  return response.data
}

export default { login, register }
