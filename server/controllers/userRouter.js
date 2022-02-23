const User = require('../models/user')
const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

userRouter.post('/register', async (request, response) => {
  const body = request.body

  if(!body.password) {
    return response.status(400).json({ error: 'password missing' })
  } else if (body.password.length < 3) {
    return response.status(400).json({ error: 'password is too short' })
  } else if (!body.name) {
    return response.status(400).json({ error: 'name is missing' })
  }
  
  const passwordHash = await bcrypt.hash(body.password, 10)
  
  const user = new User({
    username: body.username,
    name: body.name,
    navigator: body.navigator,
    creationDate: Date(),
    passwordHash
  })
  
  const savedU = await user.save()
  const token = jwt.sign({
    username: savedU.username,
    id: savedU._id
  }, process.env.SECRET)
  
  response.json({
    token,
    username: savedU.username,
    name: savedU.name,
    routes: savedU.routes,
    creationDate: savedU.creationDate,
    navigator: savedU.navigator
  })
})

userRouter.post('/login', async (request, response) => {
  const body = request.body
  
  const user = await User.findOne({ username: body.username })
    /**
     * comment out for now
     * idk how much space I have on local storage
     * for persisting 
     */
    //.populate({
    //  path: 'routes',
    //  populate: [
    //    {
    //      path: 'DEPOT.start'
    //    },
    //    {
    //      path: 'DEPOT.end'
    //    },
    //    {
    //      path: 'addresses.address'
    //    }
    //  ]
    //})

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  
  const userForToken = {
    username: user.username,
    id: user._id
  }
  
  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({
    token,
    username: user.username,
    name: user.name,
    routes: user.routes,
    creationDate: user.creationDate,
    navigator: user.navigator
  })
})

/**
 * I should modify this to ask for old password 
 * when changing it
 */
userRouter.put('/update', async (request, response) => {
  const body = request.body
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
     return response.status(401).json({ error: 'token missing  or invalid' })
  }

  const updUser = {
    username: body.username,
    name: body.name,
    navigator: body.navigator
  }
  if (body.password) {
    updUser.passwordHash = await bcrypt.hash(body.password, 10)
  }

  const updatedUser = await User.findByIdAndUpdate(decodedToken.id, updUser)
  const newToken = jwt.sign(
    {
      username: updatedUser.username,
      id: updatedUser._id
    },
    process.env.SECRET
  )

  response.status(200).send({
    token: newToken,
    username: updatedUser.username,
    name: updatedUser.name,
    routes: updatedUser.routes,
    navigator: updatedUser.navigator,
    creationDate: updatedUser.creationDate
  })
})

module.exports = userRouter
