import React from 'react'
import { withStore } from '../../provide-store'
import uuid from 'uuid'
import { addTodo } from '../actions'


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


