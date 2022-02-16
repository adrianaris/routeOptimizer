const getMatrix = require('./getMatrix')
const callORtools = require('./callORtools')
const addressParser = require('../utils/addressParser')
const sorter = require('../utils/arraySorter')
const getRoute = require('./getRoute')
const { featureCollection, feature } = require('@turf/turf')

const matrixExample = require('../ORtools/exampleMatrixResult')

/**
 * service can be 'mapbox', 'geoapify' etc.
 */
const optimize = async (addresslist, service) => {
  let coordinates = []
  if (service === 'mapbox') {
    coordinates = addressParser.mapboxParser(addresslist)
  } else if (service === 'geoapify') {
    coordinates = addressParser.geoapifyParser(addresslist)
  } else return console.log('something wrong with parsers')

  const matrix = await getMatrix(coordinates)
  const order =  await callORtools(matrix)
  const orderedAddresslist = sorter(addresslist, order)
  const sortedCoord = sorter(coordinates, order)

  const route = await getRoute(sortedCoord)
  const routeGeoJSON = {
    ...featureCollection([
    feature({ ...route.trips[0].geometry })
    ]),
    distance: route.trips[0].distance,
    duration: route.trips[0].duration
  }
 const waypoints = route.waypoints
 .sort((a, b) => a.waypoint_index - b.waypoint_index)
 .map(({ location }) => location[1] + ',' + location[0])

  return { orderedAddresslist, routeGeoJSON, waypoints }
}

module.exports = optimize
