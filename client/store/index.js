import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import profileReducer from './profiles'

// import mentorReducer from './mentorReducer'
// import menteeReducer from './menteeReducer'
import bookingReducer from './bookingReducer'
import skillsReducer from './skillsListReducer'

const reducer = combineReducers({
  user,
  profileReducer,
  // mentorReducer,
  // menteeReducer,
  bookingReducer,
  skillsReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './profiles'
// export * from './mentorReducer'
// export * from './menteeReducer'
export * from './bookingReducer'
export * from './skillsListReducer'
