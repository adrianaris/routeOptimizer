const mapReducer = (state = null, action) => {
  switch (action.type) {
  case 'INIT_MAP': return action.data
  default: return state
  }
}

export const initMap = map => {
  return {
    type: 'INIT_MAP',
    data: map
  }
}

export default mapReducer
