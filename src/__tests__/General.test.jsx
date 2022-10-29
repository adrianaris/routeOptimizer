/* eslint-disable no-undef */

import '@testing-library/jest-dom/'
import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
/**
 * The state is the app with adrianaris account loged-in
 * and route Test 21/2/2022 active.
 * Tervuren, Tervuren for DEPOT and 13 more addresses,
 * 1929.83 km, 23.40 h and waze navigator
 */
import { default as state } from './testState.json'

const mockStore = configureStore([thunk])
let store = mockStore(state)

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})

describe('Map', () => {
  it('renders Map and Geocoder', () => {
    const mapDiv = screen.getByTestId('map-container')
    expect(mapDiv).toBeDefined()
    const geoDiv = screen.getByTestId('geo-container')
    expect(geoDiv).toBeDefined()
  })
})

describe('NavBar', () => {
  it('Renders NavBar', () => {
    const el = screen.getByText('MENU')
    expect(el).toBeDefined()
  })

  it('Navigation Links are not displayed', () => {
    const el = screen.getByTestId('toggable-child')
    expect(el).toHaveStyle('display: none')
  })

  it('NavBox is displayed after MENU click', () => {
    const menuButton = screen.getByText('MENU')
    fireEvent.click(menuButton)

    const navBox = screen.getByTestId('toggable-child')
    expect(navBox).not.toHaveStyle('display: none')
  })
})

describe('RouteName', () => {
  it('Renders RouteName', () => {
    const el = screen.getByText('Create new route')
    expect(el).toBeDefined()
  })
})

describe('Locations', () => {
  it('Renders Locations', () => {
    expect(screen.getByText('Locations-count:')).toBeDefined()
  })
})
