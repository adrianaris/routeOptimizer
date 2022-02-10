const getMatrix = require('./getMatrix')
const callORtools = require('./callORtools')
const addressParser = require('../utils/addressParser')


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
  
  console.log(order)
  let orderedAddresslist = []
  for (let i in order) {
    orderedAddresslist.push(addresslist[order[i]])
  }

  console.log(orderedAddresslist)
  return orderedAddresslist
}

module.exports = optimize
