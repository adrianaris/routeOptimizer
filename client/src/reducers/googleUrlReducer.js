const googleUrlReducer = (state = '', action) => {
  switch(action.type) {
  case 'CREATE_GOOGLE_URL': {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${action.data.origin}&destination=${action.data.destination}&waypoints=
      ${encodeURI(action.data.waypoints.join('|'))}`
    return url
  }
  case 'REMOVE_GOOGLE_URL': {
    return ''
  }
  default:
    return state
  }
}

export const createGoogleUrl = waypoints => {
  const origin = waypoints[0]
  const destination = waypoints[waypoints.length - 1]
  const intWaypoints = waypoints.slice(1, -1)
  return {
    type: 'CREATE_GOOGLE_URL',
    data: {
      waypoints: intWaypoints,
      origin: origin,
      destination: destination
    }
  }
}

export const removeGoogleUrl = () => {
  return {
    type: 'REMOVE_GOOGLE_URL'
  }
}

export default googleUrlReducer
