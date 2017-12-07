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

export const withStore = (Component) => {
  return class ComponentWithStore extends React.Component {
    static contextTypes = {
      store: PropsType.object
    }

    componentDidMount () {
      this.unsubscribe = this.context.store.subscribe(() => {
        this.forceUpdate()
      })
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      return <Component store={this.context.store} {...this.props} />
    }
  }
}
