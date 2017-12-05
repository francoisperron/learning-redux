import React from 'react'
import { todos } from './todos'
import { myCombine, myCreateStore } from '../my-store'
import { filters } from './filters'

const run = () => {

  // const todoApp = (state = {}, action) => ({
  //   todos: todos(state.todos, action),
  //   visibilityFilter: filters(state.visibilityFilter, action)
  // })

  const todoApp = myCombine({todos, filters})

  const store = myCreateStore(todoApp)

  store.subscribe(() => { console.log(store.getState())})

  store.dispatch({type: 'ADD_TODO', id: 0, text: 'first'})
  store.dispatch({type: 'ADD_TODO', id: 1, text: 'second'})
  store.dispatch({type: 'TOGGLE_TODO', id: 0})
  store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'})
}

export { run }

