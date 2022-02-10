const axios = require('axios')
const optimRouter = require('express').Router()
const optimize = require('../services/optimization')
const getBatchGeo = require('../services/getBatchGeo')
const addressFormatter = require('../utils/geoapifyAddressFormatter')

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
  data.orderedAddresslist = formattedAddressList
  response.json(data)
})

module.exports = optimRouter 
