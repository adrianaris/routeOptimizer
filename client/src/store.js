import { createStore, combineReducers } from 'redux'
import locationsReducer from './reducers/locationsReducer'
import googleUrlReducer from './reducers/googleUrlReducer'
import startendReducer from './reducers/startendReducer'

const reducer = combineReducers({
  locations: locationsReducer,
  googleUrl: googleUrlReducer,
  startend: startendReducer
})

const store = createStore(reducer)

export default store
