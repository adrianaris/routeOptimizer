const logger = require('./logger')
const jwt = require('jsonwebtoken')

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = authorization.substring(7)
    }
    next()
}

const userExtractor = (request, response, next) => {
    const token = request.token
    if (token) {
        decodedToken = jwt.verify(token, process.env.SECRET)
        request.user = {
            username: decodedToken.username,
            id: decodedToken.id
        }
    }
    next()
}

module.exports = { tokenExtractor, userExtractor }
