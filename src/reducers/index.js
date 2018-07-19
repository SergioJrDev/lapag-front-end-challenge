import { combineReducers } from 'redux'
import { default as user } from './user'
import { default as currentScheduleDate } from './currentScheduleDate'

const rootReducer = combineReducers({
  user,
  currentScheduleDate,
})

export default rootReducer
