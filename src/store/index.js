import { createStore, applyMiddleware } from 'redux'
import DefaultStore from './DefaultStore'
import Reducers from './../reducers'

const Store = createStore(
  Reducers,
  DefaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware())

export default Store
