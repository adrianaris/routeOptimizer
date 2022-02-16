const axios = require('axios')
const optimRouter = require('express').Router()
const optimize = require('../services/optimization')
const getBatchGeo = require('../services/getBatchGeo')
const addressFormatter = require('../utils/geoapifyAddressFormatter')
const jwt = require('jsonwebtoken')

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
  console.log('called')
  console.log(request.token)
  const token = request.token
  if (!token) {
      return response.status(401).json({ error: 'token missing  or invalid' })
  }
  const decodedToken = jwt.verify(token, process.env.SECRET)

  const addresslist = request.body
  const data = await optimize(addresslist, 'mapbox')
  response.json(data)
})

module.exports = optimRouter 
