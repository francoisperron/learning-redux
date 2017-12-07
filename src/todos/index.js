import React from 'react'
import ReactDOM from 'react-dom'
import { myCombine, myCreateStore } from '../my-store'
import { todos } from './todos'
import { filters } from './filters'
import { TodoPage } from './components/TodoPage'

const run = () => {

  const todoApp = myCombine({todos, filters})
  const store = myCreateStore(todoApp)

  ReactDOM.render(<TodoPage store={store} />, document.querySelector('#root'))
}

export { run }

