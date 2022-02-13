import userServices from '../services/user'
import { setNotification } from './notificationReducer'

const loggedUser = window.localStorage.getItem('foxINCuser')
const initState = loggedUser ? JSON.parse(loggedUser) : null

const userReTucer = (state = initState, action) => {
  switch (action.type) {
  case 'REGISTER': return action.data
  case 'LOG_IN': return action.data
  case 'LOG_OUT': return null
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
      window.localStorage.setItem('foxINCUser', JSON.stringify(user))
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
    } catch (error) {
      if (!error.response) dispatch(setNotification(`${error.message}`, 10))
      dispatch(setNotification(`${error.response.data.error}`, 10))
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

export default userReTucer
