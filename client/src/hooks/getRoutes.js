import { useState, useEffect } from 'react'
import axios from 'axios'

const getRoutes = url => {
  const [routes, setRoutes] = useState() 

  const getUserRoutes = async () => {
    const response = await axios.get(url) 
    return response.data
  }

  useEffect(() => {
    getUserRoutes().then(routes => setRoutes(routes))
  }, [])

  const addRoute = route  => {
    const newRoutes = routes.concat(route)
    setRoutes(newRoutes)
    return axios.post(url, route)
  }

  return [
    routes, addRoute
  ]
}

export default getRoutes
