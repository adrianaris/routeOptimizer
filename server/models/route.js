const mongoose = require('mongoose')
const { feature, featureCollection } = require('@turf/turf')

const routeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DEPOT: {
      start: feature(),
      end: feature()
    },
    addresses: featureCollection([]),
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    route: featureCollection([])
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)
