import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.wrapper}>
        {children}
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
