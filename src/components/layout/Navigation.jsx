import { useState } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EventIcon from '@mui/icons-material/Event'
import CodeIcon from '@mui/icons-material/Code'
import ScheduleIcon from '@mui/icons-material/Schedule'
import GroupIcon from '@mui/icons-material/Group'

const navItems = [
  {
    title: 'Summit',
    path: '/summit',
    icon: <EventIcon />,
    submenu: [
      { title: 'Tracks', path: '/summit#tracks', icon: <ScheduleIcon /> },
      { title: 'Speakers', path: '/summit#speakers', icon: <GroupIcon /> },
      { title: 'Schedule', path: '/summit#schedule', icon: <ScheduleIcon /> }
    ]
  },
  {
    title: 'Hackathon',
    path: '/hackathon',
    icon: <CodeIcon />,
    submenu: [
      { title: 'Challenges', path: '/hackathon#challenges', icon: <CodeIcon /> },
      { title: 'Timeline', path: '/hackathon#timeline', icon: <ScheduleIcon /> },
      { title: 'Rules', path: '/hackathon#rules', icon: <GroupIcon /> }
    ]
  }
]

function Navigation() {
  const location = useLocation()
  const [anchorEls, setAnchorEls] = useState({})

  const handleMenuOpen = (event, title) => {
    setAnchorEls({ ...anchorEls, [title]: event.currentTarget })
  }

  const handleMenuClose = (title) => {
    setAnchorEls({ ...anchorEls, [title]: null })
  }

  const isActive = (path) => location.pathname === path

  return (
    <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="center">
      <Button
        component={RouterLink}
        to="/"
        sx={{
          color: isActive('/') ? 'primary.main' : 'text.primary',
          '&:hover': { color: 'primary.main' }
        }}
      >
        Home
      </Button>

      {navItems.map((item) => (
        <Box key={item.title}>
          <Button
            aria-controls={Boolean(anchorEls[item.title]) ? `${item.title}-menu` : undefined}
            aria-haspopup="true"
            onClick={(e) => handleMenuOpen(e, item.title)}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              '&:hover': { color: 'primary.main' }
            }}
          >
            {item.title}
          </Button>
          <Menu
            id={`${item.title}-menu`}
            anchorEl={anchorEls[item.title]}
            open={Boolean(anchorEls[item.title])}
            onClose={() => handleMenuClose(item.title)}
            MenuListProps={{ 'aria-labelledby': item.title }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {item.submenu.map((submenu) => (
              <MenuItem
                key={submenu.title}
                component={RouterLink}
                to={submenu.path}
                onClick={() => handleMenuClose(item.title)}
                sx={{ minWidth: { xs: 180, sm: 200 } }}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {submenu.icon}
                </ListItemIcon>
                <ListItemText>{submenu.title}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ))}

      <Button
        variant="contained"
        component={RouterLink}
        to="/register"
        sx={{
          ml: { xs: 1, sm: 2 },
          px: { xs: 2, sm: 3 },
          fontSize: { xs: '0.875rem', sm: '1rem' },
          backgroundImage: 'linear-gradient(45deg, #1565c0 30%, #00838f 90%)',
          color: 'white',
          '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #1565c0 50%, #00838f 100%)'
          }
        }}
      >
        Register Now
      </Button>
    </Stack>
  )
}

export default Navigation