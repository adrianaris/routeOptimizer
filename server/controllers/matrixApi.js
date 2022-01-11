const querrySchema = require('../models/matrix')
const matrixRouter = require('express').Router()
const mbxMatrix = require('@mapbox/mapbox-sdk/services/matrix')
const config = require('../utils/config')

const matrixService = mbxMatrix({ accessToken: config.TOKEN })

matrixRouter.post('/', async (request, response) => {
  const body = request.body
  const querry = { ...querrySchema,
    points: body.points
  }

  const apiResponse = await matrixService.getMatrix(querry).send()
  const matrix = apiResponse.body

  console.log(matrix.destinations.map(o => o.location))

  const { spawn } = require('child_process')
  const pythonScript = spawn('python', ['./ORtools/ortoolsTSPcompleteprogram1.py', JSON.stringify(matrix.distances)])

  pythonScript.stdout.on('data', data => {
    response.json(data.toString().split(/,/).map(str => parseFloat(str)))

  })

  pythonScript.stderr.on('data', data => {
    console.log(data.toString())
  })
})

module.exports = matrixRouter
