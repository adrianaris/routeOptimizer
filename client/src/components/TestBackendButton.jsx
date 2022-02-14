/**
 * Just for testing the backend
 */
import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { clearLocations, addLocation } from '../reducers/addressesReducer'
import { removeStart, removeEnd, addStart, addEnd } from '../reducers/startendReducer'
import { createRoute } from '../reducers/routeReducer'


const TestBackendButton = () => {
  const dispatch = useDispatch()
  const handleClick = async () => {
    dispatch(clearLocations())
    dispatch(removeStart())
    dispatch(removeEnd())
    const { data } = await axios.get('http://localhost:4000/api/optim/geoapify')
    console.log(data.routeGeoJSON)
    dispatch(addStart(data.orderedAddresslist.shift()))
    dispatch(addEnd(data.orderedAddresslist.pop()))
    dispatch(addLocation(data.orderedAddresslist))
    dispatch(createRoute(data.routeGeoJSON))
  }
  return (
    <button onClick={handleClick}>test backend</button>
  )
}

export default TestBackendButton
