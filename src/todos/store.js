import { todos } from './reducers/todos'
import { filters } from './reducers/filters'
import { addPromiseSupportToDispatch, myCombine, myCreateStore } from '../my-store'

export const configureStore = () => {
  const todoApp = myCombine({todos: todos, filters: filters})

  const store = myCreateStore(todoApp)
  store.dispatch = addPromiseSupportToDispatch(store)

  return store
}