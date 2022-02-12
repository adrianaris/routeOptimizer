const User = require('../models/user')
const registerRouter = require('express').Router()
const bcrypt = require('bcrypt')

registerRouter.post('/', async (request, response) => {
    const body = request.body

    if(!body.password) {
        return response.status(400).json({ error: 'password missing' })
    } else if (body.password.length < 3) {
        return response.status(400).json({ error: 'password is too short' })
    }
    
    const passwordHash = await bcrypt.hash(body.password, 10)
    
    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
    })
    
    const savedU = await user.save()
    
    response.json(savedU)
})

module.exports = registerRouter
