import { createStore, applyMiddleware } from 'redux'
import modules from './modules'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const logger = createLogger()
const pm = promiseMiddleware({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
})
const store = createStore(modules, applyMiddleware(logger, ReduxThunk, pm))

export default store
