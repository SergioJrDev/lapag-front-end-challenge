import * as TYPE from './../reducers/ui'

export const updateContentModal = (params) => {
  return {
    type: TYPE.UPDATE_MODAL_CONTENT,
    payload: params
  }
}

export const openModal = () => {
  return {
    type: TYPE.OPEN_MODAL,
  }
}

export const closeModal = () => {
  return {
    type: TYPE.CLOSE_MODAL,
  }
}