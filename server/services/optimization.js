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

//  const matrix = await getMatrix(coordinates)
  const order =  await callORtools(matrixExample)
  const orderedAddresslist = sorter(addresslist, order)
  const sortedCoord = sorter(coordinates, order)

  const route = await getRoute(sortedCoord)
  const routeGeoJSON = featureCollection([
    feature(route.trips[0].geometry)
  ])
  const waypoints = route.waypoints
  
  return { orderedAddresslist, routeGeoJSON, waypoints }
}

module.exports = optimize
