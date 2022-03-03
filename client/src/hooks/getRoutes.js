/**
 * I'm not yet sure how I should implement
 * this without infringing tos
 */
import { useState, useEffect } from 'react'
import axiosLogged from '../axiosConfig/axiosLogged'
import routesServices from '../services/routes'

const getRoutes = url => {
  const [routes, setRoutes] = useState([])

  const getUserRoutes = async () => {
    const response = await axiosLogged.get(url)
    return response.data
  }

  const rmRoute = id => {
    routesServices.deleteRoute(id)
    setRoutes(routes.filter(route => {
      if (route.id !== id) return route
    }))
  }

  /**
   * This is called like this and not actualy dispatched to redux
   * because those routes are only displayed in the user panel
   * and from there can be dispatched if the user wants to revisit
   * that specific route
   */
  useEffect(() => {
    getUserRoutes().then(routes => setRoutes(routes))
  }, [])


  return [
    routes, rmRoute
  ]
}

export default getRoutes
