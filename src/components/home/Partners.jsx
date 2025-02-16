import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import logos - update paths as needed
import ieeeZCLogo from '../../assets/images/partners/IEEE-logo.png';
import ieeeEMBLogo from '../../assets/images/partners/EMB-logo.jpg';
import ntraLogo from '../../assets/images/partners/NTRA-Logo.png';
// import community1 from '../../assets/images/partners/community1.png';
// import community2 from '../../assets/images/partners/community2.png';
// import community3 from '../../assets/images/partners/community3.png';
// import community4 from '../../assets/images/partners/community4.png';
// import community5 from '../../assets/images/partners/community5.png';

const LogoSection = ({ title, logos, variant = "default" }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  if (!logos.length) return null;

  return (
    <Box sx={{ py: 6, position: 'relative' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(45deg, #0A2647 30%, #00E1FF 90%)',
            margin: '1rem auto 0',
            borderRadius: '2px'
          },
          fontWeight: 700,
          letterSpacing: '1.5px',
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>

      {variant === "community" ? (
        <Box sx={{ 
          position: 'relative',
          '&:before, &:after': {
            content: '""',
            position: 'absolute',
            zIndex: 2,
            height: '100%',
            width: '100px',
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          },
          '&:before': { left: 0, top: 0 },
          '&:after': { 
            right: 0, 
            top: 0,
            background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          }
        }}>
          <Slider {...sliderSettings}>
            {logos.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  display: 'flex !important',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 120
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    padding: '12px', 
                    background: 'white', 
                    borderRadius: '12px', 
                    boxShadow: 3,
                    margin: '0 10px'
                  }}
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    style={{
                      width: '120px',
                      height: '60px',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
                    onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
                  />
                </motion.div>
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {logos.map((logo, index) => (
            <Grid item xs={8} sm={6} md={4} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: variant === "mainSponsor" ? 200 : 150,
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '16px',
                    boxShadow: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 3,
                      background: 'rgba(255, 255, 255, 1)'
                    }
                  }}
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: variant === "mainSponsor" ? '120px' : '80px',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
                    onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

function Partners() {
  const organizers = [
    { name: 'IEEE Zewail City', image: ieeeZCLogo },
    { name: 'IEEE EMB Zewail City', image: ieeeEMBLogo }
  ];

  const mainSponsor = [
    { name: 'NTRA', image: ntraLogo }
  ];

  const mainPartners = [
    // Add main partners here
  ];

  const communityPartners = [
    // { name: 'Community Partner 1', image: community1 },
    // { name: 'Community Partner 2', image: community2 },
    // { name: 'Community Partner 3', image: community3 },
    // { name: 'Community Partner 4', image: community4 },
    // { name: 'Community Partner 5', image: community5 },
    // Add more community partners as needed
  ];

  return (
    <Box sx={{ 
      py: 8, 
      bgcolor: 'background.default',
      background: 'radial-gradient(circle at center, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <LogoSection title="Organized By" logos={organizers} />
          <LogoSection title="Main Sponsor" logos={mainSponsor} variant="mainSponsor" />
          <LogoSection title="Strategic Partners" logos={mainPartners} />
          <LogoSection 
            title="Community Partners" 
            logos={communityPartners}
            variant="community"
          />
        </motion.div>
      </Container>
    </Box>
  );
}

export default Partners;