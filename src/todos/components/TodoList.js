import React from 'react'
import { TodoItem } from './TodoItem'

const filteredTodos = (filters, todos) => {
  if (filters === 'SHOW_COMPLETED') {
    return todos.filter(t => t.completed)
  }
  if (filters === 'SHOW_ACTIVE') {
    return todos.filter(t => !t.completed)
  }
  return todos
}

export const TodoList = ({filter, todos, store}) => (
  <ul>
    {filteredTodos(filter, todos).map(todo => <TodoItem key={todo.id} todo={todo} store={store} />)}
  </ul>
)
