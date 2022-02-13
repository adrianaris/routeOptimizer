import axios from 'axios'

let token

export const setToken = newToken => {
  token = `bearer ${newToken}`
  console.log(token)
}

const logedOptimize = async addresslist => {
  const config = {
    headers: { Authorization: token },
  }
  try {
    console.log('before post')
    const response = await axios.post('/api/optim', addresslist, config)
    console.log('after post')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default logedOptimize
