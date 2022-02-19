const initState = {
  name: null,
  saved: false,
  modified: false,
  id: null
}
const routeNameReducer = (state = initState, action) => {
  switch (action.type) {
  case 'SET_ROUTE_NAME': {
    const name = action.data
    return { ...state, name: name, modified: true }
  }
  case 'REMOVE_ROUTE_NAME': return { ...state, name: null, modified: true }
  case 'SAVE_ROUTE_TO_SERVER': {
    return {
      ...state,
      id: action.data,
      modified: false,
      saved: true
    }
  }
  case 'SET_MODIFIED': return { ...state, modified: true }
  case 'NEW_ROUTE': return initState
  default: return state
  }
}

export const setRouteName = name => {
  return {
    type: 'SET_ROUTE_NAME',
    data: name
  }
}

export const removeRouteName = () => {
  return { type: 'REMOVE_ROUTE_NAME' }
}

export const saveToServer = id => {
  return {
    type: 'SAVE_ROUTE_TO_SERVER',
    data: id
  }
}

export const setModified = () => {
  return { type: 'SET_MODIFIED' }
}

export const setNewRoute = () => {
  return { type: 'NEW_ROUTE' }
}

export default routeNameReducer
