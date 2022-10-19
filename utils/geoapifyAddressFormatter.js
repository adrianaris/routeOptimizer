const addressFormatter = addresslist => {
  const formattedAddressList = addresslist
    .map(address => {
      const newAddress = {
      type: 'Feature',
      center: [address.lon, address.lat],
      geometry: {
        type: 'Point',
        coordinates: [address.lon, address.lat]
      },
      place_name: address.formatted,
      place_type: [address.result_type],
      id: address.place_id
    }
      return newAddress
  })

  return formattedAddressList
}

module.exports = addressFormatter
