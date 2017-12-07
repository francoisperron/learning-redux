import React from 'react'
import { AddTodo } from './AddTodo'
import { VisibleTodoList } from './TodoList'
import { Footer } from './Footer'

export const TodoPage = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
