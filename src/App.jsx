import { Routes, Route, useLocation } from 'react-router-dom' // Add useLocation
import { Box, Container } from '@mui/material'
import { AnimatePresence } from 'framer-motion' // Add this import
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Summit from './pages/Summit'
import Hackathon from './pages/Hackathon'

function App() {
  const location = useLocation() // Get current location

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}
    >
      <Header />
      <Container 
        component="main" 
        maxWidth="xl"
        sx={{ 
          flex: 1,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Wrap Routes with AnimatePresence */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/summit" element={<Summit />} />
            <Route path="/hackathon" element={<Hackathon />} />
          </Routes>
        </AnimatePresence>
      </Container>
      <Footer />
    </Box>
  )
}

export default App