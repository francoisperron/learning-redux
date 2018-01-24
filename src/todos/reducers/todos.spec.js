import { describe, it } from 'mocha'
import { expect } from 'chai'
import { todos } from './todos'

describe('The todos', () => {
  it('is empty by default', () => {
    expect(todos(undefined, {})).to.deep.equal([])
  })

  it('adds to the list', () => {
    const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'}
    const addedTodo = {id: 0, text: 'Learn Redux', completed: false}

    expect(todos([], action)).to.deep.equal([addedTodo])
  })

  it('toggles completed', () => {
    const action = {type: 'TOGGLE_TODO', id: 0}
    const aTodo = {id: 0, text: 'Learn Redux', completed: false}
    const anotherTodo = {id: 1, text: 'Learn js', completed: false}

    expect(todos([aTodo, anotherTodo], action)).to.deep.equal([{...aTodo, completed: true}, anotherTodo])
  })
})
