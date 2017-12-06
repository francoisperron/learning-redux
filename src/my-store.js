const myCreateStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)

    return () => { listeners = listeners.filter(l => l !== listener) }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({})

  return {getState, dispatch, subscribe}
}

// replaces
// const todoApp = (state = {}, action) => ({
//   todos: todos(state.todos, action),
//   visibilityFilter: filters(state.visibilityFilter, action)
// })
const myCombine = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      }, {})
  }
}

export { myCreateStore, myCombine }
