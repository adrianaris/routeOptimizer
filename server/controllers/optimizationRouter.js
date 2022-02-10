const axios = require('axios')
const optimRouter = require('express').Router()
const optimize = require('../services/optimization')

const testAddresses = require('../ORtools/testAddresses')
const exampleMatrix = require('../ORtools/exampleMatrixResult')

//const addresses = [ // example request for geoapify
//  "210 brusselsesteenweg, 3080 tervuren, belgium",
//  "184 beiaardstraat, 8860 kortrijk, belgium",
//  "33 vaartdijkstraat 2235, antwerp, belgium",
//  "36a av commandant lothaire, 1040 brussels, belgium",
//  "106 rue robier, 7804 hainaut, belgium",
//  "58 volkers, 2460 antwerp, belgium",
//  "74605 jaren oval, 6741 luxembourg, belgium",
//  "12 e40, 94520 erpe-mere, belgium",
//  "2, rue d'en bry, 5377 namur, dinant, belgium",
//  "45 's boschstraat, 2320 antwerp, belgium",
//]

/**
 * for testing
 */
optimRouter.get('/', async (request, response) => {
  const addresslist = await getAddressesFromXL()
  console.log(addresslist)
  //const batchJob = await getBatchGeo(addresslist)
  //response.json(batchJob.data)
})

/**
 * for testing
 */
optimRouter.get('/matrix', async (request, response) => {
  //const addresslist = request.body
  //const orderedList = await optimize(addresslist)
  //response.json(orderedList)

})

module.exports = optimRouter 
