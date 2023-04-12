import userServices from '../services/user'
import routesServices from '../services/routes'
import { setNotification } from './notificationReducer'
import axiosLogged from '../axiosConfig/axiosLogged'

const setToken = value => {
  const token = `bearer ${value}`
  axiosLogged.defaults.headers.common['Authorization'] = token
}

const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'REGISTER': return action.data
  case 'LOG_IN': return action.data
  case 'UPDATE_USER': return action.data
  case 'LOG_OUT': return null
  case 'ADD_ROUTE': {
    const routes = state.routes.concat(action.data)
    return { ...state, routes: routes }
  }
  case 'REMOVE_ROUTE': {
    const routes = state.routes.filter(r => r.id !== action.data)
    return { ...state, routes: routes }
  }
  case 'CHANGE_ROUTE': {
    const routes = state.routes.map(r => {
      if (r.name === action.data.name) {
        r = action.data
      }
      return r
    })

    return { ...state, routes: routes }
  }
  default: return state
  }
}

export const Register = credentials => {
  return async dispatch => {
    try {
      const user = await userServices.register(credentials)
      dispatch({
        type: 'REGISTER',
        data: user,
      })
      dispatch(setNotification(`welcome ${user.name}`, 10))
      window.localStorage.setItem('foxINCuser', JSON.stringify(user))
      setToken(user.token)
    } catch (error) {
      if (!error.response) dispatch(setNotification(`${error.message}`, 10))
      dispatch(setNotification(`${error.response.data.error}`, 10))
    }
  }
}

export const Login = credentials => {
  return async dispatch => {
    try {
      const user = await userServices.login(credentials)
      dispatch({
        type: 'LOG_IN',
        data: user
      })
      window.localStorage.setItem(
        'foxINCuser', JSON.stringify(user)
      )
      dispatch(setNotification(`welcome ${user.name}`, 10))
      setToken(user.token)
    } catch (error) {
      if (!error.response) dispatch(setNotification(`${error.message}`, 10))
      dispatch(setNotification(`${error.response.data.error}`, 10))
    }
  }
}

export const UpdateU = credentials => {
  return async dispatch => {
    try {
      const user =  await userServices.updateU(credentials)
      dispatch({
        type: 'UPDATE_USER',
        data: user
      })
      window.localStorage.removeItem('foxINCuser')
      window.localStorage.setItem('foxINCuser', JSON.stringify(user))
      dispatch(setNotification('update successful', 5))
    } catch (error) {
      console.error(error)
      dispatch(setNotification('update failed', 5))
    }
  }
}

export const Logout = () => {
  return dispatch => {
    window.localStorage.removeItem('foxINCuser')
    dispatch({
      type: 'LOG_OUT'
    })
  }
}

export const RemoveRoute = id => {
  return async dispatch => {
    try {
      await  routesServices.deleteRoute(id)
      dispatch({
        type: 'REMOVE_ROUTE',
        data: id
      })
    } catch (error) {
      console.error(error)
      dispatch(setNotification('Failed to delete route', 10))
    }
  }
}

export const AddRoute = route => {
  return {
    type: 'ADD_ROUTE',
    data: route
  }
}

export const ChangeRoute = route => {
  return {
    type: 'CHANGE_ROUTE',
    data: route
  }
}

export default userReducer
