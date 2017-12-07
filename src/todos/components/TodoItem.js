import React from 'react'

export const TodoItem = ({todo, onTodoClick}) => (
  <li onClick={onTodoClick} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
    {todo.text}
  </li>
)
