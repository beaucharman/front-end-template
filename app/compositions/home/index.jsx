import React, { Component } from 'react'

import Caption from '../../components/caption/index.jsx'
import Carousel from '../../components/carousel/index.jsx'
import Thumbnail from '../../components/thumbnail/index.jsx'

import constants from '../../constants.js'
import data from './data.js'
import styles from './styles.styl'

export default class HomeTemplate extends Component {
  render() {
    return (
      <main className={styles.wrapper}>
        <header>
          {constants.PROJECT_NAME}
        </header>

        <Carousel />

        <section className={styles.centeredText}>
          <h1>{constants.PROJECT_NAME}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam he</p>
        </section>

        <Caption heading="Image Caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam he
        </Caption>

        <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit ame" />
        <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit amet" />
        <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit amet" />
        <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit amet" />

        <footer>
          &copy; Beau Charman {constants.CURRENT_YEAR}
        </footer>
      </main>
    )
  }
}
