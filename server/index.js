const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const errors = require('./utils/errors')
const logger = require('./utils/logger')
const optimRouter = require('./controllers/optimizationRouter')


app.use(express.json())
app.use(cors())
app.use('/api/optim', optimRouter)

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger(`Server is running on port ${config.PORT}`)
})

app.use(errors.errorHandler)
app.use(errors.unknownEndpoint)
