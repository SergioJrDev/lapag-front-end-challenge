import defaultStore from './../store/DefaultStore'
const { ui } = defaultStore

export const UPDATE_MODAL_CONTENT = 'UPDATE_MODAL_CONTENT'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export default function uiReducer(state = ui, action) {
  switch(action.type) {
    case UPDATE_MODAL_CONTENT:
      return { ...state, modal: { ...state.modal, content: action.payload }}

    case OPEN_MODAL:
      return { ...state, modal: { ...state.modal, isOpen: true }}

    case CLOSE_MODAL:
      return { ...state, modal: { ...state.modal, isOpen: false }}

    default:
      return state
  }
}