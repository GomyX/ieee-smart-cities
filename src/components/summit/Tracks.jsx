import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
  } from '@mui/material'
  import PsychologyIcon from '@mui/icons-material/Psychology'
  import RouterIcon from '@mui/icons-material/Router'
  import SecurityIcon from '@mui/icons-material/Security'
  import CloudQueueIcon from '@mui/icons-material/CloudQueue'
  import CheckCircleIcon from '@mui/icons-material/CheckCircle'
  
  const tracks = [
    {
      title: 'AI & Machine Learning',
      icon: <PsychologyIcon sx={{ fontSize: 40 }}/>,
      color: '#1565c0',
      description: 'Exploring artificial intelligence applications in smart cities',
      topics: [
        'Deep Learning for Urban Planning',
        'Computer Vision in Smart Surveillance',
        'Predictive Analytics for City Services',
        'Natural Language Processing Applications'
      ]
    },
    {
      title: 'IoT & Smart Infrastructure',
      icon: <RouterIcon sx={{ fontSize: 40 }}/>,
      color: '#00838f',
      description: 'Building connected infrastructure for future cities',
      topics: [
        'Smart Sensors and Networks',
        'Connected Transportation Systems',
        'Smart Grid Technologies',
        'Environmental Monitoring'
      ]
    },
    {
      title: 'Cybersecurity',
      icon: <SecurityIcon sx={{ fontSize: 40 }}/>,
      color: '#2e7d32',
      description: 'Securing smart city infrastructure and data',
      topics: [
        'Infrastructure Security',
        'Data Privacy',
        'Threat Detection Systems',
        'Security Protocols'
      ]
    },
    {
      title: 'Cloud Computing',
      icon: <CloudQueueIcon sx={{ fontSize: 40 }}/>,
      color: '#6a1b9a',
      description: 'Cloud solutions for smart city operations',
      topics: [
        'Cloud Architecture',
        'Data Management',
        'Scalable Services',
        'Edge Computing'
      ]
    }
  ]
  
  function Tracks() {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Summit Tracks
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Explore our four specialized tracks designed to cover key aspects of smart city development
        </Typography>
  
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {tracks.map((track) => (
            <Grid item xs={12} md={6} key={track.title}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  borderTop: 5,
                  borderColor: track.color
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: track.color }}>
                    {track.icon}
                  </Box>
                  <Typography variant="h5" sx={{ ml: 2 }}>
                    {track.title}
                  </Typography>
                </Box>
  
                <Typography color="text.secondary" paragraph>
                  {track.description}
                </Typography>
  
                <List dense>
                  {track.topics.map((topic, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: track.color }} />
                      </ListItemIcon>
                      <ListItemText primary={topic} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
  
  export default Tracks