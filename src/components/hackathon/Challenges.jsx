import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import PsychologyIcon from '@mui/icons-material/Psychology'
import CloudIcon from '@mui/icons-material/Cloud'
import BiotechIcon from '@mui/icons-material/Biotech'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import RouterIcon from '@mui/icons-material/Router'
import ScienceIcon from '@mui/icons-material/Science'

const challenges = [
  {
    title: 'AI & Data Analysis Track',
    icon: <PsychologyIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    description: 'Develop innovative AI and data analysis solutions to enhance smart city operations and decision-making.',
    criteria: [
      'Machine Learning Applications',
      'Predictive Analytics',
      'Computer Vision Solutions',
      'Smart Decision Support Systems',
      'Data-Driven Urban Planning'
    ]
  },
  {
    title: 'IoT & Cloud Computing Track',
    icon: <CloudIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    description: 'Create integrated IoT and cloud solutions for smart city infrastructure and services.',
    criteria: [
      'IoT Device Networks',
      'Cloud-Based Services',
      'Real-time Data Processing',
      'Smart Infrastructure Management',
      'Edge Computing Solutions'
    ]
  },
  {
    title: 'Bioinformatics & Bioengineering Track',
    icon: <BiotechIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    description: 'Apply bioinformatics and bioengineering principles to develop solutions for urban health and environmental challenges.',
    criteria: [
      'Healthcare Analytics',
      'Environmental Monitoring',
      'Biomedical Applications',
      'Genomic Data Analysis',
      'Sustainable Biotechnology'
    ]
  }
]

function Challenges() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Hackathon Tracks
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {challenges.map((challenge, index) => (
              <Grid item xs={12} md={4} key={challenge.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <Box sx={{ mb: 2, textAlign: 'center' }}>{challenge.icon}</Box>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      align="center"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 'bold',
                        mb: 2
                      }}
                    >
                      {challenge.title}
                    </Typography>
                    <Typography 
                      paragraph 
                      color="text.secondary"
                      align="center"
                      sx={{ mb: 3 }}
                    >
                      {challenge.description}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        mb: 2, 
                        fontWeight: 600,
                        color: 'primary.main'
                      }}
                    >
                      Focus Areas:
                    </Typography>
                    <ul style={{ 
                      paddingLeft: '1.5rem', 
                      margin: 0,
                      listStyleType: 'none' 
                    }}>
                      {challenge.criteria.map((criterion, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          color="text.secondary"
                          sx={{
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            '&::before': {
                              content: '"•"',
                              color: 'primary.main',
                              fontWeight: 'bold',
                              marginRight: '8px'
                            }
                          }}
                        >
                          {criterion}
                        </Typography>
                      ))}
                    </ul>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Challenges