import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Caption extends Component {
  render() {
    const { children, heading } = this.props
    return (
      <div className={styles.caption}>
        <h4>{heading}</h4>
        {children}
      </div>
    )
  }
}

Caption.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
}

export default Caption
