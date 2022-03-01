import React, { useState, useEffect, useRef } from 'react'
import StartEnd from './StartEnd'
import { useSelector, useDispatch } from 'react-redux'
import { optimLocations, removeLocation, clearLocations, addLocation, setJobDone } from '../reducers/addressesReducer'
import { createGoogleUrl, removeGoogleUrl } from '../reducers/googleUrlReducer'
import { createRoute } from '../reducers/routeReducer'
import { setNotification } from '../reducers/notificationReducer'
import styled from 'styled-components'
import optimize from '../services/optimize'
import loggedInOptimize from '../services/loggedInOptimize'
import _ from 'lodash'
import {
  lineString as turfLineString,
  bbox as turfBbox,
  featureCollection as turfFeatureCollection
} from '@turf/turf'
import { removeRoute } from '../reducers/routeReducer'
import { addStart, addEnd } from '../reducers/startendReducer'
import RouteName from './RouteName'
import NavigationButton from './NavigationButton'

const Layout = styled.div`
  position: relative;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
  padding: 1rem;
  > div > button {
    display: inline-block;
    position: relative;
  }
`
const Olist = styled.div`
  padding: 0 1rem 0 1rem;
  > div {
    cursor: pointer;
    border: 2px solid black;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    > button {
      margin-left: 3em;
    }
    > p > b {
      border-right: 1px solid black;
      padding: 0.3rem;
      margin-right: 0.3rem;
    }
  }
`

const Button = styled.button`
  margin: 0.5em;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  > a {
      color: inherit;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`
const LocationCount = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0.3rem;
`
const OptimizationButton = styled.button`
  position: absolute;
  margin: 1rem;
  margin-left: 2rem;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #add8e6;
  > a {
      color: inherit;
  }
  &:hover {
    background-color: purple;
    color: white;
  }
`
const Top = styled.aside`
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: right;
  > div {
    margin: 0 0.3rem 1.2rem 0;
    cursor: pointer;
    height: 20px;
    widht: 20px;
    text-align: right;
    > svg {
      width: 30px;
      height: 30px;
      view-box: 0 0 10.728 10.729;
      enable-background:new 0 0 10.728 10.729;
      background-size: 10px 10px;
    }
  }
