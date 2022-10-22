const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const optimRouter = require('./controllers/optimizationRouter')
const userRouter = require('./controllers/userRouter')
const addressRouter = require('./controllers/addressRouter')
const routeRouter = require('./controllers/routeRouter')
const config = require('./utils/config')
const errors = require('./utils/errors')
const middleware = require('./utils/middleware')
const morgan = require('morgan')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
}).then(() => {
  logger('connected to MongoDB')
}).catch(error => {
  logger('error connecting to MongoDB', error.message)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json({limit: '100mb'})) //100mb because express has 1mb default limit(I think)

app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

app.use('/api/user', userRouter)
app.use('/api/optim', optimRouter)
app.use('/api/address', addressRouter)
app.use('/api/routes', routeRouter)

morgan.token('POST', req => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POST'))
app.use(errors.errorHandler)
app.use(errors.unknownEndpoint)

module.exports = app
