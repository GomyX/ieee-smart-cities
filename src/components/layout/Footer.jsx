import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Stack,
    TextField,
    Button,
    IconButton,
    Divider
  } from '@mui/material'
  import FacebookIcon from '@mui/icons-material/Facebook'
  import TwitterIcon from '@mui/icons-material/Twitter'
  import LinkedInIcon from '@mui/icons-material/LinkedIn'
  import InstagramIcon from '@mui/icons-material/Instagram'
  import { Link as RouterLink } from 'react-router-dom'
  
  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'Summit', path: '/summit' },
    { title: 'Hackathon', path: '/hackathon' },
    { title: 'Register', path: '/register' }
  ]
  
  function Footer() {
    return (
      <Box 
        component="footer" 
        sx={{ 
          bgcolor: 'background.paper',
          pt: 6,
          pb: 3,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Event Info */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="primary" gutterBottom>
                Smart Cities Event 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A collaborative initiative by IEEE Zewail City and NTRA to shape the future of smart cities.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <IconButton color="primary" href="https://facebook.com" target="_blank">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" href="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" href="https://linkedin.com" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="primary" href="https://instagram.com" target="_blank">
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Grid>
  
            {/* Quick Links */}
            <Grid item xs={12} md={2}>
              <Typography variant="h6" color="primary" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    component={RouterLink}
                    to={link.path}
                    color="text.secondary"
                    sx={{ 
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Stack>
            </Grid>
  
            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Zewail City Campus
                <br />
                6th of October City, Giza
                <br />
                Egypt
                <br />
                <Link href="mailto:info@ieeezc.org" color="primary">
                  info@ieeezc.org
                </Link>
              </Typography>
            </Grid>
  
            {/* Newsletter Signup */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Stay Updated
              </Typography>
              <Stack spacing={2}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  variant="outlined"
                />
                <Button variant="contained" color="primary">
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
  
          <Divider sx={{ mt: 6, mb: 3 }} />
  
          {/* Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} IEEE Zewail City. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }
  
  export default Footer