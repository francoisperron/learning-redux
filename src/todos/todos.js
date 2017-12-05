const todo = {
  create: (id, text) => ({id, text, completed: false}),
  toggle: (todo) => ({...todo, completed: !todo.completed})
}

const todos = (todoList = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [...todoList, todo.create(action.id, action.text)]
  }

  if (action.type === 'TOGGLE_TODO') {
    return todoList.map(t => t.id === action.id ? todo.toggle(t) : t)
  }

  return todoList
}

export { todos }
