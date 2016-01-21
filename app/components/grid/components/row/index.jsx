import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Row extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.row}>
        {children}
      </div>
    )
  }
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Row
