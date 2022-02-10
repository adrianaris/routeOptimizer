const getBatchGeo = require('./getBatchGeo')
const getMatrix = require('./getMatrix')
const callORtools = require('./callORtools')
const addressParser = require('../utils/addressParser')

/**
 * service can be 'mapbox', 'geoapify' etc.
 */
const optimize = async (addresslist, service) => {
  if (service === 'mapbox') {
    const coordinates = addressParser.mapboxParser(addresslist)
  } else if (service === 'geoapify') {
    const coordinates = addressParser.geoapifyParser(addresslist)
  }

  const matrix = await getMatrix(coordinates)
  const order = callORtools(matrix)
  
  const newAddresslist = []
  for (let i in order) {
    newAddresslist.push(addresslist[order[i]])
  }

  return newAddresslist
}

module.exports = optimize
