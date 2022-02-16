import { featureCollection } from '@turf/turf'

const route = featureCollection([])

const routeReducer = (state = route, action) => {
  switch (action.type) {
  case 'SET_ROUTE':
    return action.data
  case 'REMOVE_ROUTE': {
    return route
  }
  default:
    return state
  }
}

export const createRoute = route => {
  return {
    type: 'SET_ROUTE',
    data: route
  }
}

export const removeRoute = () => {
  return { type: 'REMOVE_ROUTE' }
}

export default routeReducer
