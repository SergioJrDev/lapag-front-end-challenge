import defaultStore from '../store/DefaultStore'
const { schedules } = defaultStore
export const ADD_NEW_SCHEDULE = 'ADD_NEW_SCHEDULE'
export const DELETE_SCHEDULE = 'DELETE_SCHEDULE'

export default function schedulesReducer(state = schedules, action) {
  switch(action.type) {
    case ADD_NEW_SCHEDULE:
      return state.concat(action.payload)
    case DELETE_SCHEDULE:
      return state.filter(s => s._id !== action.payload)
    default:
      return state
  }
}
