import React from 'react'
import PropsType from 'prop-types'
import { TodoItem } from './TodoItem'
import { withStore } from '../../provide-store'

const filteredTodos = (filters, todos) => {
  if (filters === 'SHOW_COMPLETED') {
    return todos.filter(t => t.completed)
  }
  if (filters === 'SHOW_ACTIVE') {
    return todos.filter(t => !t.completed)
  }
  return todos
}

export const VisibleTodoList = withStore(({store}) => {
  const {filters, todos} = store.getState()
  return <TodoList todos={filteredTodos(filters, todos)}
                   onTodoClick={id => store.dispatch({type: 'TOGGLE_TODO', id})} />

})

export const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onTodoClick={() => onTodoClick(todo.id)} />)}
  </ul>
)
