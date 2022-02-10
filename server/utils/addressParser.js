const geoapifyParser = addresslist => {
  const coordinates = new Array(addresslist.length).fill([]) 
  for (let i in addresslist) {
    coordinates[i].push(addresslist[i].lon)
    coordinates[i].push(addresslist[i].lat)
  }

  return coordinates
}

const mapboxParser = addresslist => {
  const coordinates = []
  for  (let i in addresslist) {
    coordinates.push(addresslist[i].center)
    if (addresslist[i].stopside) {
      coordinates[i].push(addresslist[i].stopside)
    }
  }

  return coordinates
}

module.exports = { geoapifyParser, mapboxParser }
