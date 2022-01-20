const startendReducer = (state = { start: {}, end: {} }, action) => {
  switch(action.type) {
  case 'ADD_START': {
    return { ...state, start: action.data }
  }
  case 'ADD_END': {
    return { ...state, end: action.data }
  }
  case 'REMOVE_START': {
    return { ...state, start: {} }
  }
  case 'REMOVE_END': {
    return { ...state, end: {} }
  }
  default:
    return state
  }
}

export default startendReducer
