import React from 'react'
import ReactDom from 'react-dom'
import HomeTemplate from './compositions/home/index.jsx'

import './global/styles.styl'

const Application = () => {
  //@TODO set up react routing here to avoid static component pacement
  return (
    <div>
      <HomeTemplate />
    </div>
  )
}

ReactDom.render(
  <Application />,
  document.getElementById('app')
)
