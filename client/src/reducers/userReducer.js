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
      window.localStorage.setItem('foxINCUser', JSON.stringify(user))
    } catch (e) {
      console.log('registration failed', e)
    }
  }
}

export const Login = credentials => {
  return async dispatch => {
    try {
      const user = await userServices.login(credentials)
      console.log(user)
      dispatch({
        type: 'LOG_IN',
        data: user
      })
      window.localStorage.setItem(
        'foxINCuser', JSON.stringify(user)
      )
      dispatch(setNotification(`welcome ${user.username}`, 10))
    } catch (e) {
      console.log(e)
      dispatch(setNotification(`${e}`, 10))
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
