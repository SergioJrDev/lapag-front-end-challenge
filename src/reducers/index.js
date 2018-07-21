import { combineReducers } from 'redux'
import { default as user } from './user'
import { default as scheduleDate } from './scheduleDate'
import { default as schedules } from './schedules'

const rootReducer = combineReducers({
  user,
  scheduleDate,
  schedules,
})

export default rootReducer
