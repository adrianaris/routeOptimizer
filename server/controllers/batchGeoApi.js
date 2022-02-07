const geoRouter = require('express').Router()
const getBatchGeo = require('../services/getBatchGeo')
const axios = require('axios')

const getMatrix = require('../services/getMatrix')
const testAddresses = require('../ORtools/testAddresses')

const addresses = [ // example request for geoapify
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
  response.json(batchJob.data)
})

geoRouter.get('/matrix', async (request, response) => {
  /**
   * the matrix needs more tweaking in order to make it that
   * the destination is the last address in the list
   *
   * right now it behaves like a TSP and the last
   * address is also the first (circuit)
   */
  const matrix = await getMatrix(testAddresses)
  let matrixInt = matrix.distances.map(row => row.map(item => parseInt(item*10)))
  console.log(matrixInt)

  const { spawn } = require('child_process')
  const pythonScript = spawn('./venv/bin/python', ['./ORtools/ortoolsTSPcompleteprogram1.py', JSON.stringify(matrixInt)])
  pythonScript.stdout.on('data', data => {
    /** 
     * create ordered array out of the python script response
     * the python script was also tweacked to facilitate this
     * this array is used to reorder the list of addresses
     */
    response.json(data.toString().split(/,/).map(str => parseFloat(str)))
  })

  pythonScript.stderr.on('data', data => {
    console.log(data.toString())
  })

})

module.exports = geoRouter
