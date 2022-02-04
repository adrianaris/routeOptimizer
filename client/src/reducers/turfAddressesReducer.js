import {
  featureCollection as turfFeatureCollection,
  point as turfPoint
} from '@turf/turf'

/**
 * This reducer is synchronized with locationsReducer because
 * it shares the same data
 * We dont have one reducer because the data in this one if formated
 * such that it's not usefull for displaying purposes
 */

const turfAddressesReducer = (state = turfFeatureCollection([]), action) => {
  switch(action.type) {
  case 'ADD_LOCATION': {
    const newState = { ...state }
    action.data.forEach(elem => {
      let point = turfPoint(elem.center, {
        orderTime: Date.now(),
        key: Math.random()
      })
      newState.features.push({ ...point, id: elem.id })
    })
    return newState
  }
  case 'REMOVE_LOCATION': {
    const id = action.data
    const newState = { ...state, features: state.features.filter(
      point => point.id !== id
    ) }
    return newState
  }
  case 'OPTIMIZE_LOCATIONS': {
    const array = action.data
    let orderedLocations = []
    for (let i in array) {
      orderedLocations.push(state.features[array[i]])
    }
    const newState = { ...state, features: orderedLocations }
    return newState
  }
  default:
    return state
  }
}

export default turfAddressesReducer
