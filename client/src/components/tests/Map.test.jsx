import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Map from '../Map'
import { default as state } from './testState.json'

const mockStore = configureStore()
let store = mockStore(state)

console.log(state.addresses)
test('renders content', () => {
  render(
    <Provider store={store}>
      <Map />
    </Provider>
  )

  const element = screen.getByTest(state.addresses.features[0].place_name)
  expect(element).toBeDefined()
})
