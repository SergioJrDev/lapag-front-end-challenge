import { combineReducers } from 'redux'
import { default as user } from './user'
import { default as scheduleDate } from './scheduleDate'
import { default as schedules } from './schedules'
import { default as ui } from './ui'

const rootReducer = combineReducers({
  user,
  scheduleDate,
  schedules,
  ui,
})

export default rootReducer
