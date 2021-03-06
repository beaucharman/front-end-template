import React, { Component } from 'react'

import Caption from '../../components/caption/index.jsx'
import Carousel from '../../components/carousel/index.jsx'
import Content from '../../components/content/index.jsx'
import Thumbnail from '../../components/thumbnail/index.jsx'
import Grid from '../../components/grid/index.jsx'
const { Column, Container, Row } = Grid

import constants from '../../constants.js'
import data from './data.js'
import globalStyles from '../../global/styles.styl'

export default class HomeTemplate extends Component {
  render() {
    return (
      <Container>
        <header>
          {constants.PROJECT_NAME}
        </header>

        <Carousel />

        <Content>
          <h1>{constants.PROJECT_NAME}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam he</p>
        </Content>

        <Caption heading="Image Caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam he
        </Caption>

        <Row>
          <Column pattern={4}>
            <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit ame" />
          </Column>
          <Column pattern={4}>
            <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit ame" />
          </Column>
          <Column pattern={4}>
            <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit ame" />
          </Column>
          <Column pattern={4}>
            <Thumbnail image="thisimage" heading="Project name" subHeading="Lorem ipsum dolor sit ame" />
          </Column>
        </Row>
        
        <footer className={globalStyles.footer}>
          &copy; Beau Charman {constants.CURRENT_YEAR}
        </footer>
      </Container>
    )
  }
}
