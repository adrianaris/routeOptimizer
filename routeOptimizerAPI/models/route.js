const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const routeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
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
        address: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Address'
        },
        jobDone: Boolean,
        orderTime: String,
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

routeSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Route', routeSchema)
