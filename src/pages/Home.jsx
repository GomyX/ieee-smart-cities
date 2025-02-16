import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link as RouterLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Partners from '../components/home/Partners'

function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />


      {/* Cards Section */}
      <Box 
        component="section"
        sx={{ 
          position: 'relative',
          bgcolor: 'background.paper',
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={4}>
              {/* Summit Card */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Paper sx={{ 
                    p: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Typography variant="h5" gutterBottom>
                      Smart Cities Summit
                    </Typography>
                    <Typography paragraph>
                      Join us for our annual Smart Cities Summit where experts from around 
                      the world gather to discuss the future of urban development and smart 
                      city technologies.
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/summit"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #071A2D 30%, #0097a7 90%)'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>

              {/* Hackathon Card */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                      Smart Cities Hackathon
                    </Typography>
                    <Typography paragraph>
                      Participate in our Smart Cities Hackathon to develop innovative 
                      solutions for urban challenges and compete for exciting prizes while 
                      networking with industry experts.
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/hackathon"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #071A2D 30%, #0097a7 90%)'
                        }
                      }}
                    >
                      Join Now
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>


      </Box>
      <Partners />
    </motion.div>
  )
}

export default Home