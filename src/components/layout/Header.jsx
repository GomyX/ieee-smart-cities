import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
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
  useMediaQuery
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Summit', path: '/summit' },
  { name: 'Hackathon', path: '/hackathon' }
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              flexBasis: '200px'
            }}
          >
            Smart Cities
          </Typography>

          <Stack 
            direction="row" 
            spacing={isMobile ? 2 : 4} 
            sx={{ 
              flex: 1,
              justifyContent: 'center'
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {item.name}
              </Link>
            ))}
          </Stack>

          <Box sx={{ display: 'flex', flexBasis: '200px', justifyContent: 'flex-end' }}>
            {!isMobile ? (
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                sx={{
                  backgroundImage: 'linear-gradient(45deg, #1565c0 30%, #00838f 90%)'
                }}
              >
                Register Now
              </Button>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => setMobileOpen(true)}
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
          '& .MuiDrawer-paper': { width: 240 }
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              component={RouterLink}
              to="/register"
              onClick={() => setMobileOpen(false)}
            >
              Register Now
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header