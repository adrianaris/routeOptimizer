import axios from 'axios'

const token = process.env.REACT_APP_MAPBOX_TOKEN

export const getDepot = async (lat, long) => {
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lat},${long}.json?access_token=${token}`)
    return response.data.features[0]
  } catch (error) {
    console.log(error)
  }
}
