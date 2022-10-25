/* eslint-disable no-undef */
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/'
import { render, screen } from '@testing-library/react'
import Locations from '../Locations'
import { default as state } from './testState.json'
import mapboxgl from 'mapbox-gl'

const mockStore = configureStore()
let store = mockStore(state)
let mapDiv = document.createElement('div')
const map = new mapboxgl.Map({
  container: mapDiv,
  zoom: 1,
  fadeDuration: 0,
  center: [0, 0],
  testMode: true,
  // Load inline style
  style: {
    version: 8,
    sources: {
      land: {
        type: 'geojson',
        data: `${location.origin}/test/browser/fixtures/land.json` // Load local geojson fixture
      }
    },
    layers: [
      {
        id: 'land',
        type: 'fill',
        source: 'land',
        paint: {
          'fill-color': '#f0e9e1'
        }
      }
    ]
  }
})

test('renders content', () => {
  render(
    <Provider store={store}>
      <Locations map={map}/>
    </Provider>
  )

  const element = screen.getByTest(state.addresses.features[0].place_name)
  expect(element).toBeDefined()
})
