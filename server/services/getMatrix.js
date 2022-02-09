const axios = require('axios')
const config = require('../utils/config')
const matrixUtils = require('../utils/matrixUtils')

const getMatrix = async addresses => {
  const callSize = 12 //mapbox call size / 2
  // empty matrix to be filled by our function
  let matrix = new Array(addresses.length).fill([])
  // slice the address list into manageabel chuncks
  const slicedAddressList = matrixUtils.addressListSlicer(addresses, callSize)

  for (let i in slicedAddressList) {
    for (let j in slicedAddressList) {
      const apiRes = await callApi(
        slicedAddressList[i].concat(slicedAddressList[j]), // i sources j destinations
        slicedAddressList[i].length // helper to construct the url
      )
      // construct the matrix from the api responses
      matrix = matrixUtils.matrixFiller(apiRes.distances, matrix, i * callSize)
    }
  }
  
  matrix = matrix.map(row => row.map(item => parseInt(item * 10)))

  return matrix

  //const osrmUrl = `http://router.project-osrm.org/table/v1/driving/` +
  //  `${coordinates}` +
  //  `?annotations=distance`

}

const callApi = async (addresses, sourceListLength) => {
  let coordinates = ''
  let approaches = ''
  let stopside = ''
  let sources = ''
  let destinations = ''
  for (let i in addresses) {
    coordinates = coordinates + `${addresses[i].lon},${addresses[i].lat};`
    if (addresses[i].stopside) {
      stopside = addresses[i].stopside
    } else {
      stopside = 'unrestricted'
    }
    approaches = approaches + `${stopside};`
    if (i < sourceListLength) {
      sources = sources + `${i};`
    } else {
      destinations = destinations + `${i};`
    }

  }
  coordinates = coordinates.substring(0, coordinates.length - 1)
  approaches = approaches.substring(0, approaches.length - 1)
  sources = sources.substring(0, sources.length - 1)
  destinations = destinations.substring(0, destinations.length - 1)

  const mapboxUrl = `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/` +
    `${coordinates /**long,lat;*/}` +
    `?sources=${sources}` +
    `&destinations=${destinations}` +
    `&annotations=distance` +
    `&approaches=${approaches/** unrestricted or curb */}` +
    `&access_token=${config.MAPBOX_TOKEN}`

  try {
    const apiResponse = await axios.get(mapboxUrl)
    console.log(apiResponse.data)
    return apiResponse.data
  } catch (e) {
    console.log('matrix api failed')
    console.log(e)
  }


}

module.exports = getMatrix
