import axiosLogged from '../axiosConfig/axiosLogged'
const url = '/routes'

/**
 * save function
 */
const saveRoute = async route => {
  const response = await axiosLogged.post(`${url}/save`, route)
  return response.data
}

export default { saveRoute }
