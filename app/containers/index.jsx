import React, { Component } from 'react'
import HomeTemplate from '../templates/home/index.jsx'
import './styles.styl'

export default class Application extends Component {
  //@TODO set up react routing here to avoid static component pacement
  render() {
    return (
      <div>
        <HomeTemplate />
      </div>
    )
  }
}
