const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

setInterval(() => {
  http.get('http://foxinc-optimizerapi.herokuapp.com/')
}, 300000)

server.listen(config.PORT, () => {
  logger(`Server is running on port ${config.PORT}`)
})
