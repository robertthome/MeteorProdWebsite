import React from 'react'
import './MageFeatAlDetails.css'

const MageFeatAlDetails = (props) => {
  return (
    <div className="album_container">
      <h2 className="title">{props.title}</h2>
      <a className="link" href={props.link} target="_blank">
        <img className="home-img" src={props.image} alt="album cover" />
      </a>
      <p className="release_date">{props.release}</p>
    </div>
  )
}

export default MageFeatAlDetails
