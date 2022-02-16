const mongoose = require('mongoose')

const routeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DEPOT: {
      start: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
      },
      end: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
      }
    },
    addresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
      }
    ],
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    route: Array
})

routeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Route', routeSchema)
