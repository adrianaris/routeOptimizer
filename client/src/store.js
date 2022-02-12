import { createStore, combineReducers, applyMiddleware } from 'redux'
import googleUrlReducer from './reducers/googleUrlReducer'
import startendReducer from './reducers/startendReducer'
import notificationReducer from './reducers/notificationReducer'
import addressesReducer from './reducers/addressesReducer'
import userDataReducer from './reducers/userDataReducer'
import routeReducer from './reducers/routeReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  googleUrl: googleUrlReducer,
  DEPOT: startendReducer,
  notification: notificationReducer,
  addresses: addressesReducer,
  userDATA: userDataReducer,
  route: routeReducer,
  user: userReducer
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
