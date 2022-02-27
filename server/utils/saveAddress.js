const Address = require('../models/address')

const saveAddress = async locations => {
  for (let i in locations) {
    const checkAddress = await Address.findOne({ placeId: locations[i].id })
    if (checkAddress === null) {
      if (locations[i].jobDone) delete locations[i].jobDone
      if (locations[i].orderTime) delete locations[i].orderTime

      const newAddress = new Adress({
        address: locations[i],
        placeId: locations[i].id
      })
      newAddress.save()
    }
  }
}

module.exports = saveAddress
