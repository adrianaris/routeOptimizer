const axios = require('axios')
const config = require('../utils/config')

const getRoute = async coordinates => {
  const callSize = 25
  let numberOfCalls = Math.floor(coordinates.length / callSize)
  const remainder = coordinates.length % callSize
  if (remainder > 0) numberOfCalls++

  const route = {
    code: '',
    waypoints: [],
    trips: [{
      distance: 0,
      duration: 0,
      geometry: {
        type: 'LineString',
        coordinates: []
      },
      legs: [],
      weight: 0,
      weight_name: 'routability'
    }]
  }

  for (let i = 0; i < numberOfCalls; i++) {
    const apiRes = await apiCall(coordinates.slice(i * callSize, (i + 1) * callSize))
    route.code = apiRes.code
    route.waypoints = route.waypoints.concat(apiRes.waypoints)
    route.trips[0] = {
      ...route.trips[0],
      distance: route.trips[0].distance + apiRes.routes[0].distance,
      duration: route.trips[0].duration + apiRes.routes[0].duration,
      geometry: {
        ...route.trips[0].geometry,
        coordinates: [
          ...route.trips[0].geometry.coordinates,
          ...apiRes.routes[0].geometry.coordinates
        ]
      },
      legs: route.trips[0].legs.concat(apiRes.routes[0].legs),
      weight: route.trips[0].weight + apiRes.routes[0].weight
    }
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
    `?access_token=${config.MAPBOX_TOKEN}` +
    `&geometries=geojson` +
    `&overview=full`

  try {
    const apiResponse = await axios.get(mapboxUrl)
    return apiResponse.data
  } catch (e) {
    console.log('directions api failed with: ', e.name)
    console.error(e)
  }
}

module.exports = getRoute
