import React from 'react'
import PropsType from 'prop-types'

export class ProvideStore extends React.Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children
  }
}

ProvideStore.childContextTypes = {store: PropsType.object}
