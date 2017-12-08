import { loadState, saveState } from '../local-storage'
import { todos } from './todos'
import { myCombine, myCreateStore } from '../my-store'
import { filters } from './filters'

export const configureStore = () => {
  const persistedTodos = loadState()

  const todoApp = myCombine({todos, filters})
  const store = myCreateStore(todoApp, persistedTodos)

  store.subscribe(() => saveState({todos: store.getState().todos}))

  return store
}