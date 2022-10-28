/* eslint-disable no-undef */
import '@testing-library/jest-dom/'
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import Map from '../components/Map'

/**
 * The state is the app with adrianaris account loged-in
 * and route Test 21/2/2022 active.
 * Tervuren, Tervuren for DEPOT and 13 more addresses,
 * 1929.83 km, 23.40 h and waze navigator
 */
import { default as state } from './testState.json'

const mockStore = configureStore()
let store = mockStore(state)

describe('Map', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Map />
      </Provider>
    )
  })

  it('renders Map and Geocoder', () => {
    const mapDiv = screen.getByTestId('map-container')
    expect(mapDiv).toBeDefined()
    const geoDiv = screen.getByTestId('geo-container')
    expect(geoDiv).toBeDefined()
  })

  it('renders Locations', () => {
    const el1 = screen.getByText('Locations-count:')
    expect(el1).toBeDefined()
    const el2 = screen.getAllByText('jobDone')
    expect(el2.length).toEqual(13)
  })

  it('renders RouteName', () => {
    const el1 = screen.getByText('create new route')
    expect(el1).toBeDefined()
    const el2 = screen.getByText('Route Name:')
    expect(el2).toBeDefined()
    const el3 = screen.getByText('route Test 21/2/2022')
    expect(el3).toBeDefined()
  })
})
