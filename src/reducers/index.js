import { combineReducers } from 'redux'
import { default as user } from './user'
import { default as scheduleDate } from './scheduleDate'

const rootReducer = combineReducers({
  user,
  scheduleDate,
})

export default rootReducer
