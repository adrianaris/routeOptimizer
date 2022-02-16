const addressRouter = require('express').Router()
const Address = require('../models/address')

addressRouter.post('/', async (request, response) => {
  for (let i in request.body) {
    const checkAddress = await Address.findOne({ placeId: request.body[i].id})
    if (checkAddress === null) {
      const newAddress = new Address({
        address: request.body[i],
        placeId: request.body[i].id
      })
      newAddress.save()
    }
  }
  response.status(201).json('thanks')
})

module.exports = addressRouter
