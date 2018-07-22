import { combineReducers } from 'redux'
import { default as scheduleDate } from './scheduleDate'
import { default as schedules } from './schedules'
import { default as ui } from './ui'

const rootReducer = combineReducers({
  scheduleDate,
  schedules,
  ui,
})

export default rootReducer
