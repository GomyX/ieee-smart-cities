import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'
import { Paper, Typography, Box } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import CodeIcon from '@mui/icons-material/Code'
import GroupsIcon from '@mui/icons-material/Groups'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  {
    date: 'March 15',
    time: '9:00 AM',
    title: 'Check-in & Registration',
    description: 'Team registration and event kickoff',
    icon: <EventIcon />
  },
  {
    date: 'March 15',
    time: '10:00 AM',
    title: 'Opening Ceremony',
    description: 'Welcome speech and challenge announcement',
    icon: <GroupsIcon />
  },
  {
    date: 'March 15',
    time: '11:00 AM',
    title: 'Hacking Begins',
    description: 'Start working on your solutions',
    icon: <CodeIcon />
  },
  {
    date: 'March 16',
    time: '9:00 AM',
    title: 'Submission Deadline',
    description: 'Submit your project for evaluation',
    icon: <CodeIcon />
  },
  {
    date: 'March 16',
    time: '11:00 AM',
    title: 'Project Presentations',
    description: 'Present your solution to the judges',
    icon: <GroupsIcon />
  },
  {
    date: 'March 16',
    time: '2:00 PM',
    title: 'Awards Ceremony',
    description: 'Winners announcement and prizes',
    icon: <EmojiEventsIcon />
  }
]

function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <Box sx={{ py: 4 }} ref={ref}>
      <MuiTimeline position="alternate">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Typography variant="h6" color="primary">
                  {event.date}
                </Typography>
                <Typography color="text.secondary">
                  {event.time}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineDot color="primary">
                  {event.icon}
                </TimelineDot>
                {index !== timelineEvents.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                )}
              </motion.div>
            </TimelineSeparator>
            
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 20 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 2, 
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0, 225, 255, 0.3)'
                    }
                  }}
                >
                  <Typography variant="h6" component="h6">
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
      </MuiTimeline>
    </Box>
  )
}

export default Timeline