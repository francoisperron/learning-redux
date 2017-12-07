import React from 'react'

export class FilterLink extends React.Component {

  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const currentFilter = this.props.store.getState().filters
    const onFilterClick = () => this.props.store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: this.props.filter})

    return <Link active={this.props.filter === currentFilter} onClick={onFilterClick}>{this.props.children}</Link>
  }
}

const Link = ({active, onClick, children}) => {
  const onLinkClick = e => {
    e.preventDefault()
    onClick()
  }

  return active
    ? <span>{children}</span>
    : <a href='#' onClick={onLinkClick}>{children}</a>
}