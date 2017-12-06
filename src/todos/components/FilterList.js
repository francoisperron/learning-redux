import React from 'react'
import { FilterLink } from './FilterLink'

export const FilterList = ({filter, store}) => (
  <p>
    Show:
    <FilterLink filter='SHOW_ALL' currentFilter={filter} store={store}>All</FilterLink>{' '}
    <FilterLink filter='SHOW_ACTIVE' currentFilter={filter} store={store}>Active</FilterLink>{' '}
    <FilterLink filter='SHOW_COMPLETED' currentFilter={filter} store={store}>Completed</FilterLink>
  </p>
)
