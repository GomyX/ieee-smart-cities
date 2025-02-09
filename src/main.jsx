import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { AnimatePresence } from 'framer-motion'  // Add this import
import App from './App'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0A2647',
      light: '#1565c0',
      dark: '#071A2D',
    },
    secondary: {
      main: '#00E1FF',
      light: '#73e8ff',
      dark: '#0097a7',
    },
    accent: {
      main: '#FF6B00',
      light: '#ff9d3f',
      dark: '#c43c00',
    },
    background: {
      default: '#F4F4F4',
      paper: '#ffffff',
      dark: '#071A2D',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          width: '100%'
        },
        body: {
          backgroundColor: '#F4F4F4',
          minHeight: '100vh',
          minWidth: '100vw',
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          WebkitTextSizeAdjust: '100%',
          '@media (max-width: 600px)': {
            fontSize: '14px',
          }
        },
        '#root': {
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        },
        '*': {
          boxSizing: 'border-box'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '100% !important',
          padding: '0 16px',
          '@media (min-width: 600px)': {
            padding: '0 24px',
          },
          '@media (min-width: 960px)': {
            padding: '0 32px',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
          color: 'white',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(45deg, #071A2D 30%, #0097a7 90%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 20px rgb(0, 176, 199)' // Changed to match button gradient color
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 20px rgb(0, 116, 131)' // Changed to match button gradient color
          }
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence mode="wait">
          <App />
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)


