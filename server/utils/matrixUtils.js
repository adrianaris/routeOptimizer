const matrixFiller = (apiResMatrix, ourMatrix, base) => {
  if (ourMatrix.length < apiResMatrix.length + base) return console.log('I fucked up')
  let matrix = ourMatrix
  for (let i = 0; i < apiResMatrix.length; i++) {
    matrix[i + base] = matrix[i + base].concat(apiResMatrix[i])
  }
  return matrix
}

/**
 * callSize is 25 coordinates for mapbox as an example
 * this means spliting the address list into chuncks of
 * 12 address so that when combined for the call 
 * (into sources + destinations) it doesn't exceede 25 limit 
 * + 1 chunk for remainder
 */
const addressListSlicer = (addressList, callSize) => {
  const quotient = Math.floor(addressList.length / callSize)
  let numberOfChunks = quotient
  const remainder = addressList.length % callSize
  if (remainder > 0) numberOfChunks++
  const chuncksArray = new Array(numberOfChunks).fill([])

  for (let i = 0; i < numberOfChunks; i++) {
    chuncksArray[i] = chuncksArray[i].concat(
      addressList.slice(i * callSize, (i + 1) * callSize)
    )
  }

  return chuncksArray
}

module.exports = { matrixFiller, addressListSlicer }
