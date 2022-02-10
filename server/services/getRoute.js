const axios = require('axios')
const config = require('../utils/config')

const getRoute = async coordinates => {
  const callSize = 25
  let numberOfCalls = Math.floor(coordinates.length / callSize)
  const remainder = coordinates.length % callSize
  if (remainder > 0) numberOfCalls++

  console.log(numberOfCalls)
  const route = {
    code: '',
    waypoints: [],
    routes: []
  }

  for (let i = 0; i < numberOfCalls; i++) {
    const apiRes = await apiCall(coordinates.slice(i * callSize, (i + 1) * callSize))
    route.code = apiRes.code
    route.waypoints = route.waypoints.concat(apiRes.waypoints)
    route.routes = route.routes.concat(apiRes.routes)
  }

  return route
}

const apiCall = async coordinates => {
  let coordString = ''
  
  for (let i in coordinates) {
    coordString = coordString + `${coordinates[i][0]},${coordinates[i][1]};`
  }
  //remove the last semicollon
  coordString = coordString.substring(0, coordString.length -1)

  const mapboxUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/` +
    `${coordString}` +
    `?access_token=${config.MAPBOX_TOKEN}`

  try {
    const apiResponse = await axios.get(mapboxUrl)
    return apiResponse.data
  } catch (e) {
    console.log('directions api failed with: ', e.name)
    console.error(e)
  }
}

module.exports = getRoute
