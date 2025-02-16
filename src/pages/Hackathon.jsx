import { 
  Stack, 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Component imports
import Challenges from '../components/hackathon/Challenges'
import Timeline from '../components/hackathon/Timeline'
import Prizes from '../components/hackathon/Prizes'

// Asset imports
import heroBg from "../assets/hero.JPG"
import IEELogo from "../assets/IEEE-logo.png"
import NTRALogo from "../assets/NTRA-Logo.png"

// FAQ data
const faqItems = [
  {
    question: "Who can participate?",
    answer: "University students and recent graduates (up to 2 years) can participate. Teams should have 3-4 members."
  },
  {
    question: "What should we bring?",
    answer: "Bring your laptop, charger, and any hardware you plan to use. We'll provide food, drinks, and workspace."
  },
  {
    question: "Is there a participation fee?",
    answer: "No, participation is completely free. All you need is your team and your innovation spirit!"
  },
  {
    question: "What are the submission requirements?",
    answer: "Teams must submit a working prototype, presentation slides, and project documentation. Detailed requirements will be provided during the event."
  },
  {
    question: "Will there be mentors?",
    answer: "Yes! Industry experts and academic mentors will be available throughout the event to guide teams and provide feedback."
  }
]

function Hackathon() {
  const faqRef = useRef(null)
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" })
  const prizesRef = useRef(null)
  const isPrizesInView = useInView(prizesRef, { once: true })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          overflow: 'hidden',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Logo Container */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 20, sm: 30 },
            left: 0,
            right: 0,
            px: { xs: 2, sm: 3, md: 4 },
            width: '100%'
          }}
        >
          <Container maxWidth="lg">
            <Stack 
              direction="row" 
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Box
                component="img"
                src={IEELogo}
                alt="IEEE Logo"
                sx={{
                  height: { xs: 40, sm: 45, md: 50 },
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <Box
                component="img"
                src={NTRALogo}
                alt="NTRA Logo"
                sx={{
                  height: { xs: 60, sm: 65, md: 70 },
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </Stack>
          </Container>
        </Box>

        {/* Hero Content */}
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" gutterBottom>
              Innovation Challenge: Shape the Future
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Build the Future of Smart Cities
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'white',
                color: 'primary.main',
                fontSize: '1.2rem',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)'
                }
              }}
              href="https://forms.gle/KL9DzGgHGqWpftSJ9"
              target="_blank"
            >
              Register Your Team
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Box>
        {/* Challenges Section */}
        <Challenges />

        {/* Timeline Section */}
        <Timeline />

        {/* Prizes Section */}
        <Prizes ref={prizesRef} isInView={isPrizesInView} />

        {/* FAQ Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }} ref={faqRef}>
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isFaqInView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h3" 
                align="center" 
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Box sx={{ mt: 4 }}>
                {faqItems.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Call to Action */}
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Innovate?
          </Typography>
          <Typography paragraph sx={{ mb: 4 }}>
            Join us in shaping the future of smart cities. Register your team today!
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            href="https://forms.gle/KL9DzGgHGqWpftSJ9"
            target="_blank"
            sx={{
              background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            Register Now
          </Button>
        </Container>
      </Box>
    </motion.div>
  )
}

export default Hackathon