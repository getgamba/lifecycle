
Lifecycle.js
------------

This package provides a higher order component that injects React's life cycle methods
into their props.

Usage
-----
In some-component.jsx:
```
import React from 'react'
import { connect } from 'redux'
import lifecycle from 'life-cycle'

class SomeComponent extends React.Component {
    ....
}

function mapDispatchToProps(dispatch) {
  return {
    willMount: (props)=> {
      /* called when the component will mount */
      /*   props: component's this.props */
    },

    willUnmount: (props)=> {
      /* called when the component will un-mount */
      /*   props: component's this.props */
    },

    willUpdate: (props, nextProps)=> {
      /* called when the component will update */
      /*   props: component's this.props */
      /*   nextProps: up-coming props */
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle(SomeComponent));
```

