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
    return {
      ...state,
      name: name,
      modified: state.routeID ? true : false
    }
  }
  case 'REMOVE_ROUTE_NAME': return {
    ...state,
    name: null,
  }
  case 'SAVE_ROUTE_TO_SERVER': {
    return {
      ...state,
      routeID: action.data,
      modified: false,
    }
  }
  case 'UPDATE_ROUTE': {
    return {
      ...state,
      modified: false
    }
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
        routeID: response
      })
    } catch (error) {
      console.log('network issues: route is not saved')
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
