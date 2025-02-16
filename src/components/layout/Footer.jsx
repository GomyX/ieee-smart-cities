import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const quickLinks = [
  { title: 'Home', path: '/' },
  { title: 'Summit', path: '/summit' },
  { title: 'Hackathon', path: '/hackathon' },
  { title: 'Register', path: '/register' }
]

const socialLinks = [
  { icon: <FacebookIcon />, url: 'https://www.facebook.com/IEEEZC/', label: 'Facebook' },
  { icon: <TwitterIcon />, url: 'https://twitter.com', label: 'Twitter' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ieee-zewail-city/', label: 'LinkedIn' },
  { icon: <InstagramIcon />, url: 'https://www.instagram.com/ieeezc/', label: 'Instagram' }
]

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper',
        pt: 8,
        pb: 4,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: theme => 
            `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Event Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h5" color="primary" gutterBottom fontWeight="bold">
                AppX'25
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                A collaborative initiative by IEEE Zewail City and NTRA to shape the future of smart cities.
              </Typography>
              <Stack direction="row" spacing={2}>
                {socialLinks.map((social) => (
                  <IconButton 
                    key={social.label}
                    color="primary" 
                    href={social.url} 
                    target="_blank"
                    sx={{
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        bgcolor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color="primary" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="primary" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  Zewail City Campus
                  <br />
                  6th of October City, Giza
                  <br />
                  Egypt
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Link 
                  href="mailto:ieee@zewailcity.edu.eg" 
                  color="primary"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  info@ieeezc.org
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 3 }} />

        {/* Copyright */}
        <Box 
          sx={{ 
            textAlign: 'center',
            opacity: 0.8
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} IEEE Zewail City. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer