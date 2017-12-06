import React from 'react'
import { todos } from './todos'
import { myCombine, myCreateStore } from '../my-store'
import { filters } from './filters'
import ReactDOM from 'react-dom'

const run = () => {

  const todoApp = myCombine({todos, filters})
  const store = myCreateStore(todoApp)

  let nextTodoId = 0
  const TodoApp = ({todos}) => {
    let input = ''
    return (
      <div>
        <input ref={node => input = node} />
        <button onClick={() => {
          store.dispatch({type: 'ADD_TODO', id: nextTodoId++, text: input.value})
          input.value = ''
        }}>Add
        </button>
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    )

  }

  const render = () => {
    ReactDOM.render(<TodoApp todos={store.getState().todos} />, document.querySelector('#root'))
  }

  store.subscribe(render)

  render()
}

export { run }

