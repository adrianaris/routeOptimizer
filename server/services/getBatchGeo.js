const axios = require('axios')
const config = require('../utils/config')
const url = `https://api.geoapify.com/v1/batch/geocode/search?apiKey=${config.GEOAPIFY_TOKEN}`

const getBatchGeo = async addresses => {
  try {
    const retries = 5 
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 1000
    }
    for (let i=0; i < retries; i++) {
      try {
        const response = await axios.post(
          url,
          addresses,
          config
        )
        if (response) {
          console.log('Job ID: ' + response.data.id)
          console.log('Job URL: ' + response.data.url)
          return response.data
        } else {
          console.log('cannot fetch data')
        }
      } catch(error) {
        console.log(error)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = getBatchGeo
