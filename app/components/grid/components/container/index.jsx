import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Container extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.container}>
        {children}
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
