import React from 'react'
import { withStore } from '../../provide-store'

let nextTodoId = 0
export const AddTodo = withStore(({store}) => {
  let input
  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
        store.dispatch({type: 'ADD_TODO', id: nextTodoId++, text: input.value})
        input.value = ''
      }}>Add
      </button>
    </div>
  )
})


