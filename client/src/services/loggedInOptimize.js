import axiosLogged from '../axiosConfig/axiosLogged'

const logedOptimize = async addresslist => {
  try {
    const response = await axiosLogged.post('/optim', addresslist)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default logedOptimize
