const axios = require('axios')
const optimRouter = require('express').Router()
const optimize = require('../services/optimization')
const getBatchGeo = require('../services/getBatchGeo')
const addressFormatter = require('../utils/geoapifyAddressFormatter')
const jwt = require('jsonwebtoken')
const Address = require('../models/address')

const testAddresses = require('../ORtools/testAddresses')
const exampleMatrix = require('../ORtools/exampleMatrixResult')

/**
 * for testing
 */
optimRouter.get('/geoapify', async (request, response) => {
  //const addresslist = await getBatchGeo(addresses) 
  const addresslist = testAddresses
  const data = await optimize(addresslist, 'geoapify')
  const formattedAddressList = addressFormatter(data.orderedAddresslist)
  data.orderedAddresslist = formattedAddressList //formated for mapbox
  response.json(data)
})

optimRouter.post('/', async (request, response) => {
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing  or invalid' })
  }

  const addresslist = request.body
  const data = await optimize(addresslist, 'mapbox')
  response.json(data)

  for (let i in addresslist) {
    const checkAddress = await Address
      .findOne({ placeId: addresslist[i].id.toString() })

    if (checkAddress === null) {
      const newAddress = new Address({
        address: addresslist[i],
        placeId: addresslist[i].id
      })  
      const saved = await newAddress.save()
    }
  }
})

module.exports = optimRouter 
