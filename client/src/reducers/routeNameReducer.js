const routeNameReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_ROUTE_NAME': return action.data
  case 'REMOVE_ROUTE_NAME': return null
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

export default routeNameReducer
