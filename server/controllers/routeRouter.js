const routeRouter = require('express').Router()
const Route = require('../models/route')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


routeRouter.get('/', async (request, response) =>{
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const routes = await Route.find({user: decodedToken.id})

  response.json(routes)
})

routeRouter.post('/save', async (request, response) => {
    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing  or invalid' })
    }
    const user = await User.findById(decodedToken.id)

    const newRoute = new Route({
        name: request.body.name,
        DEPOT: request.body.DEPOT,
        addresses: request.body.addresses,
        user: user._id,
        route: request.body.route
    })

    const savedRoute = await newRoute.save()
    
    user.routes = user.routes.concat(savedRoute._id)
    await user.save()

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
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const token = request.token
    if (!token || !decodedToken.id) {
       return response.status(401).json({ error: 'token missing  or invalid' })
    }
    const route = {
       name: request.body.name,
       DEPOT: request.body.DEPOT,
       addresses: request.body.addresses,
       route: request.body.route 
    }
    
    const updatedRoute = await Route.findByIdAndUpdate(request.params.id, route)
    
    response.json(updatedRoute)
})

module.exports = routeRouter
