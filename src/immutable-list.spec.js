import { describe, it } from 'mocha'
import { expect } from 'chai'

const add = (list, element) => ([...list, element])
const remove = (list, index) => ([...list.slice(0, index), ...list.slice(index + 1)])
const replace = (list, index, value) => ([...list.slice(0, index), value, ...list.slice(index + 1)])

describe('An immutable list', () => {
  it('adds without modifying source', () => {
    const originalList = [1, 2]
    const modifiedList = add(originalList, 3)

    expect(originalList).to.deep.equal([1, 2])
    expect(modifiedList).to.deep.equal([1, 2, 3])
  })
  it('removes without modifying source', () => {
    const originalList = [1, 2, 3]
    const modifiedList = remove(originalList, 1)

    expect(originalList).to.deep.equal([1, 2, 3])
    expect(modifiedList).to.deep.equal([1, 3])
  })
  it('replaces element modifying source', () => {
    const originalList = [1, 2, 3]
    const modifiedList = replace(originalList, 1, 4)

    expect(originalList).to.deep.equal([1, 2, 3])
    expect(modifiedList).to.deep.equal([1, 4, 3])
  })
}) 
