import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeIcon from '@mui/icons-material/Code'
import CloudIcon from '@mui/icons-material/Cloud'
import BiotechIcon from '@mui/icons-material/Biotech'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const challenges = [
  {
    title: 'AI & Data Analytics',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    description: 'Develop AI solutions for smart city challenges',
    requirements: [
      'Machine learning model implementation',
      'Data preprocessing and analysis',
      'Performance metrics evaluation'
    ],
    criteria: ['Innovation', 'Technical Complexity', 'Impact'],
    technologies: ['Python', 'TensorFlow', 'PyTorch']
  },
  {
    title: 'IoT & Cloud Solutions',
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    description: 'Build IoT applications with cloud integration',
    requirements: [
      'IoT device integration',
      'Cloud platform utilization',
      'Real-time data processing'
    ],
    criteria: ['Scalability', 'Integration', 'Reliability'],
    technologies: ['AWS', 'Azure', 'Node.js']
  },
  {
    title: 'Bioinformatics',
    icon: <BiotechIcon sx={{ fontSize: 40 }} />,
    description: 'Create solutions for healthcare data analysis',
    requirements: [
      'Biological data processing',
      'Statistical analysis',
      'Visualization tools'
    ],
    criteria: ['Accuracy', 'Scientific Merit', 'Usability'],
    technologies: ['R', 'BioPython', 'MATLAB']
  }
]

function Challenges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={4} ref={ref}>
        {challenges.map((challenge, index) => (
          <Grid item xs={12} md={4} key={challenge.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 20px rgba(0, 225, 255, 0.3)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {challenge.icon}
                    <Typography variant="h5" sx={{ ml: 1 }}>
                      {challenge.title}
                    </Typography>
                  </Box>

                  <Typography variant="body1" paragraph>
                    {challenge.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Requirements
                  </Typography>
                  <List dense>
                    {challenge.requirements.map((req, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={req} />
                      </ListItem>
                    ))}
                  </List>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="h6" gutterBottom>
                    Evaluation Criteria
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {challenge.criteria.map((criterion) => (
                      <Chip
                        key={criterion}
                        label={criterion}
                        sx={{ m: 0.5 }}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Suggested Technologies
                  </Typography>
                  <Box>
                    {challenge.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{ m: 0.5 }}
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Challenges