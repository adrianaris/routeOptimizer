const turf = require('turf')

let route = turf.featureCollection([])

const createMapLayers = map => {

  // create a point map for path
  map.addLayer({
    id: 'dropoffs-symbol',
    type: 'symbol',
    source: {
      data: addresses,
      type: 'geojson',
    },
    layout: {
      'icon-allow-overlap': true,
      'icon-ignore-placement': true,
      'icon-image': 'marker-15',
    },
  })

  map.addSource('route', {
    type: 'geojson',
    data: route,
  })

  map.addLayer(
    {
      id: 'routeline-active',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#3887be',
        'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 22, 12],
      },
    },
    'waterway-label'
  )

  map.addLayer(
    {
      id: 'routearrows',
      type: 'symbol',
      source: 'route',
      layout: {
        'symbol-placement': 'line',
        'text-field': '▶',
        'text-size': ['interpolate', ['linear'], ['zoom'], 12, 24, 22, 60],
        'symbol-spacing': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          30,
          22,
          160,
        ],
        'text-keep-upright': false,
      },
      paint: {
        'text-color': '#3887be',
        'text-halo-color': 'hsl(55, 11%, 96%)',
        'text-halo-width': 3,
      },
    },
    'waterway-label'
  )
}

module.exports = createMapLayers
