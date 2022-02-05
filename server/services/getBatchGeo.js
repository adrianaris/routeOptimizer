const axios = require('axios')
const token = require('./utils/config').GEOAPIFY_TOKEN
const url = `https://api.geoapify.com/v1/batch/geocode/search?apiKey=${token}`

const addresses = [
// TO DO
]
axios.post(url, // TO DO
