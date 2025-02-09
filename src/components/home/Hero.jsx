import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link as RouterLink } from 'react-router-dom'

function Hero() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Box 
            component={motion.div}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography 
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                background: theme => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Smart Cities Summit & Hackathon
            </Typography>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} gutterBottom>
              Shaping Tomorrow's Cities Through Technology
            </Typography>
          </Box>

          <Box 
            component={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typography variant="h5" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }} gutterBottom>
              March 15-16, 2024
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
              Zewail City Campus
            </Typography>
          </Box>

          <Stack 
            component={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
          >
            <Button
              component={RouterLink}
              to="/summit"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                px: 4,
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              Explore Summit
            </Button>
            <Button
              component={RouterLink}
              to="/hackathon"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main'
                }
              }}
            >
              Join Hackathon
            </Button>
          </Stack>

          <Box 
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            sx={{ mt: 6 }}
          >
            <Stack direction="row" spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
              <img src="/ieee-logo-white.png" alt="IEEE Logo" style={{ height: { xs: 30, sm: 35, md: 40 } }} />
              <img src="/ntra-logo-white.png" alt="NTRA Logo" style={{ height: { xs: 30, sm: 35, md: 40 } }} />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero