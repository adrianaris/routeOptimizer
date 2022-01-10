const querrySchema = require("../models/matrix")
const matrixRouter = require('express').Router()
const mbxMatrix = require('@mapbox/mapbox-sdk/services/matrix')
const config = require('../utils/config')

const matrixService = mbxMatrix({ accessToken: config.TOKEN })

matrixRouter.post('/matrixApi', async (request, response) => {
    const body = request.body
    const querry = new querrySchema({
        points: body.coordinates
    })

    const apiResponse = await matrixService.getMatrix(querry).send()
    const matrix = apiResponse.body

    const { spawn } = require('child_process')
    pythonScript = spawn('python', ['../ORtools/ortoolsTSPcompleteprogram1.py', JSON.stringify(matrix.distances)])
    response.status(201).json(matrix)
})