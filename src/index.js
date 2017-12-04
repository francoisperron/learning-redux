// import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { counter } from './counter'
import { myCreateStore } from './my-store'

const store = myCreateStore(counter)

const Counter = ({value}) => (
  <div>{value}</div>
)

const render = () => {
  ReactDOM.render(<Counter value={store.getState()}/>, document.querySelector('#root'))
}

store.subscribe(() => {
  console.log('store changed : ' + store.getState());
  render()
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'DECREMENT'})
