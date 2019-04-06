import React, {Fragment} from 'react'

const Project = props => {
  const projectStyle = props.active ? props.styles.hoverStyle : props.styles.inactiveStyle
  const style = {
    ...projectStyle,
    backgroundImage: `url(${props.active ? props.hoverImage : props.staticImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: '100% 100%',
  }
  return (
    <Fragment>
      <div
        className='cell pointer'
        id={props.id}
        onMouseOver={() => props.onMouseOver(props.id)}
        onMouseOut={() => props.onMouseOut(props.id)}
        onClick={props.overlay && props.onClick}
        style={style}
      >
        <div
          className='caption'
          id={`${props.id}-caption`}
          style={{
            opacity: props.active && props.overlay ? 0 : 1,
            zIndex: props.active && props.overlay ? -1 : 1,
            pointerEvents: props.active && props.overlay ? 'none' : null,
            cursor: props.active && props.overlay ? 'pointer' : 'normal'
          }}
        >
          <div className='aboutProj'>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
          </div>
        </div>
      </div>
      {
        props.overlay && <div
          className={`overlay overlay-scale ${props.overlayOpen && props.active ? "open" : ""}`}
          id={`${props.id}-overlay`}
          onClick={props.onClick}
        >
          <h1>{props.overlayTitle}</h1>
            <div className="fcol">
              <div className='padded'>
                {props.overlayDescription}
              </div>
              <div className='padded'>
                <b><a href={props.projectURL} target="_blank">{props.projectURLText}</a></b>
              </div>
              <div className='padded clearfix'>
                {
                  props.skills.map(skill => <div key={skill} className="skill">{skill}</div>)
                }
              </div>
              <div className='padded'>
                <b><a href={props.repositoryURL} target="_blank">{props.repositoryURLText}</a></b>
              </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default Project
