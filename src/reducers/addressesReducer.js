import {
  featureCollection as turfFeatureCollection,
} from '@turf/turf'

const turfAddressesReducer = (state = turfFeatureCollection([]), action) => {
  switch(action.type) {
  case 'ADD_LOCATION': {
    const newState = { ...state }
    action.data.forEach(elem => {
      let point = { ...elem,
        orderTime: elem.orderTime ? elem.orderTime : Date.now(),
        key: elem.key ? elem.key : Math.random(),
        jobDone: elem.jobDone ? elem.jobDone : false
      }
      newState.features.push(point)
    })
    return newState
  }
  case 'REMOVE_LOCATION': {
    const newState = { ...state, features: state.features.filter(
      (elem, index) => {
        if (index !== action.data) return elem
      }
    ) }
    return newState
  }
  case 'OPTIMIZE_LOCATIONS': {
    const array = action.data
    let orderedLocations = []
    for (let i in array) {
      orderedLocations.push(state.features.filter(elem => elem.jobDone === false)[array[i]])
    }
    const newState = { ...state, features: state.features.filter(
      elem => elem.jobDone === true
    ).concat(orderedLocations)
    }
    return newState
  }
  case 'JOB_DONE': {
    const rindex = action.data.index
    const bool = action.data.bool
    const newState = { ...state, features: state.features.map(
      (elem, index) => {
        if (index === rindex) {
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

export const removeLocation = index => {
  return {
    type: 'REMOVE_LOCATION',
    data: index
  }
}

export const optimLocations = orderedIndexArray => {
  return {
    type: 'OPTIMIZE_LOCATIONS',
    data: orderedIndexArray
  }
}

export const setJobDone = (index, bool) => {
  return {
    type: 'JOB_DONE',
    data: {
      index: index,
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
