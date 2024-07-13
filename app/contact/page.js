import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { RiPhoneFill } from 'react-icons/ri';
import { MdMarkEmailUnread } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
export default function Contact() {
  return (
    <Box sx={{ mb: 5 }}>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ mt: 3 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '100vw',
              aspectRatio: 120 / 45,
            }}
          >
            <Image
              src={'/images/electric2.png'}
              alt={''}
              fill
              sizes="(max-width:768px 100vw,800px)"
            />

            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'orange',
                  fontFamily: 'Fauna One',
                  fontSize: { xs: '1.7rem', md: '4rem' },
                  fontWeight: 900,
                  textTransform: 'capitalize',
                  lineHeight: '1.1em',
                  textShadow: '1px 1px black',
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'grid', placeItems: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Jost',
              color: '#ffc400',
              mt: 2,
              mb: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Contact Information
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f8f1ea',
                borderRadius: '50%',
                width: 70,
                height: 70,
              }}
            >
              <MdMarkEmailUnread
                style={{
                  color: '#cda274',
                  width: 24, // Set to the desired icon size
                  height: 24, // Set to the desired icon size
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM+Serif+Display',
                mb: 1,
                p: 1,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              href="malto:qualityelectric174@gmail.com"
              component="a"
            >
              qualityelectric174@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 1,
              mr: { xs: 17, md: 24 },
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f8f1ea',
                borderRadius: '50%',
                width: 70,
                height: 70,
              }}
            >
              <RiPhoneFill style={{ color: '#cda274', fontSize: '2rem' }} />
            </Box>

            <Typography
              variant="h6"
              sx={{
                pb: 1,
                fontSize: { xs: '1.2rem', md: '1.3rem' },
                fontWeight: 700,
                textDecoration: 'none',
                color: 'inherit', // Inherit text color
                '&:hover': {
                  textDecoration: 'none', // Remove underline on hover
                },
              }}
              href="tel:+4707058015"
              component="a"
            >
              +4707058015
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 1,
              mr: { xs: 3, md: 5 },
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f8f1ea',
                borderRadius: '50%',
                width: 70,
                height: 70,
              }}
            >
              <CiLocationOn style={{ color: '#cda274', fontSize: '2rem' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Address. 2298 young avenue <br /> Memphis tennesse 38104
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
