import React, { Component } from 'react'

import Caption from '../../components/caption/index.jsx'
import Carousel from '../../components/carousel/index.jsx'
import Thumbnail from '../../components/thumbnail/index.jsx'

import styles from './styles.styl'

export default class HomeTemplate extends Component {
  render() {
    return (
      <main class={styles.wrapper}>

        <Carousel />

        <section className={styles.centeredText}>
          <h1>Project Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam he</p>
        </section>

        <Caption heading="Image Caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam he
        </Caption>

        <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit amet , consectetur adipiscing elit  . Nam" />

      </main>
    )
  }
}
