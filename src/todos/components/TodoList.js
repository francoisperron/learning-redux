import React from 'react'
import { TodoItem } from './TodoItem'
import { withStore } from '../../provide-store'
import { withFetch } from '../../with-fetch'
import { fetchTodos, toggleTodo } from '../actions'

const filteredTodos = (filters, todos) => {
  if (filters === 'SHOW_COMPLETED') {
    return todos.filter(t => t.completed)
  }
  if (filters === 'SHOW_ACTIVE') {
    return todos.filter(t => !t.completed)
  }
  return todos
}

const VisibleTodoList = withStore(withFetch(fetchTodos, ({store}) => {
  const {filters, todos} = store.getState()
  return <TodoList todos={filteredTodos(filters, todos)} onTodoClick={id => store.dispatch(toggleTodo(id))} />
}))

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onTodoClick={() => onTodoClick(todo.id)} />)}
  </ul>
)

export { VisibleTodoList }