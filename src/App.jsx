import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Trivia from './pages/Trivia.jsx'
import './App.css'
import PlanetExplorer from './pages/PlanetExplorer.jsx'
import PlanetDetails from './pages/PlanetDetails.jsx'
import BuildRocket from './pages/BuildRocket.jsx'
import { useAuth } from './context/AuthContext.jsx'

function ProtectedLayout() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/" replace />

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/home" replace /> : <Login />} />
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/planets" element={<PlanetExplorer />} />
        <Route path="/planets/:planetName" element={<PlanetDetails />} />
        <Route path="/build-rocket" element={<BuildRocket />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
