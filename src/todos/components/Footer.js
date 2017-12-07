import React from 'react'
import { FilterLink } from './FilterLink'

export const Footer = ({filter, store}) => (
  <p>
    Show:
    <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>{' '}
    <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>{' '}
    <FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>
  </p>
)
