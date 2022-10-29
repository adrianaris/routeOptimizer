/* eslint-disable no-undef */
import optimize from '../services/optimize'
import { locations } from '../../someResources/init10locations'
import moreLocations from '../../someResources/moreLocations.json'

describe('optimize', () => {
  it('optimization works', async () => {
    const optimized = await optimize(locations)
    expect(optimized.orderedIndexArray).not.toBeUndefined()
    expect(optimized.orderedIndexArray.length).toBe(locations.length)
  })
  it('optimization fails if more than 12 addresses', async () => {
    try {
      await optimize(moreLocations)
    } catch (error) {
      expect(error).toBe('Request failed with status code 422')
    }
  })
})
