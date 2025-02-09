import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { Box, Container, Grid, Paper, Stack, Typography, Divider } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Code } from '@mui/icons-material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';



// Add these animation variants at the top of the file
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    transition: { duration: 0.3 }
  }
};

function About() {
  const theme = useTheme();
  const statistics = [
    { icon: <PeopleIcon sx={{ fontSize: 40 }}/>, count: '500+', label: 'Participants' },
    { icon: <SchoolIcon sx={{ fontSize: 40 }}/>, count: '20+', label: 'Workshops' },
    { icon: <WorkIcon sx={{ fontSize: 40 }}/>, count: '30+', label: 'Speakers' },
    { icon: <TrendingUpIcon sx={{ fontSize: 40 }}/>, count: '4', label: 'Tracks' }
  ];

  return (
    <Box component="section" sx={{ py: 10, background: 'radial-gradient(circle at 50% 50%, rgba(241, 245, 249, 0.8) 0%, rgba(255, 255, 255, 1) 100%)' }}>
      <Container maxWidth="lg">
        {/* Main Description */}
        <Grid container spacing={6} alignItems="center" component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible">
          <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
            <Typography variant="h2" gutterBottom sx={{
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4
            }}>
              About The Event
            </Typography>
            <Typography variant="h6" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
              Join us for an innovative two-day event combining a technical summit 
              and hackathon focused on building smart cities of tomorrow. Organized 
              by IEEE Zewail City and sponsored by NTRA.
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
              Experience hands-on workshops, insightful talks, and compete in our 
              24-hour hackathon to solve real-world smart city challenges.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
            <Paper 
              component={motion.div}
              variants={cardVariants}
              whileHover="hover"
              elevation={3}
              sx={{ 
                p: 4,
                borderRadius: 4,
                background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUpIcon color="primary" /> Summit Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
                    {['Expert-led technical sessions', 'Hands-on workshops', 'Networking opportunities', 'Industry insights'].map((item) => (
                      <Typography component="li" key={item} variant="body1" sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Divider sx={{ borderColor: 'divider' }} />
                <Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Code color="secondary" /> Hackathon Highlights
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
                    {['24-hour coding challenge', 'Mentorship support', 'Valuable prizes', 'Real-world impact'].map((item) => (
                      <Typography component="li" key={item} variant="body1" sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* Statistics */}
        <Grid container spacing={4} sx={{ mt: 8 }} component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible">
          {statistics.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label} component={motion.div} variants={itemVariants}>
              <Paper 
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{ 
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(145deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                <Box sx={{
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  mb: 2
                }}>
                  {React.cloneElement(stat.icon, { sx: { color: theme.palette.primary.main, fontSize: 40 } })}
                </Box>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {stat.count}
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', mt: 1 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Organizers */}
        <Box sx={{ mt: 10, textAlign: 'center' }} component={motion.div} variants={itemVariants} initial="hidden" whileInView="visible">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Organized By
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item component={motion.div} whileHover={{ scale: 1.1 }}>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 3, bgcolor: 'transparent' }}>
                <img 
                  src="/ieee-logo.png" 
                  alt="IEEE Logo" 
                  style={{ height: 100, filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))' }}
                />
              </Paper>
            </Grid>
            <Grid item component={motion.div} whileHover={{ scale: 1.1 }}>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 3, bgcolor: 'transparent' }}>
                <img 
                  src="/ntra-logo.png" 
                  alt="NTRA Logo" 
                  style={{ height: 100, filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))' }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default About;
