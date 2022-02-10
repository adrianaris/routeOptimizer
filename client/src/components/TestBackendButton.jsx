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
    const data = await axios.get('http://localhost:4000/api/optim/geoapify')
    console.log(data.data.routeGeoJSON)
    dispatch(addStart(data.data.orderedAddresslist.shift()))
    dispatch(addEnd(data.data.orderedAddresslist.pop()))
    dispatch(addLocation(data.data.orderedAddresslist))
    dispatch(createRoute(data.data.routeGeoJSON))
  }
  return (
    <button onClick={handleClick}>test backend</button>
  )
}

export default TestBackendButton
