import React from 'react'

export const Link = ({active, onClick, children}) => {
  const onLinkClick = e => {
    e.preventDefault()
    onClick()
  }

  return active
    ? <span>{children}</span>
    : <a href='#' onClick={onLinkClick}>{children}</a>
}