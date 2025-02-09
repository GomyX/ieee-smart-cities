import { useState } from 'react'
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Paper,
  Grid,
  Chip,
  Avatar
} from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'

const scheduleData = {
  day1: [
    {
      time: '9:00 AM',
      title: 'Opening Ceremony',
      speaker: 'Dr. John Smith',
      track: 'General',
      trackColor: '#1565c0',
      duration: '1 hour',
      location: 'Main Hall'
    },
    {
      time: '10:30 AM',
      title: 'AI in Smart Infrastructure',
      speaker: 'Dr. Sarah Johnson',
      track: 'AI Track',
      trackColor: '#00838f',
      duration: '1.5 hours',
      location: 'Room A'
    },
    {
      time: '2:00 PM',
      title: 'IoT Workshop',
      speaker: 'Eng. Mike Wilson',
      track: 'IoT Track',
      trackColor: '#2e7d32',
      duration: '2 hours',
      location: 'Lab 1'
    }
  ],
  day2: [
    {
      time: '9:30 AM',
      title: 'Cybersecurity in Smart Cities',
      speaker: 'Dr. Lisa Chen',
      track: 'Security Track',
      trackColor: '#c62828',
      duration: '1.5 hours',
      location: 'Room B'
    },
    {
      time: '11:30 AM',
      title: 'Cloud Computing Solutions',
      speaker: 'Eng. David Miller',
      track: 'Cloud Track',
      trackColor: '#6a1b9a',
      duration: '1.5 hours',
      location: 'Room C'
    },
    {
      time: '2:30 PM',
      title: 'Closing Panel',
      speaker: 'Multiple Speakers',
      track: 'General',
      trackColor: '#1565c0',
      duration: '1.5 hours',
      location: 'Main Hall'
    }
  ]
}

function Schedule() {
  const [currentDay, setCurrentDay] = useState(0)

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Summit Schedule
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={currentDay}
          onChange={(e, newValue) => setCurrentDay(newValue)}
          centered
        >
          <Tab label="Day 1 - March 15" />
          <Tab label="Day 2 - March 16" />
        </Tabs>
      </Box>

      <Timeline position="alternate">
        {(currentDay === 0 ? scheduleData.day1 : scheduleData.day2).map((session, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: session.trackColor }} />
              {index < scheduleData.day1.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s'
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="div">
                      {session.time}
                    </Typography>
                    <Chip 
                      label={session.track}
                      size="small"
                      sx={{ 
                        bgcolor: session.trackColor,
                        color: 'white',
                        ml: 1
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {session.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ bgcolor: session.trackColor }}>
                        {session.speaker[0]}
                      </Avatar>
                      <Typography variant="subtitle1">
                        {session.speaker}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography color="text.secondary">
                      📍 {session.location} | ⏱️ {session.duration}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default Schedule