import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Trivia from './pages/Trivia.jsx'
import './App.css'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" element={<Trivia />} />
      </Routes>
      <Footer />
    </div>
  )
}