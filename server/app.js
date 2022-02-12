const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const optimRouter = require('./controllers/optimizationRouter')
const registerRouter = require('./controllers/registerRouter')
const loginRouter = require('./controllers/loginRouter')
const config = require('./utils/config')
const errors = require('./utils/errors')
const middleware = require('./utils/middleware')
const morgan = require('morgan')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  logger('connected to MongoDB')
}).catch(error => {
  logger('error connecting to MongoDB', error.message)
})

app.use(cors())
app.use(express.json())

app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

app.use('/api/optim', optimRouter)
app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)

morgan.token('POST', req => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POST'))
app.use(errors.errorHandler)
app.use(errors.unknownEndpoint)

module.exports = app
