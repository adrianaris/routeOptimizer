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

export const addStart = (coordinates) => {
  return {
    type: 'ADD_START',
    data: coordinates
  }
}

export const addEnd = (coordinates) => {
  return {
    type: 'ADD_END',
    data: coordinates
  }
}

export const removeStart = () => {
  return {
    type: 'REMOVE_START'
  }
}

export const removeEnd = () => {
  return {
    type: 'REMOVE_END'
  }
}

export default startendReducer
