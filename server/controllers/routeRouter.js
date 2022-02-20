const routeRouter = require('express').Router()
const Route = require('../models/route')
const User = require('../models/user')
const Address = require('../models/address')
const jwt = require('jsonwebtoken')


routeRouter.get('/', async (request, response) =>{
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const routes = await Route.find({ user: decodedToken.id })
    .populate('addresses')
    .populate('DEPOT.start')
    .populate('DEPOT.end')
    .populate('user')

  response.json(routes)
})

routeRouter.post('/save', async (request, response) => {
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing  or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const start = await Address.findOne({ placeId: request.body.DEPOT.start.id })
  const end = await Address.findOne({ placeId: request.body.DEPOT.end.id })
  let addresses = []
  for (let i in request.body.addresses) {
    const address = await Address.findOne({ placeId: request.body.addresses[i].id })
    addresses = addresses.concat({
      address: address._id,
      jobDone: request.body.addresses[i].jobDone,
      orderTime: request.body.addresses[i].orderTime
    })
  }

  const newRoute = new Route({
      name: request.body.name,
      DEPOT: {
        start: start._id,
        end: end._id
      },
      addresses: addresses,
      user: user._id,
      route: request.body.route
  })

  const savedRoute = await newRoute.save()
  
  user.routes = user.routes.concat(savedRoute._id)
  await User.findByIdAndUpdate(user._id, user)

  response.status(201).json(savedRoute)
})

routeRouter.delete('/:id', async (request, response) => {
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
     return response.status(401).json({ error: 'token missing  or invalid' })
  }

  const route = await Route.findById(request.params.id)
  
  if (!route) { return response.status(401).json({ error: 'no route with this id' })}

  await Route.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

routeRouter.put('/:id', async (request, response) => {
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
     return response.status(401).json({ error: 'token missing  or invalid' })
  }
  const start = await Address.findOne({ placeId: request.body.DEPOT.start.id })
  const end = await Address.findOne({ placeId: request.body.DEPOT.end.id })
  let addresses = []
  for (let i in request.body.addresses) {
    const address = await Address.findOne({ palceId: request.body.addresses[i] })
    addresses = addresses.concat(address._id)
  }
  const route = {
    name: request.body.name,
    DEPOT: {
      start: start._id,
      end: end._id
    },
    addresses: addresses,
    route: request.body.route 
  }
  
  const updatedRoute = await Route.findByIdAndUpdate(request.params.id, route)
    .populate('addresses')
    .populate('DEPOT.start')
    .populate('DEPOT.end')
    .populate('user')
  
  response.json(updatedRoute)
})

module.exports = routeRouter
