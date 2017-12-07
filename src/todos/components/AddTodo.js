import React from 'react'
import { withStore } from '../../provide-store'

let nextTodoId = 0
const addTodo = (text) => ({type: 'ADD_TODO', id: nextTodoId++, text})


export const AddTodo = withStore(({store}) => {
  let input
  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
        store.dispatch(addTodo(input.value))
        input.value = ''
      }}>Add
      </button>
    </div>
  )
})


