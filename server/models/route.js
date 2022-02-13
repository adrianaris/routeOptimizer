const mongoose = require('mongoose')

const routeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DEPOT: {
      start: Object,
      end: Object
    },
    addresses: Array,
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
