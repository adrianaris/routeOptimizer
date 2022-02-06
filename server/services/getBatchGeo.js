const axios = require('axios')
const config = require('../utils/config')
const url = `https://api.geoapify.com/v1/batch/geocode/search?apiKey=${config.GEOAPIFY_TOKEN}`

const getBatchGeo = async addresses => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
      const response = await axios.post(
        url,
        addresses,
        config
      )
      console.log('Job ID: ' + response.data.id)
      console.log('Job URL: ' + response.data.url)
      console.log('Job status: ' + response.data.status)
      const apiResponse = await getApiResponse(response.data.url)
      console.log(apiResponse.status)
      return apiResponse
  } catch (e) {
    console.log(e)
  }
}

const getApiResponse = async url => {
  try {
    const retries = 3
        for (let i = 0; i < retries; i++) {
          await delay(5)
          try {
            const response = await axios.get(url, { timeout: 1000 })
            if (response.status === 200) {
              return response
            } else if (response.status === 202) {
              console.log('data not ready', + i)
            }
          } catch(error) {
            console.log('cannot fetch data')
          }
        }
  } catch (e) {
    console.error(e)
  }
}

const delay = (s) => new Promise(resolve => setTimeout(resolve, s*1000))

module.exports = getBatchGeo
