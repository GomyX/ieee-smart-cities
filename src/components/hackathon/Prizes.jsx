import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ConstructionIcon from '@mui/icons-material/Construction'
import BiotechIcon from '@mui/icons-material/Biotech'
import CloudIcon from '@mui/icons-material/Cloud'
import PsychologyIcon from '@mui/icons-material/Psychology'

const trackPrizes = [
  {
    place: 'AI & Data Analysis Track',
    icon: <PsychologyIcon sx={{ fontSize: 60, color: '#FFD700' }} />,
    prize: '10,000 EGP',
    benefits: [
      'Cash prize',
      'Free summit tickets',
      'Mentorship opportunities',
      'Recognition award'
    ]
  },
  {
    place: 'IoT & Cloud Computing Track',
    icon: <CloudIcon sx={{ fontSize: 60, color: '#FFD700' }} />,
    prize: '10,000 EGP',
    benefits: [
      'Cash prize',
      'Free summit tickets',
      'Mentorship opportunities',
      'Recognition award'
    ]
  },
  {
    place: 'Bioinformatics Track',
    icon: <BiotechIcon sx={{ fontSize: 60, color: '#FFD700' }} />,
    prize: '10,000 EGP',
    benefits: [
      'Cash prize',
      'Free summit tickets',
      'Mentorship opportunities',
      'Recognition award'
    ]
  }
]

const specialPrizes = [
  {
    place: 'Most Innovative Idea',
    icon: <LightbulbIcon sx={{ fontSize: 60, color: '#00E1FF' }} />,
    prize: '5,000 EGP',
    benefits: [
      'Cash prize',
      'Innovation excellence certificate',
      'Special mentorship session'
    ]
  },
  {
    place: 'Best Business Plan',
    icon: <BusinessCenterIcon sx={{ fontSize: 60, color: '#00E1FF' }} />,
    prize: '5,000 EGP',
    benefits: [
      'Cash prize',
      'Business development workshop',
      'Networking opportunities'
    ]
  },
  {
    place: 'Best Technical Project',
    icon: <ConstructionIcon sx={{ fontSize: 60, color: '#00E1FF' }} />,
    prize: '5,000 EGP',
    benefits: [
      'Cash prize',
      'Technical excellence certificate',
      'Advanced technical workshop'
    ]
  }
]

const PrizeSection = ({ title, prizes }) => (
  <>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{
        mt: 8,
        mb: 4,
        color: 'primary.main'
      }}
    >
      {title}
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {prizes.map((prize, index) => (
        <Grid item xs={12} sm={6} md={4} key={prize.place}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {prize.icon}
              </Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                {prize.place}
              </Typography>
              <Typography
                variant="h4"
                sx={{ 
                  mb: 3,
                  background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}
              >
                {prize.prize}
              </Typography>
              <Box sx={{ textAlign: 'left' }}>
                {prize.benefits.map((benefit, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1,
                      color: 'text.secondary',
                      '&::before': {
                        content: '"•"',
                        mr: 1,
                        color: 'primary.main'
                      }
                    }}
                  >
                    {benefit}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </>
)

const Prizes = forwardRef(({ isInView }, ref) => {
  return (
    <Box ref={ref} sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Prizes & Awards
          </Typography>

          <PrizeSection title="Track Prizes" prizes={trackPrizes} />
          <PrizeSection title="Special Prizes" prizes={specialPrizes} />
        </motion.div>
      </Container>
    </Box>
  )
})

Prizes.displayName = 'Prizes'

export default Prizes