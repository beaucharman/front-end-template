import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Caption extends Component {
  render() {
    const { children, heading } = this.props
    return (
      <div className={styles.caption}>
        <h4 className={styles.heading}>{heading}</h4>
        <div className={styles.copy}>{children}</div>
      </div>
    )
  }
}

Caption.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
}

export default Caption
