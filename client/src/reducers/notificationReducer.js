const notificationReducer = (state = null, action) => {
  switch(action.type) {
  case 'SET_NOTIFICATION':
    return action.data
  case 'REMOVE_NOTIFICATION':
    return null
  default:
    return state
  }
}

var timerId
const delay = (ms) => new Promise(resolve => timerId = setTimeout(resolve, ms*1000))

export const setNotification = (content, timer) => {
  return async dispatch => {
    clearTimeout(timerId)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
    await delay(timer)
    dispatch({
      type: 'REMOVE_NOTIFICATION'
    })
  }
}
export default notificationReducer
