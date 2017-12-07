import React from 'react'
import { withStore } from '../../provide-store'
import { Link } from './Link'

export const FilterLink = withStore(({store, filter, children}) => {
  const currentFilter = store.getState().filters
  const onFilterClick = () => store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter})

  return <Link active={filter === currentFilter} onClick={onFilterClick}>{children}</Link>
})
