import React from 'react'
import PropsType from 'prop-types'
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
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const {filters, todos} = this.context.store.getState()
    return <TodoList todos={filteredTodos(filters, todos)}
                     onTodoClick={id => this.context.store.dispatch({type: 'TOGGLE_TODO', id})} />
  }
}

VisibleTodoList.contextTypes = {store: PropsType.object}

export const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onTodoClick={() => onTodoClick(todo.id)} />)}
  </ul>
)
