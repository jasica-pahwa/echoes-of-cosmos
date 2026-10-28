import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Trivia from './pages/Trivia.jsx'
import Login from './pages/Login.jsx'
import './App.css'
import PlanetExplorer from './pages/PlanetExplorer.jsx'
import PlanetDetails from './pages/PlanetDetails.jsx'
import BuildRocket from './pages/BuildRocket.jsx'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/planets" element={<PlanetExplorer />} />
        <Route path="/planets/:planetName" element={<PlanetDetails />} />
        <Route path="/build-rocket" element={<BuildRocket />} />
      </Routes>
      <Footer />
    </div>
  )
}



