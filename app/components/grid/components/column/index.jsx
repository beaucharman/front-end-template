import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import styles from './styles.styl'

class Column extends Component {
  render() {
    const { children, pattern } = this.props
    const className = classNames(
      styles.column,
      styles[`column${pattern}`]
    )

    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}

Column.propTypes = {
  children: PropTypes.node,
  pattern: PropTypes.number,
}

export default Column
