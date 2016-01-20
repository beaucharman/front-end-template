import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Thumbnail extends Component {
  render() {
    const { image, heading, subHeading } = this.props
    return (
      <figure className={styles.thumbnail}>
        <span>{heading}</span>
        <figcaption>{subHeading}</figcaption>
      </figure>
    )
  }
}

Thumbnail.propTypes = {
  image: PropTypes.node,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
}

export default Thumbnail
