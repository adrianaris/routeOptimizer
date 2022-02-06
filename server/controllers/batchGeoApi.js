const geoRouter = require('express').Router()
const getBatchGeo = require('../services/getBatchGeo')

const addresses = [
  "210 brusselsesteenweg, 3080 tervuren, belgium",
  "184 beiaardstraat, 8860 kortrijk, belgium",
  "33 vaartdijkstraat 2235, antwerp, belgium",
  "36a av commandant lothaire, 1040 brussels, belgium",
  "106 rue robier, 7804 hainaut, belgium",
  "58 volkers, 2460 antwerp, belgium",
  "74605 jaren oval, 6741 luxembourg, belgium",
  "12 e40, 94520 erpe-mere, belgium",
  "2, rue d'en bry, 5377 namur, dinant, belgium",
  "45 's boschstraat, 2320 antwerp, belgium",
]

geoRouter.get('/', async (request, response) => {
  const batchJob = await getBatchGeo(addresses)
  response.json(batchJob)
})

module.exports = geoRouter
