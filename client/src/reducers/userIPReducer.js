import getUserData from '../services/getUserData'

const userDataReducer = (state='', action) => {
  switch(action.type) {
  case 'GET_USER_DATA': {
    return action.data
  }
  default:
    return state
  }
}

export const getUserIPaction = () => {
  return async dispatch => {
    try {
      const data = await getUserIP()
      dispatch({
        type: 'GET_USER_DATA',
        data: data
      })
    } catch (error) {
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('ERROR:', error.message)
      }
    }
  }
}
export default userDataReducer
