
// src/helpers/lifecycle.js

import React from 'react'

export default function(Component) {
  class LifecycleComponent extends React.Component {
    componentWillMount() {
      this.props.willMount && this.props.willMount(this.props)
    }

    componentWillUpdate(nextProps) {
      this.props.willUpdate && this.props.willUpdate(this.props, nextProps)
    }

    componentWillUnmount() {
      this.props.willUnmount && this.props.willUnmount(this.props)
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return LifecycleComponent
}
