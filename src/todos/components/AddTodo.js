import React from 'react'
import { withStore } from '../../provide-store'
import uuid from 'uuid'

const addTodo = (text) => ({type: 'ADD_TODO', id: uuid.v4(), text})

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


