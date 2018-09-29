import { combineReducers } from 'redux'
import todosReducer from './todos_reducer'
import stepsReducer from './steps_reducer'
import errorReducer from './error_reducer'
import todosDisplayReducer from './todos_display_reducer'
import todosFetchingReducer from './todos_fetching_reducer'


const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  errors: errorReducer,
  todosDisplay: todosDisplayReducer,
  todosFetching: todosFetchingReducer
})

export default rootReducer