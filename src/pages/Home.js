import React from 'react'
import Header from '../components/frontpage/Header'
import MageFeatAlbums from '../components/frontpage/MageFeatAlbums'

import './Home.css'

import Haph from '../../src/assets/images/haph.jpeg'
import Houseofflowers from '../../src/assets/images/houseofflowers.jpeg'
import Carpediem from '../../src/assets/images/CarpeDiem.jpeg'

const LATEST = [
  {
    id: 'a1',
    title: 'House of Flowers EP',
    image: Houseofflowers,
    release: '2022',
    link: 'https://open.spotify.com/album/6dOQ66gGdBx2y6cxQyDffy'
  },
  {
    id: 'a2',
    image: Haph,
    title: 'If You Only Knew...',
    release: '2020',
    link: 'https://open.spotify.com/album/28tI6kOzAIi2NSR1zQWWkT'
  },
  {
    id: 'a3',
    image: Carpediem,
    title: 'CarpeDiem',
    release: '2020',
    link: 'https://open.spotify.com/album/48hqDQFMcKvvl6bmPWKqoo'
  }
]

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <MageFeatAlbums latest={LATEST} />
    </div>
  )
}

export default Home
