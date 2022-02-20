import { combineReducers } from 'redux'
import googleUrlReducer from './reducers/googleUrlReducer'
import startendReducer from './reducers/startendReducer'
import notificationReducer from './reducers/notificationReducer'
import addressesReducer from './reducers/addressesReducer'
import userDataReducer from './reducers/userDataReducer'
import routeReducer from './reducers/routeReducer'
import userReducer from './reducers/userReducer'
import routeNameReducer from './reducers/routeNameReducer'
import mapReducer from './reducers/mapReducer'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  googleUrl: googleUrlReducer,
  DEPOT: startendReducer,
  notification: notificationReducer,
  addresses: addressesReducer,
  userDATA: userDataReducer,
  route: routeReducer,
  user: userReducer,
  routeName: routeNameReducer,
  map: mapReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['map']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const persistor = persistStore(store)

export default { store, persistor }
