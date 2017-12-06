import React from 'react'
import { todos } from './todos'
import { myCombine, myCreateStore } from '../my-store'
import { filters } from './filters'
import ReactDOM from 'react-dom'
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import { FilterList } from './components/FilterList'

const run = () => {

  const todoApp = myCombine({todos, filters})
  const store = myCreateStore(todoApp)

  const TodoApp = ({filter, todos}) => {
    return (
      <div>
        <AddTodo store={store} />
        <TodoList filter={filter} todos={todos} store={store} />
        <FilterList filter={filter} store={store} />
      </div>
    )
  }

  const render = () => {
    const app = <TodoApp todos={store.getState().todos} filter={store.getState().filters} />
    ReactDOM.render(app, document.querySelector('#root'))
  }

  store.subscribe(render)

  render()
}

export { run }

