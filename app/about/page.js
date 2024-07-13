'use client';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
let theme = createTheme();
theme = responsiveFontSizes(theme);
const aboutContent =
  "Welcome to Quality Electric LLC, your trusted partner for premium electrical services. We pride ourselves on delivering exceptional customer service and unparalleled expertise. Our team of experienced technicians is equipped with the best trade practices and quality expertise, ensuring every electrical repair is handled with professionalism and integrity. At Quality Electric LLC, we understand the importance of reliable and safe electrical systems for your home or business. That'swhywearecommitted to providing top-notch services that meet and exceed your expectations. Whether it's a minor repair or a major installation, our skilled technicians are dedicated to ensuring your electrical needs are met efficiently and effectively. We proudly serve the Alabama, Georgia, and Tennessee areas, offering a wide range of services tailored to meet the unique demands of our clients. Our commitment to excellence and customer satisfaction sets us apart, making us the preferred choice for all your electrical needs. Thank you for choosing Quality Electric LLC. We look forward to serving you with the highest standards of quality and reliability.";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 0 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 800,
                aspectRatio: 70 / 45,
              }}
            >
              <Image
                src={'/images/electric5.png'}
                alt={''}
                fill
                sizes="(max-width:768px 100vw,800px)"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 3, bgcolor: '#ffc400' }}>
            <Box sx={{ display: 'grid', placeItems: 'left' }}>
              <Typography variant="h3" sx={{ fontWeight: 800, pb: 3 }}>
                About Us
              </Typography>{' '}
            </Box>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Typography variant="h2">
                Quality Electric LLC - Lighting the Path to Excellence
              </Typography>
              <Box
                sx={{
                  width: '70px',
                  height: '2px',
                  bgcolor: 'black',
                  marginLeft: '0 auto',
                }}
              >
                <Divider />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                mt: { xs: 0, md: 2 },
                p: { xs: 3, md: 7 },
              }}
            >
              <Typography variant="body1" sx={{ fontFamily: 'Jost' }}>
                {aboutContent}
              </Typography>
            </Box>
          </Grid>{' '}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
