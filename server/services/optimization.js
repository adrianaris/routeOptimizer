const getBatchGeo = require('./getBatchGeo')
const getMatrix = require('./getMatrix')
const callORtools = require('./callORtools')

const optimize = async addresslist => {
  const coordinates = await getBatchGeo(addresslist)
  const matrix = await getMatrix(coordinates)
  const order = callORtools(matrix)
  
  const newAddresslist = []
  for (let i in order) {
    newAddresslist.push(addresslist[order[i]])
  }

  return newAddresslist
}

module.exports = optimize
