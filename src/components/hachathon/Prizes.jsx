import { Container, Grid, Paper, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Code, TrendingUp, Lightbulb } from '@mui/icons-material';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  

  const mainPrizes = [
    { track: 'AI Track', amount: '10,000', description: 'First Place Winner' },
    { track: 'IoT Track', amount: '10,000', description: 'First Place Winner' },
    { track: 'Bio Track', amount: '10,000', description: 'First Place Winner' }
  ];
  
  const specialPrizes = [
    { title: 'Best Technical', amount: '5,000', description: 'Most Advanced Implementation' },
    { title: 'Best Business', amount: '5,000', description: 'Strongest Business Model' },
    { title: 'Most Innovative', amount: '5,000', description: 'Most Creative Solution' }
  ];

function Prizes({ prizesRef, isPrizesInView }) {
    const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ my: 8 }} ref={prizesRef}>
        <motion.div
            initial="hidden"
            animate={isPrizesInView ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ staggerChildren: 0.2 }}
        >
            <Typography 
            component={motion.div}
            variants={itemVariants}
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{ 
                fontWeight: 700,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                color: 'primary.main',
                mb: 6
            }}
            >
            Competition Prizes
            </Typography>

            {/* Main Prizes */}
            <Typography 
            component={motion.div}
            variants={itemVariants}
            variant="h3" 
            align="center" 
            sx={{ 
                mb: 5,
                color: 'text.secondary',
                position: 'relative',
                '&:after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '3px',
                backgroundColor: 'primary.main',
                margin: '1rem auto 0'
                }
            }}
            >
            Main Track Prizes
            </Typography>
            
            <Grid container spacing={4} justifyContent="center" component={motion.div} variants={staggerContainer}>
            {mainPrizes.map((prize, index) => (
                <Grid item xs={12} md={4} key={prize.track} component={motion.div} variants={cardVariants}>
                <Paper 
                    elevation={8}
                    sx={{ 
                    p: 4,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    borderRadius: 3,
                    minHeight: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        boxShadow: `0 15px 30px -5px ${alpha(theme.palette.primary.main, 0.4)}`
                    }
                    }}  
                >
                    <Box component={motion.div} animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} sx={{ mb: 3 }}>
                    {index === 0 && <Code fontSize="large" />}
                    {index === 1 && <TrendingUp fontSize="large" />}
                    {index === 2 && <Lightbulb fontSize="large" />}
                    </Box>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                    {prize.track}
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ fontWeight: 800 }}>
                    ₪{prize.amount}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    {prize.description}
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>

            {/* Special Awards */}
            <Typography 
            component={motion.div}
            variants={itemVariants}
            variant="h3" 
            align="center" 
            sx={{ 
                mt: 10,
                mb: 5,
                color: 'text.secondary',
                position: 'relative',
                '&:after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '3px',
                backgroundColor: 'secondary.main',
                margin: '1rem auto 0'
                }
            }}
            >
            Special Awards
            </Typography>

            <Grid container spacing={4} justifyContent="center" component={motion.div} variants={staggerContainer}>
            {specialPrizes.map((prize, index) => (
                <Grid item xs={12} md={4} key={prize.title} component={motion.div} variants={cardVariants}>
                <Paper 
                    elevation={8}
                    sx={{ 
                    p: 4,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                    color: 'white',
                    borderRadius: 3,
                    minHeight: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 12px 25px -5px ${alpha(theme.palette.secondary.main, 0.3)}`
                    }
                    }}  
                >
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    style={{ marginBottom: '1rem' }}
                    >
                    {index === 0 && <Code fontSize="large" />}
                    {index === 1 && <TrendingUp fontSize="large" />}
                    {index === 2 && <Lightbulb fontSize="large" />}
                    </motion.div>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {prize.title}
                    </Typography>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                    ₪{prize.amount}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    {prize.description}
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>
        </motion.div>
    </Container>
  )
}

export default Prizes