`
const Locations = ({ map }) => {
  const route = useSelector(state => state.route)
  const DEPOT = useSelector(state => state.DEPOT)
  const googleMapsUrl = useSelector(state => state.googleUrl)
  const addresses = useSelector(state => state.addresses)
  const user = useSelector(state => state.user)
  const locations = addresses.features
  const dispatch = useDispatch()
  if (!locations) return

  const bottomPosition = useRef(null)
  const topPosition = useRef(null)
  const [visible, setVisible] = useState(false)

  const style = {
    display: visible ? '' : 'none',
  }

  useEffect(() => {
    if (googleMapsUrl.length === 0) setVisible(false)
    if (googleMapsUrl.length > 0) setVisible(true)
  }, [googleMapsUrl])

  /**
   * Sets symbols on map for waypoints
   */
  useEffect(() => {
    if (map === null) return
    map.on('idle', () => {
      map.getSource('dropoffs-symbol').setData(addresses)
    })
  }, [addresses])

  /**
   * Sets symbols on map for start/end positions
   */
  useEffect(() => {
    if (map === null) return
    const newWarehouse = turfFeatureCollection([DEPOT.start, DEPOT.end])
    if (!map.getLayer('warehouse')) {
      map.on('idle', () => {
        map.getSource('warehouse').setData(newWarehouse)
      })
    } else if (map.isSourceLoaded('warehouse')) map.getSource('warehouse').setData(newWarehouse)
  }, [DEPOT])

  /**
   * Sets a route through all waypoints after optimization
   */
  useEffect(() => {
    if (map === null) return
    map.getSource('route').setData(route)
  }, [route])

  const handleOptimizeClick = async () => {
    const locationsToOptimize = locations.filter(elem => elem.jobDone === false)
    const jobDoneLocations = locations.filter(elem => elem.jobDone === true)
    if (_.isEmpty(DEPOT.start) || _.isEmpty(DEPOT.end)) {
      return dispatch(setNotification(
        'Please add a start/end location for the optimization to work!', 10
      ))
    }

    if (locationsToOptimize.length > 10 && user === null)  {
      return dispatch(setNotification(
        <span>Without an account the planner suports only ten locations plus the start/end.<br/>Remove addresses or register an account in order to continue!</span>, 10
      ))
    }

    const allLocations = [DEPOT.start, ...locationsToOptimize, DEPOT.end]

    /** basically call frontend optimization if les than 10 locations
     * backend optimization otherwise
     */
    if (locationsToOptimize.length <= 10) {
      const {
        routeGeoJSON,
        orderedIndexArray,
        waypoints } = await optimize(allLocations)
      const removedDepotArray = orderedIndexArray.slice(1, -1).map(elem => elem-1)
      dispatch(optimLocations(removedDepotArray))
      /**
       * I should find a solution for how to create the googleUrl
       * for when locations are more than 10
       * I'm thinking of maybe creating incremental links!?!?
       */
      dispatch(createGoogleUrl(waypoints))
      dispatch(createRoute(routeGeoJSON))
    } else {
      const {
        orderedAddresslist,
        routeGeoJSON,
        //waypoints
      } = await loggedInOptimize(allLocations)
      /**
       * I should probably combine those into one single reducer
       * and create one action for all of them
       * This grew so ugly because I didn't have a plan or I didn't knew
       * what should be managed with redux, but it deserves refactoring
       */
      dispatch(removeGoogleUrl())
      dispatch(clearLocations())
      dispatch(removeRoute())
      dispatch(addStart(orderedAddresslist.shift()))
      dispatch(addEnd(orderedAddresslist.pop()))
      dispatch(addLocation(jobDoneLocations.concat(orderedAddresslist)))
      dispatch(createRoute(routeGeoJSON))
    }

    const bboxLoc = [DEPOT.start, ...locationsToOptimize, DEPOT.end]
    /**
     * use turf to create a bounding box out of all
     * locations and feed it to fitBounds()
     */
    const bbox = turfBbox(turfLineString(bboxLoc.map(elem => elem.center)))
    map.fitBounds(bbox, { padding: 50 })
  }

  const handleRemove = index => {
    dispatch(removeLocation(index))
    if (locations[index].jobDone === false) {
      dispatch(removeGoogleUrl())
      dispatch(removeRoute())
    }
  }

  const handleClearLocations = () => {
    dispatch(clearLocations())
    dispatch(removeGoogleUrl())
    dispatch(removeRoute())
  }
  const handleJobDone = (index, bool) => {
    dispatch(setJobDone(index, bool))
  }
  const flyToLocation = center => {
    map.flyTo({
      center: center,
      zoom: 16,
      speed: 2
    })
  }
  const scrollTop = () => {
    topPosition.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollBottom = () => {
    bottomPosition.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Layout>
      <div ref={topPosition} />
      <div style={{ textAlign: 'center' }}>
        <Button style={style}>
          <a href={googleMapsUrl}>open in <br />gmaps</a>
        </Button>
        {locations.length < 2 ||
        <OptimizationButton onClick={handleOptimizeClick}>
          OPTIMIZE<br />
          ROUTE
        </OptimizationButton>
        }
      </div>
      {user === null ||
        <RouteName />
      }
      {route.distance &&
        <div style={{ textAlign: 'center' }}>
          Distance: <b>{(route.distance / 1000).toFixed(2)}</b> km /
          Duration: <b>{(route.duration / 3600).toFixed(2)}</b> h
        </div>
      }
      <StartEnd flyToLocation={flyToLocation} />
      <LocationCount>Locations-count: <b>{locations.length}</b>
      <Button onClick={handleClearLocations}>clear locations</Button>
      </LocationCount>
      <Olist>
        {locations.concat(DEPOT.end).map(({ id, place_name, jobDone, center }, index) => (
          <div
            key={id + index}
            style={{ background: jobDone ? 'gray' : '' }}
            onClick={() => flyToLocation(center)}
          >
            <p>
              <>
                {index === locations.length
                  ? <b>END:</b>
                  : <b>{index + 1}:</b>
                }
              </>
              {place_name}
            </p>
            <Button onClick={() => handleRemove(index)}>Remove</Button>
            {jobDone === true
              ? <Button onClick={() => handleJobDone(index, false)}>Undo jobDone</Button>
              : <>{index === locations.length ||
                  <Button onClick={() => handleJobDone(index, true)}>jobDone</Button>
                }
                {center !== undefined &&
                  <NavigationButton center={center} />
                }</>
            }
          </div>
        ))}
      </Olist>
      <div ref={bottomPosition} />
       <Top>
        <div onClick={scrollTop}>
          <svg viewBox="0 0 60 60">
            <path d="M29.996,24.08c-0.977,0.978-2.561,0.978-3.535,0L15.365,12.985L4.268,24.081C3.78,24.568,3.14,24.812,2.5,24.812s-1.28-0.244-1.768-0.731c-0.977-0.978-0.977-2.56,0-3.535L15.364,5.915l14.63,14.629C30.972,21.521,30.972,23.104,29.996,24.08z" />
          </svg>
        </div>
        <div onClick={scrollBottom}>
          <svg viewBox="0 0 60 60">
            <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
          </svg>
        </div>
      </Top>
 </Layout>
  )
}

export default Locations
