const geoRouter = require('express').Router()
const getBatchGeo = require('../services/getBatchGeo')
const axios = require('axios')

const getMatrix = require('../services/getMatrix')
const testAddresses = require('../ORtools/testAddresses')

const Excel = require('exceljs')
const workbook = new Excel.Workbook()
const fileName = './ORtools/nog te doen vlaams brabant.xlsx'

const getAddressesFromXL = async () => {
  await workbook.xlsx.readFile(fileName)
  let addresslist1 = []
  let addresslist2 = []
  let addresslist3 = []
  let addresslist = []
  const ws = workbook.getWorksheet('Blad1')
  const c5 = ws.getColumn(5)
  const c6 = ws.getColumn(6)
  const c7 = ws.getColumn(7)
  c5.eachCell(c => {
    addresslist1.push(''.concat(c))
  })
  c6.eachCell(c => {
    addresslist2.push(''.concat(c))
  })
  c7.eachCell(c => {
    addresslist3.push(''.concat(c))
  })
  for (let i = 0; i < addresslist1.length; i++) {
    addresslist[i] = addresslist1[i].concat(', '+addresslist2[i]).concat(', '+addresslist3[i]).concat(', Belgium')
  }
  return addresslist
}

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
  const addresslist = await getAddressesFromXL()
  console.log(addresslist)
  //const batchJob = await getBatchGeo(addresslist)
  //response.json(batchJob.data)
})

geoRouter.get('/matrix', async (request, response) => {
  /**
   * the matrix needs more tweaking in order to make it that
   * the destination is the last address in the list
   *
   * right now it behaves like a TSP and the last
   * address is also the first (circuit only)
   */
  const matrix = await getMatrix(testAddresses)
  console.log(matrix)
  let matrixInt = matrix.distances.map(row => row.map(item => parseInt(item*10)))

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
