/* eslint-disable no-undef */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import mapboxgl from 'mapbox-gl'

jest.mock('mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(),
  NavigationControl: jest.fn(),
}))

mapboxgl.Map.prototype = {
  addControl: jest.fn(),
  on: jest.fn(),
  remove: jest.fn(),
}
