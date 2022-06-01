import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Divider } from '@mui/material'
import MageFeatAlDetails from './MageFeatAlDetails'
import './MageFeatAlbums.css'

const MageFeatAlbums = (props) => {
  return (
    <div className="grid_container">
      <h1 className="mage_header">Latest from Artist BLACK MAGE 88</h1>
      <Grid
        className="k"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mt={6}
      >
        {props.latest.map((album) => (
          <MageFeatAlDetails
            className="album_content sparkle u-hover--sparkle"
            key={album.id}
            title={album.title}
            image={album.image}
            release={album.release}
            link={album.link}
          />
        ))}
        <Link to="/magediscography">
          <img className="mage_logo" src="https://i.imgur.com/11Y8NYJ.jpg" />
          <h3 className="view_link_text">VIEW ALL ALBUMS</h3>
        </Link>
      </Grid>
    </div>
  )
}

export default MageFeatAlbums
