import { createStore } from 'redux'
import { counter } from './counter'

const store = createStore(counter)

// holds app state
console.log(store.getState())

store.subscribe(() => {
  console.log('changed')
  console.log(store.getState())
})

// allows to dispatch actions
store.dispatch({type: 'INCREMENT'})

