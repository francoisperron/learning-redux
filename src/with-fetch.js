import React from 'react'

export const withFetch = (fetch, Component) => {
  return class ComponentWithFetch extends React.Component {
    componentDidMount () {
      this.props.store.dispatch(fetch())
    }

    render () {
      return <Component {...this.props} />
    }
  }
}
