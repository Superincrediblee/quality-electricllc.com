'use client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Box, Grid, Typography } from '@mui/material';

const CountUpOnScroll = ({ end, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [count, setCount] = useState(0);
  const duration = 2; // duration of the animation in seconds

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < end) {
            return Math.min(prev + 1, end);
          } else {
            clearInterval(interval);
            return end;
          }
        });
      }, (duration * 1000) / end);
    }
  }, [inView, end, duration]);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        sx={{ color: 'orange' }}
      >
        {count}%
      </Typography>
      <Typography variant="h6" sx={{ color: 'orange' }}>
        {label}
      </Typography>
    </Box>
  );
};

const CountUpSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px 20px',
        overflow: 'hidden',
      }}
    >
      <Grid item xs={12} sm={4}>
        <CountUpOnScroll end={98} label="Customer Satisfaction" />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CountUpOnScroll end={100} label="Job Completion Rate" />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CountUpOnScroll end={97} label="Innovations and Cost Efficiency" />
      </Grid>
    </Grid>
  );
};

export default CountUpSection;
