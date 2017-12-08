import React from 'react'
import { render } from 'react-dom'
import { configureStore } from './store'
import { Root } from './components/Root'

const run = () => {
  const store = configureStore()
  render(<Root store={store} />, document.querySelector('#root'))
}

export { run }

