import React from 'react'
import { withStore } from '../../provide-store'


export const FilterLink = withStore(({store, filter, children}) => {
  const currentFilter = store.getState().filters
  const onFilterClick = () => store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter})

  return <Link active={filter === currentFilter} onClick={onFilterClick}>{children}</Link>
})

const Link = ({active, onClick, children}) => {
  const onLinkClick = e => {
    e.preventDefault()
    onClick()
  }

  return active
    ? <span>{children}</span>
    : <a href='#' onClick={onLinkClick}>{children}</a>
}