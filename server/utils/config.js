require('dotenv').config()

const TOKEN = process.env.MAPBOX_TOKEN
const PORT = process.env.PORT

module.exports = { TOKEN, PORT }