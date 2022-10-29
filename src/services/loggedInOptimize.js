import axiosLogged from '../axiosConfig/axiosLogged'

const logedOptimize = async addresslist => {
  try {
    const response = await axiosLogged.post('/optim', addresslist)
    return response.data
  } catch (error) {
    throw error.message
  }
}

export default logedOptimize
