// import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { counter } from './counter'
import { myCreateStore } from './my-store'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <div>{value}</div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = myCreateStore(counter)

const render = () => {
  const counter = <Counter value={store.getState()}
                           onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
                           onDecrement={() => {store.dispatch({type: 'DECREMENT'})}} />
  ReactDOM.render(counter, document.querySelector('#root'))
}

store.subscribe(render)

render()
