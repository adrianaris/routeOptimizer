const locationsReducer = (state = [], action) => {
  switch(action.type) {
  case 'ADD_DEPOT':
    return action.data // TO DO
  case 'ADD_LOCATION': {
    if (state.some(loc => loc === action.data)) return state
    return [...state, action.data]
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

export const addDepot = coordinates => {
  return {
    type: 'ADD_DEPOT',
    data: coordinates
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
