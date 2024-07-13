'use client';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useEffect } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
// import function to register Swiper custom elements
import Aos from 'aos';
import 'aos/dist/aos.css';

// register Swiper custom elements
import CountUpSection from '@/component/CountUpSection';
import ButtonBaseDemo from '@/component/Complexbutton';
import Link from 'next/link';
import Carousel from '@/component/Carousel';
const COLORS = ['#000000', '#FFA500', '#ffc400'];
let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 0%, white, 50%,${color})`;
  const border = useMotionTemplate`1px  solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    Aos.init({ duration: 1000 });
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* Hero */}
      <Box sx={{ overflow: 'hidden' }}>
        <Box
          sx={{
            height: { xs: '640px', xl: '840px' },
            backgroundImage: 'url(/images/electric10.png)', // replace with your image path
            backgroundPosition: 'center',
            backgroundSize: { lg: 'cover' },
            borderRadius: { xl: '0 0 0 290px' },
            overflow: 'hidden',
          }}
        >
          <Container
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', xl: 'flex-start' },
            }}
          >
            {/* Text */}
            <Box
              sx={{
                width: { xs: '567px', md: '100vw' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'center' },
                textAlign: { xs: 'center', md: 'center' },
              }}
            >
              <Typography
                variant="h1"
                component={motion.div}
                gutterBottom
                sx={{
                  fontWeight: 900,
                  color: 'orange',
                  zIndex: 1,
                  fontSize: { xs: '1.7rem', md: '4rem' },
                  textTransform: 'uppercase',
                  mb: 2,
                }}
                style={{
                  color: 'orange',
                  border,
                  boxShadow,
                }}
                data-aos="fade-up"
              >
                Welcome to Quality Electric LLC
              </Typography>

              <Typography
                component={motion.section}
                variant="h6"
                sx={{
                  color: '#000',
                  marginBottom: 3,
                  fontWeight: 700,
                  zIndex: 1,
                  mb: 2,
                  textShadow: '1px 1px orange ',
                }}
                style={{
                  color: 'black',
                }}
                data-aos="fade-down"
              >
                Quality Electric LLC - Lighting the Path to Excellence
              </Typography>
              <Link href="/services" passHref>
                <Button
                  variant="contained"
                  component={motion.button}
                  size="large"
                  href="/services"
                  style={{
                    marginTop: 3,
                    fontFamily: 'Open Sans',
                    fontSize: { md: '18px' },
                    fontWeight: 'medium',
                    border,
                    boxShadow,
                    textDecoration: 'none', // Removes underline
                    borderRadius: '35px',
                  }}
                  sx={{
                    color: 'black',
                    textDecoration: 'none', // Removes underline
                    backgroundColor: 'orange', // Set the background color to orange
                    '&:hover': {
                      backgroundColor: 'darkorange', // Set the hover background color to a darker shade of orange
                    },
                  }}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  Our Services
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
        <Box sx={{ bgcolor: 'black', overflow: 'hidden' }}>
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'orange',
                fontFamily: 'Jost',
                mt: '70px',
              }}
              data-aos="fade-up"
            >
              Our Metric Score
            </Typography>
          </Box>
          <CountUpSection />
        </Box>
        {/* cards */}
        <Box sx={{ overflowX: 'hidden' }}>
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12} sm={12} md={6} xl={6}>
                <Paper
                  elevation={5}
                  sx={{
                    /* maxWidth: { xs: '100%', md: '100%' }, */
                    bgcolor: 'black',
                  }}
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <Box
                    sx={{
                      padding: { xs: 1, md: '80px 100px 20px 100px' },
                      marginTop: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        bgcolor: 'orange',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        sx={{
                          textTransform: 'none',
                          fontWeight: 700,
                          fontSize: { xs: '18px', md: '28px' },
                          lineHeight: { xs: 1, md: 1.5 },
                          color: 'white',
                        }}
                      >
                        Powering Excellence with Integrity
                      </Button>
                    </Typography>
                  </Box>
                  {/* Blue card section */}
                  <Box
                    sx={{
                      padding: { xs: 1, md: '8px 100px 20px 100px' },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                      }}
                    >
                      Expert electrical services to keep your business running
                      smoothly.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} sm={12} md={6} xl={6}>
                <Paper
                  elevation={5}
                  sx={{
                    /* maxWidth: { xs: '100%', md: '100%' }, */
                    bgcolor: 'black',
                  }}
                  data-aos="fade-left"
                  data-aos-offset="250"
                  data-aos-easing="ease-in-sine"
                >
                  <Box
                    sx={{
                      padding: { xs: 1, md: '80px 100px 20px 100px' },
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        bgcolor: 'orange',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        sx={{
                          textTransform: 'none',
                          fontWeight: 700,
                          fontSize: { xs: '18px', md: '28px' },
                          lineHeight: { xs: 1, md: 1.5 },
                          color: 'white',
                        }}
                      >
                        Expert Maintenance
                      </Button>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: 1, md: '8px 100px 20px 100px' },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                      }}
                    >
                      Comprehensive maintenance to prevent downtime and ensure
                      safety.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      /* maxWidth: { xs: '100%', md: '100%' }, */
                      bgcolor: 'black',
                    }}
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                  >
                    <Box
                      sx={{
                        padding: { xs: 1, md: '80px 100px 20px 100px' },
                        marginTop: 7,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          bgcolor: 'orange',
                          color: 'black',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          sx={{
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: { xs: '18px', md: '28px' },
                            lineHeight: { xs: 1, md: 1.5 },
                            color: 'white',
                          }}
                        >
                          Lighting Solutions
                        </Button>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        padding: { xs: 1, md: '8px 100px 20px 100px' },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'white',
                        }}
                      >
                        Energy-efficient lighting installations and upgrades for
                        your workspace.
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ mt: 2, mb: 2, bgcolor: 'black', border: '5px solid black' }}>
          <ButtonBaseDemo />
        </Box>
        {/* carousel */}
        <Carousel />
        {/*  about*/}
        <Container maxWidth="xl" sx={{ marginTop: 2, bgcolor: 'black' }}>
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                padding: { xs: 3, md: 10 },
                color: 'orange',
                fontSize: { xs: 20, sm: 22, md: 28, lg: 32 },
                fontFamily: 'DM Serif Display',
              }}
            >
              Quality Electric LLC
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                padding: 3,
                fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                color: 'orange',
                fontFamily: 'Jost',
              }}
            >
              Welcome to Quality Electric LLC, your trusted partner for premium
              electrical services. We pride ourselves on delivering exceptional
              customer service and unparalleled expertise. Our team of
              experienced technicians is equipped with the best trade practices
              and quality expertise, ensuring every electrical repair is handled
              with professionalism and integrity. At Quality Electric LLC, we
              understand the importance of reliable and safe electrical systems
              for your home or business. That&#39;s why we are committed to
              providing top-notch services that meet and exceed your
              expectations. Whether it&#39;s a minor repair or a major
              installation, our skilled technicians are dedicated to ensuring
              your electrical needs are met efficiently and effectively. We
              proudly serve the Alabama, Georgia, and Tennessee areas, offering
              a wide range of services tailored to meet the unique demands of
              our clients. Our commitment to excellence and customer
              satisfaction sets us apart, making us the preferred choice for all
              your electrical needs. Thank you for choosing Quality Electric
              LLC. We look forward to serving you with the highest standards of
              quality and reliability.
            </Typography>
          </Box>
          <Box style={{ padding: 3, backgroundImage }}>
            <Link href="/services">
              <Button
                variant="contained"
                component={motion.button}
                size="medium"
                style={{
                  marginTop: 2,
                  mb: 3,
                  fontFamily: 'DM Serif Display',
                  fontSize: { md: '18px' },
                  fontWeight: 'medium',
                  border,
                  boxShadow,

                  textDecoration: 'none', // Removes underline
                  borderRadius: '35px',
                }}
                sx={{
                  color: 'black',
                  textDecoration: 'none', // Removes underline
                  backgroundColor: 'orange', // Set the background color to orange
                  '&:hover': {
                    backgroundColor: 'darkorange', // Set the hover background color to a darker shade of orange
                  },
                }}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Our Services
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
