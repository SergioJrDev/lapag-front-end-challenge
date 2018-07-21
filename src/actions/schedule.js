import * as TYPE from './../reducers/schedules'

export const addNewSchedule = (params) => {
  return {
    type: TYPE.ADD_NEW_SCHEDULE,
    payload: params
  }
}
