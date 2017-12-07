import React from 'react'
import PropsType from 'prop-types'

export class FilterLink extends React.Component {

  componentDidMount () {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const currentFilter = this.context.store.getState().filters
    const onFilterClick = () => this.context.store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: this.props.filter})

    return <Link active={this.props.filter === currentFilter} onClick={onFilterClick}>{this.props.children}</Link>
  }
}
FilterLink.contextTypes = {store: PropsType.object}


const Link = ({active, onClick, children}) => {
  const onLinkClick = e => {
    e.preventDefault()
    onClick()
  }

  return active
    ? <span>{children}</span>
    : <a href='#' onClick={onLinkClick}>{children}</a>
}