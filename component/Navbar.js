'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { FaPhoneVolume } from 'react-icons/fa6';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoCloseOutline } from 'react-icons/io5';
const navItems = [
  { text: 'Home', Link: '' },
  { text: 'About Us', Link: 'about' },
  { text: 'Services', Link: 'services' },
  { text: 'Contact Us', Link: 'contact' },
];

export default function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const handleClick = (index) => {
    setActiveIndex(index);
    const link = navItems[index].Link;
    router.push(`/${link}`);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    setSlideIn(true);
  };

  const handleDrawerClose = () => {
    setSlideIn(false);
    setTimeout(() => {
      setOpen(false);
    }, 300); // Adjust this to the closing transition duration
  };

  const drawer = (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, mt: 1 }}>
        {/*     <Typography
          sx={{
            fontSize: '17px',
            fontFamily: 'Jost',
            fontWeight: 800,
            mt: 1.5,
          }}
        >
          Hard Fork Maintaince inc
        </Typography> */}
        <Box>
          <IconButton
            sx={{
              borderRadius: '28px',
              bgcolor: 'white',
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
              },
            }}
            size="large"
            onClick={() => setOpen(false)}
          >
            <IoCloseOutline />
          </IconButton>
        </Box>
      </Box>
      <Box onClick={handleDrawerClose}>
        <List>
          {navItems.map((item) => (
            <ListItem
              sx={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={item}
            >
              <Link
                href={`/${item.Link}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <ListItemButton
                  sx={{
                    width: '100%',
                    fontFamily: 'Arial, sans-serif', // Change font family here
                    '&:hover': {
                      backgroundColor: 'transparent', // No background color change
                      borderRadius: '26px',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Elevation effect
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'transparent', // No background color change
                      textDecoration: 'underline', // Underline effect
                      borderRadius: '26px',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Elevation effect
                    },
                  }}
                >
                  <Grid
                    sx={{
                      margin: 'auto',
                    }}
                  >
                    <ListItemText
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      primaryTypographyProps={{
                        fontFamily: 'DM Serif Display',
                        fontWeight: 700,
                      }}
                      primary={item.text}
                    />
                  </Grid>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          top: 'auto',
          bgcolor: 'black',
          display: { xs: 'none', md: 'flex' },
        }}
        elevation={0}
      >
        <Toolbar disableGutters={true} variant="dense">
          <Box sx={{ display: 'flex', margin: 'auto', gap: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <MdOutlineMarkEmailUnread
                style={{
                  color: 'orange',
                  width: 18,
                  height: 18,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Jost',
                  textDecoration: 'none',
                  color: 'white', // Inherit text color
                  '&:hover': {
                    textDecoration: 'none', // Remove underline on hover
                  },
                }}
                component="a"
                href="malto:qualityelectric174@gmail.com"
              >
                {' '}
                qualityelectric174@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <FaPhoneVolume
                style={{
                  color: 'orange',
                  width: 18,
                  height: 18,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Jost',
                  textDecoration: 'none',
                  color: 'white', // Inherit text color
                  '&:hover': {
                    textDecoration: 'none', // Remove underline on hover
                  },
                }}
                component="a"
                href="tel:+4707058015"
              >
                24/7 Customer care
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        position="sticky"
        sx={{
          /*  bgcolor: 'white', */ backgroundImage:
            'linear-gradient(90deg, rgba(251,251,251,1) 26%, rgba(251,249,243,1) 35%, rgba(255,196,0,1) 83%);',
          /*  'linear-gradient(90deg, rgba(251,251,251,1) 53%, rgba(251,249,243,1) 54%, rgba(255,196,0,1) 83%);' */
        }}
        elevation={2}
      >
        <Toolbar>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Image src={'/electriclogo2.png'} alt="" width={60} height={60} />
          </Box>
          {/* For Mobile */}
          <Box
            sx={{ display: { xs: 'flex', md: 'none' }, cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            <Image
              src="/electriclogo2.png"
              alt=""
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box
            sx={{
              margin: 'auto',
              gap: 4,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.text}
                href={`/${item.Link}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '19px',
                    fontFamily: 'DM Serif Display',

                    borderRadius: 5,
                    color: activeIndex === index ? '#ffc400' : 'black', // Active color
                    transition: 'all 0.2s ease-in-out', // Smooth transition
                    '&:hover': {
                      // Hover style for non-active buttons
                      color: activeIndex === index ? '#ffc400' : 'black',
                    },
                  }}
                  onClick={() => handleClick(index)}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                bgcolor: 'white',
                borderRadius: '16px',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                },
              }}
            >
              <RiMenu4Line />
            </IconButton>
          </Box>
        </Toolbar>
        <div>
          <Drawer
            open={open}
            variant="temporary"
            onClose={handleDrawerClose}
            PaperProps={{
              sx: {
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    'linear-gradient(to bottom, #FFA500, #FFA500 20%, #FFEFD5 30%, #FFEFD5)', // Adjust colors and position as needed
                  clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)', // Create the arc shape
                },
                clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)', // Create the arc shape
                animation: `${
                  slideIn ? 'radialOpen' : 'radialClose'
                } 1.5s ease`,
              },
            }}
            sx={{
              '& .MuiBackdrop-root': {
                display: 'none',
                background: '#ffc400', // Change backdrop color here
              },
              '& .MuiDrawer-paper': {
                background: 'white', // Change backdrop color here
              },
            }}
          >
            {drawer}
          </Drawer>
        </div>
      </AppBar>
    </Box>
  );
}
