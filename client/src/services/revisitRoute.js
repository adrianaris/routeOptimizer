import { useDispatch } from 'react-redux'
import { clearLocations, addLocation } from '../reducers/addressesReducer'
import { removeRouteName, setRouteName } from '../reducers/routeNameReducer'
import { removeRoute, createRoute } from '../reducers/routeReducer'
import { removeStart, removeEnd, addStart, addEnd } from '../reducers/startendReducer'


const ClearActive = () => {
  const dispatch = useDispatch()
  dispatch(clearLocations())
  dispatch(removeRouteName())
  dispatch(removeRoute())
  dispatch(removeStart())
  dispatch(removeEnd())
}

const Reuse = route => {
  const dispatch = useDispatch()
  dispatch(setRouteName(route.name))
  dispatch(addLocation(route.addresses))
  dispatch(createRoute(route.route))
  dispatch(addStart(route.DEPOT.start))
  dispatch(addEnd(route.DEPOT.end))
}

export default { ClearActive, Reuse }
