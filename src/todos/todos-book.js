const fakeTodos = [
  {
    id: 1,
    text: 'hey',
    completed: true
  },
  {
    id: 2,
    text: 'ho',
    completed: true
  },
  {
    id: 3,
    text: 'let\'s go',
    completed: false
  }
]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const fetchTodos = () => delay(500).then(() => { return fakeTodos })

export { fetchTodos }