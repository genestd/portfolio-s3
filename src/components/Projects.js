import React from 'react'
import Project from "./Project"
import { scrollTo } from '../helpers'
import { projects } from "../data/projects"
import { styles } from "./styles"
class Projects extends React.Component {
  state = {
    hoverProjectId: null,
    overlayOpen: false
  }

  onMouseOver = id => {
    if (!this.state.overlayOpen)
      this.setState(() => {
        return {hoverProjectId: id}
      })
  }
  onMouseOut = id => {
    if (!this.state.overlayOpen)
      this.setState(prevState => { return prevState.hoverProjectId === id ? { hoverProjectId: null } : null})
  }

  toggleOverlay = () => this.setState(prevState => ({overlayOpen: !prevState.overlayOpen}))

  render() {
    const { hoverProjectId, overlayOpen } = this.state
    return (
      <div className='projects' id='projects'>
        <h1 id='fullstack-gallery'>
          <div className='leftNav'>
            <span className='adjust'><i className='icon-up-open-big leftNav-icon' onClick={()=>scrollTo('home', 600)}></i></span>
          </div>
          Projects - Full Stack / Serverless
          <div className='rightNav'>
            <span><i className='icon-down-open-big rightNav-icon' onClick={()=>scrollTo('react-gallery', 600)}></i></span>
          </div>
        </h1>
        <section className='gallery' >
          {
            projects.filter(project => project.category === "fullstack").map(project => {
              return <Project
                {...project}
                key={project.id}
                styles={styles}
                active={project.id === hoverProjectId}
                overlayOpen={overlayOpen}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={this.toggleOverlay}
              />
            })
          }
        </section>

        <h1 id='react-gallery'>
          <div className='leftNav'>
            <span className='adjust'><i className='icon-up-open-big leftNav-icon' onClick={()=>scrollTo('fullstack-gallery', 600)}></i></span>
          </div>
          Projects - React and D3
          <div className='rightNav'>
            <span><i className='icon-down-open-big rightNav-icon' onClick={()=>scrollTo('html-gallery', 600)}></i></span>
          </div>
        </h1>
        <section className='gallery'>
          {
            projects.filter(project => project.category === "react").map(project => {
              return <Project
                {...project}
                key={project.id}
                styles={styles}
                active={project.id === hoverProjectId}
                overlayOpen={overlayOpen}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={this.toggleOverlay}
              />
            })
          }
        </section>
        <h1 id='html-gallery'>
          <div className='leftNav'>
            <i className='icon-up-open-big leftNav-icon' onClick={()=>scrollTo('react-gallery', 600)}></i>
            </div>HTML/CSS and APIs<div className='rightNav'>
            <i className='icon-down-open-big rightNav-icon' onClick={()=>scrollTo('contact', 600)}></i>
          </div>
        </h1>
        <section className='gallery'>
          {
            projects.filter(project => project.category === "html").map(project => {
              return <Project
                {...project}
                key={project.id}
                styles={styles}
                active={project.id === hoverProjectId}
                overlayOpen={overlayOpen}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={this.toggleOverlay}
              />
            })
          }
        </section>
      </div>
    )
  }
}

export default Projects
