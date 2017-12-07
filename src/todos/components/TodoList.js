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

export class VisibleTodoList extends React.Component {

  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = this.props.store.getState()
    return <TodoList todos={filteredTodos(state.filters, state.todos)}
                     onTodoClick={id => this.props.store.dispatch({type: 'TOGGLE_TODO', id})} />
  }
}

export const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onTodoClick={() => onTodoClick(todo.id)} />)}
  </ul>
)
