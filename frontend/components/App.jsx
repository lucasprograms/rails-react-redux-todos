import React from 'react'
import TodoListContainer from './todos/todo_list_container'
import TodoExpandedContainer from './todos/todo_expanded_container'

const App = () => (
  <div className="row">
    <TodoListContainer />
    <TodoExpandedContainer />
  </div>
)

export default App
