import * as todosBook from '../repos/todos-book'
import uuid from 'uuid'

export const addTodo = (text) => ({type: 'ADD_TODO', id: uuid.v4(), text})
export const toggleTodo = (id) => ({type: 'TOGGLE_TODO', id})
export const fetchTodos = () => todosBook.fetchTodos().then(todos => ({type: 'RECEIVE_TODOS', todos}))
export const setVisibilityFilter = (filter) => ({type: 'SET_VISIBILITY_FILTER', filter})
