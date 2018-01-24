import React from 'react'
import { TodoItem } from './TodoItem'
import { withStore } from '../../provide-store'
import * as todosBook from '../todos-book'

const toggleTodo = (id) => ({type: 'TOGGLE_TODO', id})
const fetchTodos = () => todosBook.fetchTodos().then(todos => ({type: 'RECEIVE_TODOS', todos}))

const filteredTodos = (filters, todos) => {
  if (filters === 'SHOW_COMPLETED') {
    return todos.filter(t => t.completed)
  }
  if (filters === 'SHOW_ACTIVE') {
    return todos.filter(t => !t.completed)
  }
  return todos
}


const VisibleTodoList = withStore(({store}) => {
  const {filters, todos} = store.getState()
  return <RenderVisibleTodoList filters={filters} todos={todos} store={store}/>
})

class RenderVisibleTodoList extends React.Component {
  componentDidMount(){
    this.props.store.dispatch(fetchTodos())
  }
  render () {
    return <TodoList todos={filteredTodos(this.props.filters, this.props.todos)} onTodoClick={id => this.props.store.dispatch(toggleTodo(id))} />
  }
}

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} onTodoClick={() => onTodoClick(todo.id)} />)}
  </ul>
)

export { VisibleTodoList }