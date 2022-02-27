import routesServices from '../services/routes'

const months = ['jan', 'feb', 'march', 'april',
  'mai', 'june', 'july', 'aug',
  'sept', 'oct', 'nov', 'dec']
const date = new Date()
const initRouteName = `route ${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`

const initState = {
  name: initRouteName,
  modified: false,
}
const routeNameReducer = (state = initState, action) => {
  switch (action.type) {
  case 'SET_ROUTE_NAME': {
    const name = action.data
    const newState = state
    newState.name = name
    newState.modified = state.routeID ? true : false
    return newState
  }
  case 'REMOVE_ROUTE_NAME': {
    const newState = state
    newState.name = null
    return newState
  }
  case 'SAVE_ROUTE_TO_SERVER': {
    const newState = state
    newState.routeID = action.data
    newState.modified = false
    return newState
  }
  case 'UPDATE_ROUTE': {
    const newState = state
    newState.modified = false
    return newState
  }
  case 'SET_OLD_ROUTE': {
    const data = action.data
    return {
      name: data.name,
      routeID: data.routeID,
      modified: false
    }
  }
  case 'NEW_ROUTE': return initState
  /**
   * sync this reducer with all others in order to auto set modified: true
   */
  case 'ADD_LOCATION': return { ...state, modified: state.routeID ? true : false }
  case 'REMOVE_LOCATION': return { ...state, modified: state.routeID ? true : false }
  case 'OPTIMIZE_LOCATIONS': return { ...state, modified: state.routeID ? true : false }
  case 'JOB_DONE': return { ...state, modified: state.routeID ? true : false }
  case 'CLEAR_LOCATIONS': return { ...state, modified: state.routeID ? true : false }
  case 'REMOVE_END': return { ...state, modified: state.routeID ? true : false }
  case 'REMOVE_START': return { ...state, modified: state.routeID ? true : false }
  case 'ADD_END': return { ...state, modified: state.routeID ? true : false }
  case 'ADD_START': return { ...state, modified: state.routeID ? true : false }
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

export const saveRoute = route => {
  return async dispatch => {
    try {
      const response = await routesServices.saveRoute(route)
      console.log(response)
      dispatch({
        type: 'SAVE_ROUTE_TO_SERVER',
        data: response
      })
    } catch (error) {
      console.log('network issues: route is not saved')
    }
  }
}

export const updateRoute = route => {
  return async dispatch => {
    try {
      await routesServices.updateRoute(route)
      dispatch({
        type: 'UPDATE_ROUTE'
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const setNewRoute = () => {
  return { type: 'NEW_ROUTE' }
}

export const setOldRouteName = data => {
  return {
    type: 'SET_OLD_ROUTE',
    data: data
  }
}

export default routeNameReducer
