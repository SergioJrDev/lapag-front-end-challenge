import * as TYPE from './../reducers/scheduleDate'

export const updateCurrentScheduleDate = (params) => {
  return {
    type: TYPE.UPDATE_CURRENT_DATE,
    payload: params
  }
}
