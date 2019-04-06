import React from 'react'
import FrontPage from './FrontPage'
import Connect from './Connect'
import Projects from './Projects'
import '../styles/main.css'

export default class Portfolio extends React.Component{

  render(){
    return(
      <div className="scroller" id="scroller">
        <FrontPage />
        <Projects />
        <Connect />
      </div>
    )
  }
}
