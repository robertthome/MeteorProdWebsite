import { Route } from 'react-router-dom'
import Home from './pages/Home'
import MageDiscography from './pages/MageDiscography'
import './App.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/magediscography" component={MageDiscography} />
    </div>
  )
}

export default App
