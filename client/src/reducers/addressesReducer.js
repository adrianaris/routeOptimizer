import {
  featureCollection as turfFeatureCollection,
} from '@turf/turf'

const turfAddressesReducer = (state = turfFeatureCollection([]), action) => {
  switch(action.type) {
  case 'ADD_LOCATION': {
    const newState = { ...state }
    action.data.forEach(elem => {
      let point = { ...elem,
        orderTime: Date.now(),
        key: Math.random()
      }
      newState.features.push(point)
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
  case 'CLEAR_LOCATIONS': {
    return turfFeatureCollection([])
  }
  default:
    return state
  }
}

export const addLocation = coordinates => {
  return {
    type: 'ADD_LOCATION',
    data: coordinates
  }
}

export const removeLocation = id => {
  return {
    type: 'REMOVE_LOCATION',
    data: id
  }
}

export const optimLocations = orderedIndexArray => {
  return {
    type: 'OPTIMIZE_LOCATIONS',
    data: orderedIndexArray
  }
}

export const clearLocations = () => {
  return {
    type: 'CLEAR_LOCATIONS'
  }
}

export default turfAddressesReducer
