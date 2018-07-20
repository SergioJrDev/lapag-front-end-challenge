import defaultStore from '../store/DefaultStore'
const { scheduleDate } = defaultStore

export const UPDATE_CURRENT_DATE = 'UPDATE_CURRENT_DATE'

export default function scheduleDateReducer(state = scheduleDate, action) {
  switch(action.type) {
    case UPDATE_CURRENT_DATE:
      return {...state, currentDate: action.payload }
    default:
      return state
  }
}
