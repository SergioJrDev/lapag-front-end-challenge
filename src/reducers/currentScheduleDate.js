import defaultStore from '../store/DefaultStore'
const { currentScheduleDate } = defaultStore

export const ADD_MESSAGE = 'ADD_MESSAGE'

export default function messageReducer(state = currentScheduleDate, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return state.concat([action.payload])
    default:
      return state
  }
}
