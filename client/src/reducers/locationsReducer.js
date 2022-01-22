const locationsReducer = (state = [], action) => {
  switch(action.type) {
  case 'ADD_LOCATION': {
    return [...state, ...action.data]
  }
  case 'REMOVE_LOCATION': {
    const id = action.data
    return state.filter(loc => loc.id !== id)
  }
  case 'OPTIMIZE_LOCATIONS':{
    const array = action.data
    let orderedLocations = []
    for (let i in array) {
      orderedLocations.push(state[array[i]])
    }

    return orderedLocations
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

export default locationsReducer
