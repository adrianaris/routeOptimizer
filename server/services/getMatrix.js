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

  const url = `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/` +
    `${coordinates /**long,lat;*/}` +
    `?annotations=distance` +
    `&approaches=${approaches/** unrestricted or curb */}` +
    `&access_token=${config.MAPBOX_TOKEN}`

  const apiResponse = await axios.get(url)
  return apiResponse.data
}

module.exports = getMatrix
