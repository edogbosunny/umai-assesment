import { combineReducers } from 'redux';
import todoReducer from './todo-reducers';
import errorReducer from './error-reducers'

export default combineReducers({
  todos: todoReducer,
  error: errorReducer
})