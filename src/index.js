// import { createStore } from 'redux'
import { counter } from './counter'
import { myCreateStore } from './my-store'

// const store = createStore(counter)
const store = myCreateStore(counter)

console.log(store.getState())

store.subscribe(() => {
  console.log('changed')
  console.log(store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
