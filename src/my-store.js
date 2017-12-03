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

export { myCreateStore }
