const googleUrlReducer = (state = '', action) => {
  switch(action.type) {
  case 'CREATE_GOOGLE_URL': {
    const url = `https://www.google.com/maps/dir/?api=1&waypoints=
      ${encodeURI(action.data.join('|'))}`
    return url
  }
  default:
    return state
  }
}

export const createGoogleUrl = waypoints => {
  return {
    type: 'CREATE_GOOGLE_URL',
    data: waypoints
  }
}

export default googleUrlReducer
