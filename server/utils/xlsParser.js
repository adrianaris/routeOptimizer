/**
 * this is just a test at the moment
 * and it returns an array of strings 
 * formated for geoapify batch geo api
 */
const Excel = require('exceljs')
const fileName = './ORtools/nog te doen vlaams brabant.xlsx'

const getAddressesFromXL = async file => {
  const workbook = new Excel.Workbook()
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

module.exports = getAddressesFromXL
