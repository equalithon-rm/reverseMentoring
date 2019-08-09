import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import mentorReducer from './mentorReducer'
import menteeReducer from './menteeReducer'
import bookingReducer from './bookingReducer'

const reducer = combineReducers({
  user,
  mentorReducer,
  menteeReducer,
  bookingReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './mentorReducer'
export * from './menteeReducer'
export * from './bookingReducer'
