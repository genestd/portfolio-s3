import React from 'react'
import { scrollTo } from '../helpers'
const FrontPage = () => (
  <section className="frontpage" id="home">
    <h1><strong>David Genest</strong></h1>
    <h3>Lake Oswego, OR</h3>
    <div className="flip-container">
      <div className="flipper pointer" id="flipper">
        <div className="front">
          <img src="icons/dg_logo.png" id="myLogo"/>
        </div>
        <div className="back">
          <img className="img-circle" src="icons/dave.JPG" id="myPic"/>
        </div>
      </div>
    </div>
    <div id="about">
      <div className="clearfix">
         <div className="col-2">
          <h3>Web Developer</h3>
          <p>I am a full stack developer with experience building and launching SaaS products on AWS.
          I thrive on the variety of challenges that come with developing great user experiences, efficient APIs and managing DevOps.
          Most of my work is done in React/Redux/Node/AWS, but I have experience in other languages and am dedicated to continuous learning.
          </p>
        </div>
        <div className="col-2">
          <h3>Systems Analyst</h3>
            <p>I also have 20 years of experience as a systems analyst in the financial services sector, and I bring this insight to my work as a developer.
               I have held every role in the development lifecycle, from analyst to developer to tester, and am equally comfortable writing user stories, providing support to customers or developing new features.
            </p>
        </div>
      </div>
      <div className="downNav center-text">
        <i className='icon-down-open-big downNav-icon' onClick={()=>scrollTo('projects', 600)}></i>
      </div>
    </div>
  </section>
)

export default FrontPage
