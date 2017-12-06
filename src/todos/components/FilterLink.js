import React from 'react'

export const FilterLink = ({filter, currentFilter, children, store}) => {
  return currentFilter === filter
    ? <span>{children}</span>
    : <a href='#' onClick={() => store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter})}>{children}</a>
}