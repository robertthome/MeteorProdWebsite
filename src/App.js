import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import MageDiscography from './pages/MageDiscography'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/magediscography" element={<MageDiscography />} />
      </Routes>
    </div>
  )
}

export default App

/* <Link to="/magediscography">
  <button type="click">Click me</button>
</Link> */
