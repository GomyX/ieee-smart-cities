import { Box, Container, Typography, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import EventIcon from '@mui/icons-material/Event'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const timelineEvents = [
  {
    date: 'February 21',
    time: '11:59 PM',
    title: 'Registration Deadline',
    description: 'Last chance to register your team and submit the participation form',
    color: '#0A2647'
  },
  {
    date: 'February 23',
    time: 'All Day',
    title: 'Bootcamp Day',
    description: 'Join us for an intensive day of workshops, mentoring, and project kickoff',
    color: '#00E1FF'
  },
  {
    date: 'February 25',
    time: '11:59 PM',
    title: 'Deliverables Deadline',
    description: 'Submit your project documentation and initial prototype',
    color: '#0A2647'
  },
  {
    date: 'February 26',
    time: '6:00 PM',
    title: 'Filtration Results',
    description: 'Teams will be notified of advancement to finals. Others welcome to join as summit attendees',
    color: '#00E1FF'
  },
  {
    date: 'February 27',
    time: 'Morning Session',
    title: 'Final Judging',
    description: 'Present your solution to our expert panel of judges',
    color: '#0A2647'
  }
]

function HackathonTimeline() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
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
            Event Timeline
          </Typography>

          <Timeline position="alternate">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h6" color="primary">
                      <EventIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      {event.date}
                    </Typography>
                    <Typography color="text.secondary">
                      <AccessTimeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      {event.time}
                    </Typography>
                  </Box>
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: event.color }} />
                  {index !== timelineEvents.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
                  )}
                </TimelineSeparator>
                
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                        }
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {event.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {event.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  )
}

export default HackathonTimeline