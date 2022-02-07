const axios = require('axios')
const config = require('../utils/config')

const getMatrix = async addresses => {
  let coordinates = ''
  let approaches = ''
  let stopside = ''
  for (let i in addresses) {
    coordinates = coordinates + `${addresses[i].lon},${addresses[i].lat};`
    if (addresses[i].stopside) {
      stopside = addresses[i].stopside
    } else {
      stopside = 'unrestricted'
    }
    approaches = approaches + `${stopside};`
  }
  coordinates = coordinates.substring(0, coordinates.length - 1)
  approaches = approaches.substring(0, approaches.length -1)

  /**
   * apparently the 25 coordinates limit is a big constraint
   * I have to find an alternative to mapbox and for the moment
   * osrm seams to be the answere
   */

  const mapboxUrl = `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/` +
    `${coordinates /**long,lat;*/}` +
    `?annotations=distance` +
    `&approaches=${approaches/** unrestricted or curb */}` +
    `&access_token=${config.MAPBOX_TOKEN}`

  const osrmUrl = `http://router.project-osrm.org/table/v1/driving/` +
    `${coordinates}` +
    `?annotations=distance`

  try {
    const apiResponse = await axios.get(osrmUrl)
    return apiResponse.data
  } catch (e) {
    console.log('matrri api failed')
  }
}

module.exports = getMatrix
