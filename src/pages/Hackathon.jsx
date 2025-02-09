import { Box, Typography, Button, Container, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import Challenges from '../components/hachathon/Challenges' 
import Timeline from '../components/hachathon/Timeline' 
import Prizes from '../components/hachathon/Prizes'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function Hackathon() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const prizesRef = useRef(null)
  const isPrizesInView = useInView(prizesRef, { once: true, margin: "-100px" })
  const faqRef = useRef(null)
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" })

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: 8,
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" gutterBottom>
              24-Hour Innovation Challenge
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
              href="https://forms.gle/dFHHSa8BDYb2UweHA"
              target="_blank"
            >
              Register Your Team
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Challenges Section */}
      <Challenges />

      {/* Timeline Section */}
      <Timeline />

      {/* Prizes Section */}
      <Prizes prizesRef={prizesRef} isPrizesInView={isPrizesInView} />


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
            <Typography variant="h3" align="center" gutterBottom>
              FAQ
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    Who can participate?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    University students and recent graduates (up to 2 years) can participate.
                    Teams should have 3-4 members.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    What should we bring?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Bring your laptop, charger, and any hardware you plan to use. We'll provide food, drinks, and workspace.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    Is there a participation fee?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    No, participation is completely free. All you need is your team and your innovation spirit!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    What are the submission requirements?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Teams must submit a working prototype, presentation slides, and project documentation. Detailed requirements will be provided during the event.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    Will there be mentors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes! Industry experts and academic mentors will be available throughout the event to guide teams and provide feedback.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}

export default Hackathon