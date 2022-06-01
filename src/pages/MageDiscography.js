import React from 'react'
import { Grid, Divider } from '@mui/material'
import MageDiscogDetails from '../components/MageDiscogDetails'
import './MageDiscography.css'

import Haph from '../../src/assets/images/haph.jpeg'
import Houseofflowers from '../../src/assets/images/houseofflowers.jpeg'
import Carpediem from '../../src/assets/images/CarpeDiem.jpeg'
import Hikikomori from '../../src/assets/images/Hikikomori.jpeg'
import Dreams from '../../src/assets/images/Dreams.jpeg'
import Spells from '../../src/assets/images/Spells.jpeg'

const MAGE_ALBUMS = [
  {
    id: 'a1',
    title: 'House of Flowers EP',
    image: Houseofflowers,
    release: '2022'
  },
  {
    id: 'a2',
    image: Haph,
    title: 'If You Only Knew...',
    release: '2020'
  },
  {
    id: 'a3',
    image: Carpediem,
    title: 'CarpeDiem',
    release: '2020'
  },
  {
    id: 'a4',
    image: Hikikomori,
    title: 'Hikikomori',
    release: '2020'
  },
  {
    id: 'a6',
    image: Dreams,
    title: 'Dreams',
    release: '2019'
  },
  {
    id: 'a5',
    image: Spells,
    title: 'Spells',
    release: '2019'
  }
]

const MageDiscography = (props) => {
  return (
    <Grid
      className="discography_background"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      columnSpacing={{ xs: 1, sm: 2, md: -80 }}
    >
      {MAGE_ALBUMS.map((album) => (
        <MageDiscogDetails
          className="album_content"
          key={album.id}
          title={album.title}
          image={album.image}
          release={album.release}
          link={album.link}
        />
      ))}
    </Grid>
  )
}

export default MageDiscography
