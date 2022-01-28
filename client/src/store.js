import { createStore, combineReducers, applyMiddleware } from 'redux'
import locationsReducer from './reducers/locationsReducer'
import googleUrlReducer from './reducers/googleUrlReducer'
import startendReducer from './reducers/startendReducer'
import notificationReducer from './reducers/notificationReducer'
import turfAddressesReducer from './reducers/turfAddressesReducer'
import userDataReducer from './reducers/userDataReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  locations: locationsReducer,
  googleUrl: googleUrlReducer,
  DEPOT: startendReducer,
  notification: notificationReducer,
  addresses: turfAddressesReducer,
  userDATA: userDataReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export default { store, persistor }
