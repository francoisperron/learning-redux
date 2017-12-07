import React from 'react'
import ReactDOM from 'react-dom'
import { myCombine, myCreateStore } from '../my-store'
import { todos } from './todos'
import { filters } from './filters'
import { TodoPage } from './components/TodoPage'
import { ProvideStore } from '../provide-store'

const run = () => {

  const todoApp = myCombine({todos, filters})
  const store = myCreateStore(todoApp)

  ReactDOM.render(
    <ProvideStore store={store}>
      <TodoPage />
    </ProvideStore>,
    document.querySelector('#root'))
}

export { run }

