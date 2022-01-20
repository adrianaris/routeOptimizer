const config = require('../utils/config')
const mapRouter = require('express').Router()
const staticClient = require('@mapbox/mapbox-sdk/services/static')

const mapClient = staticClient({ accessToken: config.TOKEN })

mapRouter.get('/', (requset, response) => {
  const apiResponse = mapClient.getStaticImage({
    ownerId: 'mapbox',
    styleId: 'streets-v11',
    width: 200,
    height: 300,
    position: {
      coordinates: [5.5201, 50.8195],
      zoom: 11.67
    }
  })
    

  const url = apiResponse.url()

  console.log(url)
  response.send(url)
})

module.exports = mapRouter
