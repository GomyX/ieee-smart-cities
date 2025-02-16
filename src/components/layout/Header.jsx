import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  useScrollTrigger
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Summit', path: '/summit' },
  { name: 'Hackathon', path: '/hackathon' }
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: trigger ? 'background.default' : 'transparent',
        boxShadow: trigger ? 1 : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: 700,
                background: theme => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              AppX'25
            </Typography>
          </motion.div>

          <Stack 
            direction="row" 
            spacing={4} 
            sx={{ 
              flex: 1,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: trigger ? 'text.primary' : 'white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: -4,
                      left: 0,
                      bgcolor: 'primary.main',
                      transition: 'width 0.3s ease-in-out'
                    },
                    '&:hover::after': {
                      width: '100%'
                    },
                    ...(location.pathname === item.path && {
                      '&::after': {
                        width: '100%'
                      }
                    })
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!isMobile ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
            <Button
              component="a" // Change from RouterLink to "a"
              href="https://forms.gle/dFHHSa8BDYb2UweHA" // Add your form URL here
              target="_blank" // Opens in new tab
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #1565c0 30%, #00838f 90%)',
                color: 'white',
                px: 3,
                py: 1,
                borderRadius: '24px',
                boxShadow: '0 3px 5px 2px rgba(21, 101, 192, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976d2 30%, #00acc1 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 10px 2px rgba(21, 101, 192, .3)'
                }
              }}
            >
              Buy Ticket
            </Button>
              </motion.div>
            ) : (
              <IconButton
                color={trigger ? 'primary' : 'inherit'}
                onClick={() => setMobileOpen(true)}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: 'background.default',
            boxShadow: '-4px 0 10px rgba(0,0,0,0.1)'
          }
        }}
      >
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  py: 2,
                  bgcolor: location.pathname === item.path ? 'action.selected' : 'transparent'
                }}
              >
                <ListItemText 
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: location.pathname === item.path ? 700 : 400
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              component="a"
              href="https://forms.gle/dFHHSa8BDYb2UweHA"
              target="_blank"
              onClick={() => setMobileOpen(false)}
              sx={{
                background: 'linear-gradient(45deg,rgb(0, 255, 242) 30%, #00838f 90%)',
                borderRadius: '24px',
                py: 1.5
              }}
            >
              Buy Ticket
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header