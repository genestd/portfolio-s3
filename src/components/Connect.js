import React from 'react'
import { scrollTo } from '../helpers'

const Connect = () => (
  <section className="contact" id="contact">
    <h1 className='center-text'>
      <div className='leftNav'>
        <i className='icon-home leftNav-icon' onClick={()=>scrollTo('home', 600)}></i>
      </div>
      Connect With Me
      <div className='rightNav'>
        <i className='icon-up-open-big rightNav-icon' onClick={()=>scrollTo('html-gallery', 600)}></i>
      </div>
    </h1>
    <div className="container">
      <a href="https://www.linkedin.com/in/davegenest/" target="_blank">
      <div>
          <div className="circle">
          <i className="icon-linkedin"></i>
        </div>
        <h2>Resume</h2>
      </div>
      </a>
      <a href="mailto:drwgenest@gmail.com">
      <div>
        <div className="circle">
          <i className="icon-paper-plane"></i>
        </div>
        <h2>Mail</h2>
      </div>
      </a>
      <a href="https://twitter.com/intent/tweet?text=Sweet%20Portfolio&hashtags=portfolio&via=pdx_gen" target="_blank">
      <div>
        <div className="circle">
          <i className="icon-twitter"></i>
        </div>
        <h2>Feedback</h2>
      </div>
      </a>
    </div>

    <hr/>
    <h2 className='center-text'>Lake Oswego, OR</h2>
    <div className="mapCanvas" id="mapCanvas"></div>
  </section>
)

export default Connect