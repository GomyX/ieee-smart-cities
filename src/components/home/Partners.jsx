import { Box, Typography, Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Import logos
import ieeeZCLogo from '../../assets/images/partners/IEEE-logo.png'
import ieeeEMBLogo from '../../assets/images/partners/EMB-logo.jpg'
import ntraLogo from '../../assets/images/partners/NTRA-Logo.png'
// import ibmLogo from '../../assets/images/partners/ibm.png'
// import nilePrenLogo from '../../assets/images/partners/nile-preneurs.png'

const LogoSection = ({ title, logos, variant = "default" }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: variant === "community" ? 5 : logos.length,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(4, logos.length) }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: Math.min(3, logos.length) }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: Math.min(2, logos.length) }
      }
    ]
  }

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 4,
          background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 600
        }}
      >
        {title}
      </Typography>
      {variant === "community" ? (
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                display: 'flex !important',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100
              }}
            >
              <motion.img
                src={logo.image}
                alt={logo.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80px',
                  objectFit: 'contain'
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </Box>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {logos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    p: 2
                  }}
                >
                  <motion.img
                    src={logo.image}
                    alt={logo.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '80px',
                      objectFit: 'contain'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

function Partners() {
  const organizers = [
    { name: 'IEEE Zewail City', image: ieeeZCLogo },
    { name: 'IEEE EMB Zewail City', image: ieeeEMBLogo }
  ]

  const mainSponsor = [
    { name: 'NTRA', image: ntraLogo }
  ]

  const mainPartners = [
//     { name: 'IBM', image: ibmLogo },
//     { name: 'Nile Preneurs', image: nilePrenLogo }
  ]

  const communityPartners = [
    // Add community partner logos here
    { name: 'Partner 1', image: 'path/to/logo1' },
    { name: 'Partner 2', image: 'path/to/logo2' },
    // Add more as needed
  ]

  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <LogoSection title="Organized By" logos={organizers} />
          <LogoSection title="Main Sponsor" logos={mainSponsor} />
          <LogoSection title="Main Partners" logos={mainPartners} />
          <LogoSection 
            title="Community Partners" 
            logos={communityPartners}
            variant="community"
          />
        </motion.div>
      </Container>
    </Box>
  )
}

export default Partners