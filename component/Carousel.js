'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/* const images = [
  {
    label: 'Welcome To HardFork Maintenance Inc',
    imgPath: '/image/hf1.PNG',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/image/hf3.PNG',
  },
  {
    label: 'Your Trusted Partner in Building Care',
    imgPath: '/image/hf4.PNG',
  },
];
 */
const images = [
  {
    label: 'Welcome to Quality Electric LLC',
    imgPath: '/images/electric21.png',
  },
  {
    label: 'Where Quality Meets Professionalism',
    imgPath: '/images/electric20.png',
  },
  {
    label: 'Empowering Businesses with Reliable Solutions',
    imgPath: '/images/electric19.png',
  },
  {
    label: 'Excellence in Every Connection',
    imgPath: '/images/electric7.png',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/images/electric17.png',
  },
  {
    label: 'Empowering Businesses with Reliable Solutions',
    imgPath: '/images/electric16.png',
  },
  {
    label: 'Powering Excellence with Integrity',
    imgPath: '/images/electric15.png',
  },
  {
    label: ' Reliable Maintenance Solutions for Your Business',
    imgPath: '/images/electric14.png',
  },
  {
    label: 'Your Trusted Source for Electrical Expertise',
    imgPath: '/images/electric13.png',
  },
  {
    label: 'Welcome to Quality Electric LLC',
    imgPath: '/images/electric12.png',
  },
  {
    label: 'Where Quality Meets Professionalism',
    imgPath: '/images/electric11.png',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoPlayInterval={9000} //
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <Box
              component="img"
              sx={{
                height: { xs: 250, md: 500 },
                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                width: '100%',
              }}
              src={step.imgPath}
              alt={step.label}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {images.map((step, index) => (
        <Box
          key={step.label}
          position="absolute"
          top={0}
          left={{ xs: 13, md: 0 }}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ opacity: activeStep === index ? 1 : 0 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#ffc400',
              fontFamily: 'Fauna One',
              fontSize: { xs: '1.7rem', md: '4rem' },
              fontWeight: 900,
              textTransform: 'capitalize',
              lineHeight: '1.1em',
              textShadow: '1px 1px black ',
            }}
          >
            {step.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Carousel;
