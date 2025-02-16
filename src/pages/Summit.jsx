import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
  Avatar,
  Stack
} from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ArtificialIntelligenceIcon from '@mui/icons-material/Psychology'
import IoTIcon from '@mui/icons-material/Router'
import SecurityIcon from '@mui/icons-material/Security'
import CloudIcon from '@mui/icons-material/Cloud'

import heroBg from "../assets/hero.JPG";
import IEELogo from "../assets/IEEE-logo.png";
import NTRALogo from "../assets/NTRA-Logo.png";
import AppXLogo from "../assets/appx-logo-01.png";


const speakers = {
  'Dr. Ahmed Abdrabou': {
    image: '/speakers/ahmed-abdrabou.jpg',
    title: 'Cloud Computing Expert',
    affiliation: 'IEEE Member'
  },
  'Dr. Bassem Boshra': {
    image: '/speakers/bassem-boshra.jpg',
    title: 'IoT Specialist',
    affiliation: 'IEEE Member'
  },
  'Eng. Ibrahim Hegazy': {
    image: '/speakers/ibrahim-hegazy.jpg',
    title: 'Cybersecurity Expert',
    affiliation: 'IEEE Member'
  },
  'Eng. Omar Ezzeldin': {
    image: '/speakers/omar-ezzeldin.jpg',
    title: 'Ethical Hacking Specialist',
    affiliation: 'IEEE Member'
  },
  'Featured Speaker': {
    image: '/speakers/placeholder.jpg',
    title: 'To be announced',
    affiliation: ''
  }
}

const tracks = [
  {
    title: 'Artificial Intelligence',
    icon: <ArtificialIntelligenceIcon sx={{ fontSize: 40 }}/>,
    description: 'Explore AI applications in smart city infrastructure and services.'
  },
  {
    title: 'Internet of Things',
    icon: <IoTIcon sx={{ fontSize: 40 }}/>,
    description: 'Connect and optimize city systems through IoT solutions.'
  },
  {
    title: 'Cybersecurity',
    icon: <SecurityIcon sx={{ fontSize: 40 }}/>,
    description: 'Protect smart city infrastructure and citizen data.'
  },
  {
    title: 'Cloud Computing',
    icon: <CloudIcon sx={{ fontSize: 40 }}/>,
    description: 'Scale and manage smart city services through cloud platforms.'
  }
]

const agenda = {
  day1: [
    { time: '9:00 AM', session: 'Smart Cities Overview', speaker: 'Featured Speaker' },
    { time: '10:30 AM', session: '5G in Smart Cities', speaker: 'Featured Speaker' },
    { time: '12:00 PM', session: 'Cloud Computing Solutions', speaker: 'Featured Speaker' },
    { time: '2:00 PM', session: 'IoT Applications', speaker: 'Featured Speaker' },
    { time: '3:30 PM', session: 'Workshop: Cloud and IoT - Firebase', speaker: 'Dr. Ahmed Abdrabou' },
    { time: '5:00 PM', session: 'Workshop: Cloud and IoT - Smart Home', speaker: 'Dr. Bassem Boshra' }
  ],
  day2: [
    { time: '9:00 AM', session: 'Smart Cities Implementation', speaker: 'Featured Speaker' },
    { time: '10:30 AM', session: 'AI Case Studies', speaker: 'Featured Speaker' },
    { time: '12:00 PM', session: 'Cybersecurity in Smart Cities', speaker: 'Eng. Ibrahim Hegazy' },
    { time: '2:00 PM', session: 'Workshop: Ethical Hacking', speaker: 'Eng. Omar Ezzeldin' },
    { time: '3:30 PM', session: 'Workshop: AI Traffic Management System', speaker: 'Featured Speaker' }
  ]
}

function Summit() {
  const [currentDay, setCurrentDay] = useState(0)

  return (    
  <div>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          overflow: 'hidden',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Logo Container */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 20, sm: 30 },
            left: 0,
            right: 0,
            px: { xs: 2, sm: 3, md: 4 },
            width: '100%'
          }}
        >
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Stack 
              direction="row" 
              justifyContent="space-between"
              alignItems="center"
              sx={{ 
                width: '100%',
                position: 'absolute',
                top: { xs: 70, sm: 80 },
                left: 0,
                px: { xs: 2, sm: 3, md: 4 }
              }}
            >
              <Box
                component="img"
                src={IEELogo}
                alt="IEEE Logo"
                sx={{
                  height: { xs: 40, sm: 45, md: 50 },
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <Box
                component="img"
                src={NTRALogo}
                alt="NTRA Logo"
                sx={{
                  height: { xs: 60, sm: 65, md: 70 },
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </Stack>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Smart Cities Summit
          </Typography>
          <Typography variant="h5" gutterBottom>
            Two Days of Innovation and Knowledge Exchange
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            February 27, 28, 2025
          </Typography>
          {/* ...existing button code... */}
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: 'white',
              color: 'primary.main',
              fontSize: '1.2rem',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.3)',
              '&:hover': {
                bgcolor: 'secondary.main',
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)'
              }
            }}
            href="https://forms.gle/dFHHSa8BDYb2UweHA"
            target="_blank"
          >
            Reserve Your Spot
          </Button>
        </Container>
      </Box>

      <Box>
      {/* Tracks Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Summit Tracks
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
          {tracks.map((track) => (
            <Grid item xs={12} md={3} key={track.title}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-8px)' }
                }}
              >
                {track.icon}
                <Typography variant="h5" sx={{ my: 2 }}>
                  {track.title}
                </Typography>
                <Typography>
                  {track.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Agenda Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Summit Agenda
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              onChange={(_, newValue) => setCurrentDay(newValue)}
              centered
            >
              <Tab label="Day 1" />
              <Tab label="Day 2" />
            </Tabs>
          </Box>
          <Grid container spacing={2} justifyContent="center">
            {(currentDay === 0 ? agenda.day1 : agenda.day2).map((session, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 3 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={2}>
                      <Typography variant="h6">{session.time}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Typography variant="h6">{session.session}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          src={speakers[session.speaker].image}
                          alt={session.speaker}
                          sx={{ width: 56, height: 56 }}
                        />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {session.speaker}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {speakers[session.speaker].title}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Join Us at the Summit
        </Typography>
        <Typography paragraph>
          Don't miss this opportunity to be part of shaping the future of smart cities.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          color="primary"
          href="https://forms.gle/dFHHSa8BDYb2UweHA"
          target="_blank"
        >
          Register Now
        </Button>
      </Container>
    </Box>
    </div>
  )
}

export default Summit