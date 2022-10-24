import { featureCollection } from '@turf/turf'

const route = featureCollection([])

const routeReducer = (state = route, action) => {
  switch (action.type) {
  case 'SET_ROUTE_TRAJECTORY':
    return action.data
  case 'REMOVE_ROUTE_TRAJECTORY': {
    return route
  }
  default:
    return state
  }
}

export const createRoute = route => {
  return {
    type: 'SET_ROUTE_TRAJECTORY',
    data: route
  }
}

export const removeRoute = () => {
  return { type: 'REMOVE_ROUTE_TRAJECTORY' }
}

export default routeReducer
