const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      unique: true,
      required: true,
      length: 3
  },
  name: String,
  routes: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Route'
      }
  ],
  creationDate: String,
  navigator: String,
  passwordHash: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator, {
  message: '{VALUE} is already taken'
})

const User = mongoose.model('User', userSchema)

module.exports = User
