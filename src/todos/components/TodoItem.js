import React from 'react'

export const TodoItem = ({todo, store}) => (
  <li onClick={() => store.dispatch({type: 'TOGGLE_TODO', id: todo.id})}
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
    {todo.text}
  </li>
)
