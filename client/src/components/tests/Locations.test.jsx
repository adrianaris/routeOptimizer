import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Locations from '../Locations.jsx'
import { default as state } from './testState.json'

const mockStore = configureStore([])
console.log(state)
let store = mockStore(state)

test('renders content', () => {
  render(
    <Provider store={store}>
      <Locations />
    </Provider>
  )

  const element = screen.getByTest(state.addresses.features[0].place_name)
  expect(element).toBeDefined()
})
