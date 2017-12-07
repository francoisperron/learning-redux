import React from 'react'
import { AddTodo } from './AddTodo'
import { VisibleTodoList } from './TodoList'
import { Footer } from './Footer'

export const TodoPage = ({store}) => {
  return (
    <div>
      <AddTodo store={store} />
      <VisibleTodoList store={store} />
      <Footer store={store} />
    </div>
  )
}
