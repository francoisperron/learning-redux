import { describe, it } from 'mocha'
import { expect } from 'chai'
import { counter } from './counter'

describe('The counter', () => {
  it('increments', () => {
    expect(counter(0, {type: 'INCREMENT'})).to.equal(1)
    expect(counter(1, {type: 'INCREMENT'})).to.equal(2)
  })

  it('decrements', () => {
    expect(counter(2, {type: 'DECREMENT'})).to.equal(1)
    expect(counter(1, {type: 'DECREMENT'})).to.equal(0)
  })

  it('initialises at 0', () => {
    expect(counter(undefined, {})).to.equal(0)
  })
})
