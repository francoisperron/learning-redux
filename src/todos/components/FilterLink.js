import React from 'react'
import { withStore } from '../../provide-store'
import { Link } from './Link'
import { setVisibilityFilter } from '../actions'

export const FilterLink = withStore(({store, filter, children}) => {
  const currentFilter = store.getState().filters
  const onFilterClick = () => store.dispatch(setVisibilityFilter(filter))

  return <Link active={filter === currentFilter} onClick={onFilterClick}>{children}</Link>
})
