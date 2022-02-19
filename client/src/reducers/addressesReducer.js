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
        key: Math.random(),
        jobDone: false
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
  case 'JOB_DONE': {
    const id = action.data.id
    const bool = action.data.bool
    const newState = { ...state, features: state.features.map(
      elem => {
        if (elem.id === id) {
          elem.jobDone = bool
        }
        return elem
      }
    )
    }
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

export const setJobDone = (id, bool) => {
  return {
    type: 'JOB_DONE',
    data: {
      id: id,
      bool: bool
    }
  }
}

export const clearLocations = () => {
  return {
    type: 'CLEAR_LOCATIONS'
  }
}

export default turfAddressesReducer
