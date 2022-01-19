const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const mapRouter = require('./controllers/mapApi')
const matrixRouter = require('./controllers/matrixApi')
const errors = require('./utils/errors')
const logger = require('./utils/logger')

const querrySchema = require('./models/matrix')

const mbxMatrix = require('@mapbox/mapbox-sdk/services/matrix')
const matrixService = mbxMatrix({ accessToken: config.TOKEN })


app.use(express.json())
app.use(cors())
app.use('/api/map', mapRouter)
app.use('/api/matrix', matrixRouter)

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger(`Server is running on port ${config.PORT}`)
})




/**
 * for testing purposes
 */
// app.get('/', async (request, response) => {
//   const coord = { ...querrySchema,
//     points: [
//       {
//         coordinates: [4.5467, 50.8316],
//         approach: 'unrestricted'
//       },
//       {
//         coordinates: [4.4071, 50.8858],
//         approach: 'unrestricted'
//       },
//       {
//         coordinates: [4.4114, 50.9734],
//         approach: 'unrestricted'
//       },
//       {
//         coordinates: [4.6363, 51.0744],
//         approach: 'unrestricted'
//       },
//       {
//         coordinates: [4.8881, 51.0527],
//         approach: 'unrestricted'
//       },
//       {
//         coordinates: [5.2104, 50.9380],
//         approach: 'unrestricted'
//       },
//       {
//         coordinates: [5.0621, 50.7440],
//         approach: 'unrestricted'
//       }
//     ]
//   }
// 
//   const apiResponse = await matrixService.getMatrix(coord)
//     .send()
// 
//   const matrix = apiResponse.body
// 
//   response.status(201).json(matrix)
// })
// 
// app.get('/stdin', (request, response) => {
//   const matrix = [
//     [0, 2451, 713, 1018, 1631, 1374, 2408, 213, 2571, 875, 1420, 2145, 1972],
//     [2451, 0, 1745, 1524, 831, 1240, 959, 2596, 403, 1589, 1374, 357, 579],
//     [713, 1745, 0, 355, 920, 803, 1737, 851, 1858, 262, 940, 1453, 1260],
//     [1018, 1524, 355, 0, 700, 862, 1395, 1123, 1584, 466, 1056, 1280, 987],
//     [1631, 831, 920, 700, 0, 663, 1021, 1769, 949, 796, 879, 586, 371],
//     [1374, 1240, 803, 862, 663, 0, 1681, 1551, 1765, 547, 225, 887, 999],
//     [2408, 959, 1737, 1395, 1021, 1681, 0, 2493, 678, 1724, 1891, 1114, 701],
//     [213, 2596, 851, 1123, 1769, 1551, 2493, 0, 2699, 1038, 1605, 2300, 2099],
//     [2571, 403, 1858, 1584, 949, 1765, 678, 2699, 0, 1744, 1645, 653, 600],
//     [875, 1589, 262, 466, 796, 547, 1724, 1038, 1744, 0, 679, 1272, 1162],
//     [1420, 1374, 940, 1056, 879, 225, 1891, 1605, 1645, 679, 0, 1017, 1200],
//     [2145, 357, 1453, 1280, 586, 887, 1114, 2300, 653, 1272, 1017, 0, 504],
//     [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 0]
//   ]
//   const { spawn } = require('child_process')
//   const optimRoute = spawn('python', ['./ORtools/ortoolsTSPcompleteprogram1.py', JSON.stringify(matrix)])
// 
//   optimRoute.stdout.on('data', data => {
//     response.json(data.toString().split(/,/).map(str => parseFloat(str)))
//   })
// 
//   optimRoute.stderr.on('data', data => {
//     console.log(data.toString())
//   })
// }) // end of test code

app.use(errors.errorHandler)
app.use(errors.unknownEndpoint)
