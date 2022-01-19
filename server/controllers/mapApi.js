const turf = require('turf')
const mapboxgl = require('mapbox-gl')
const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')
const config = require('../utils/config')
const mapRouter = require('express').Router()
const createMapLayers = require('../utils/mapLayers')


mapboxgl.accessToken = config.TOKEN
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
})

const mapInit = (center, zoom, mapContainer, geoContainer) => {
  const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom
  })

  map.on('load', createMapLayers(map))  
  geoContainer.appendChild(geocoder.onAdd(map))

  return map
}

mapRouter.post('/', (request, response) => {
  const { center, zoom, mapContainer, geoContainer } = request.body 
  const map = mapInit(center, zoom, mapContainer, geoContainer)
  console.log(map)
  response.status(201).send(map)
})

mapRouter.post('/geo', (request, response) => {
  response.send(geocoder)
})

module.exports = mapRouter
