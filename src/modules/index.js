import {
  combineReducers
} from 'redux'
import counter from './counter'
import post from './post'
import {
  pendenReducer,
  penderReducer
} from 'redux-pender'

export default combineReducers({
  counter,
  post,
  pender: penderReducer
})