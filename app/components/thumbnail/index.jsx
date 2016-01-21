import React, { Component, PropTypes } from 'react'

import styles from './styles.styl'

class Thumbnail extends Component {
  render() {
    const { image, heading, subHeading } = this.props
    return (
      <figure className={styles.thumbnail}>
        <figcaption>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.subHeading}>{subHeading}</div>
        </figcaption>
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
