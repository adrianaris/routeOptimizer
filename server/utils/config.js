require('dotenv').config()

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN
const PORT = process.env.PORT
const GEOAPIFY_TOKEN = process.env.GEOAPIFY_TOKEN

module.exports = { MAPBOX_TOKEN, PORT, GEOAPIFY_TOKEN }
