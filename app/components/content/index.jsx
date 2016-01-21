import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Content extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.content}>
        {children}
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
