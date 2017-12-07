import React from 'react'
import ReactDOM from 'react-dom'
import { myCombine, myCreateStore } from '../my-store'
import { todos } from './todos'
import { filters } from './filters'
import { TodoPage } from './components/TodoPage'
import { ProvideStore } from '../provide-store'
import { loadState, saveState } from '../local-storage'

const run = () => {
  const persistedTodos = loadState()

  const todoApp = myCombine({todos, filters})
  const store = myCreateStore(todoApp, persistedTodos)

  store.subscribe(() => saveState({todos: store.getState().todos}))

  ReactDOM.render(
    <ProvideStore store={store}>
      <TodoPage />
    </ProvideStore>,
    document.querySelector('#root'))
}

export { run }

