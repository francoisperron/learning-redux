const myCreateStore = (reducer, originalState = {}) => {
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

  state = originalState
  dispatch({})

  return {getState, dispatch, subscribe}
}

const myCombine = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})
  }
}

const addPromiseSupportToDispatch = (store) => {
  const actionDispatch = store.dispatch
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(actionDispatch)
    }
    return actionDispatch(action)
  }
}

export { myCreateStore, myCombine, addPromiseSupportToDispatch }
