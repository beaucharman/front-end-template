import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Column extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.column}>
        {children}
      </div>
    )
  }
}

Column.propTypes = {
  children: PropTypes.node,
}

export default Column
