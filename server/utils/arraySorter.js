/**
 * orderList is an array of indexes in the order
 * in which we want to sort arrayToSort
 */
const sorter = (arrayToSort, orderList) => {
  let orderedArray = []
  for (let i in orderList) {
    orderedArray.push(arrayToSort[orderList[i]])
  }

  return orderedArray
}

module.exports = sorter
