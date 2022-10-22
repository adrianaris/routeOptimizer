const routeRouter = require('express').Router()
const Route = require('../models/route')
const User = require('../models/user')
const Address = require('../models/address')
const saveAddress = require('../utils/saveAddress')
const jwt = require('jsonwebtoken')


routeRouter.get('/', async (request, response) =>{
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const routes = await Route.find({ user: decodedToken.id })
    .populate('addresses.address')
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

  const locations = [request.body.DEPOT.start]
    .concat(request.body.addresses)
    .concat(request.body.DEPOT.end)
  await saveAddress(locations)

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
        start: start ? start._id : null,
        end: end ? end._id : null,
      },
      addresses: addresses,
      user: user._id,
      route: request.body.route
  })

  const savedRoute = await newRoute.save()
  
  user.routes = user.routes.concat(savedRoute._id)
  await User.findByIdAndUpdate(user._id, user)

  response.status(201).json(savedRoute._id)
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

  const locations = [request.body.DEPOT.start]
    .concat(request.body.addresses)
    .concat(request.body.DEPOT.end)
  await saveAddress(locations)

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
  const route = {
    name: request.body.name,
    DEPOT: {
      start: start ? start._id : null,
      end: end ? end._id : null
    },
    addresses: addresses,
    route: request.body.route 
  }
  
  const updatedRoute = await Route.findByIdAndUpdate(request.params.id, route)
  
  response.json(updatedRoute)
})

module.exports = routeRouter
