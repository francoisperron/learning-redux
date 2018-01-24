import { loadState, saveState } from '../local-storage'
import { todos } from './todos'
import { addPromiseSupportToDispatch, myCombine, myCreateStore } from '../my-store'
import { filters } from './filters'

export const configureStore = () => {
  // const persistedTodos = loadState()

  const todoApp = myCombine({todos, filters})
  // const store = myCreateStore(todoApp, persistedTodos)
  const store = myCreateStore(todoApp)
  store.dispatch = addPromiseSupportToDispatch(store)

  // store.subscribe(() => saveState({todos: store.getState().todos}))

  return store
}