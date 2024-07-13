import {
  Box,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Image from 'next/image';
import { GiOilPump } from 'react-icons/gi';
import { GiChainsaw } from 'react-icons/gi';
import { BsBricks } from 'react-icons/bs';
import { MdPlumbing } from 'react-icons/md';
import { TbWindElectricity } from 'react-icons/tb';
export default function Services() {
  return (
    <Box>
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
              src={'/images/electric10.png'}
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
                  color: 'white',
                  fontFamily: 'Fauna One',
                  fontSize: { xs: '1.7rem', md: '4rem' },
                  fontWeight: 900,
                  textTransform: 'capitalize',
                  lineHeight: '1.1em',
                  textShadow: '1px 1px black',
                }}
              >
                Our Services
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <GiChainsaw
                style={{
                  minHeight: 70,
                  minWidth: 70,
                }}
              />
            </Box>
            <Box sx={{ mb: 2, pl: { xs: 0, md: 2 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 800,
                  fontSize: { xs: '30px', md: '50px', mb: 1 },
                  color: '#ffc400',
                }}
              >
                Commercial Electrical Services
              </Typography>
            </Box>
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary=" Electrical Maintenance: Regular maintenance services to ensure your business operates smoothly."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Lighting Solutions: Energy-efficient lighting installations and upgrades for commercial spaces."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Electrical Troubleshooting: Expert diagnosis and repair of electrical problems."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Panel Upgrades: Upgrading electrical panels to meet the demands of your business."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Safety Inspections: Comprehensive safety inspections to identify and address potential hazards."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Divider />
        {/* List 2 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <BsBricks
                style={{
                  minHeight: 70,
                  minWidth: 70,
                }}
              />
            </Box>
            <Box sx={{ mb: 2, pl: { xs: 0, md: 2 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 800,
                  fontSize: { xs: '30px', md: '48px', mb: 1 },
                  color: '#ffc400',
                }}
              >
                Industrial Electrical Services
              </Typography>
            </Box>
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                  /*   bgcolor: 'skyb', // Alternate background color */
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Equipment Installation: Professional installation of industrial electrical equipment. "
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="System Upgrades: Upgrading and expanding electrical systems for industrial facilities."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Preventive Maintenance: Scheduled maintenance to prevent downtime and ensure operational efficiency."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Electrical Testing: Testing and certification of electrical systems and equipment."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Control Systems: Design and installation of industrial control systems"
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Divider />
        {/* List 3 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'grid',
              placeItems: { xs: 'center', md: 'left' },
              p: 1,
            }}
          >
            <Box>
              <MdPlumbing
                style={{
                  minHeight: 80,
                  minWidth: 80,
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 800,
                  fontSize: { xs: '30px', md: '60px', mb: 1 },
                  color: '#ffc400',
                }}
              >
                Specialty Services
              </Typography>
            </Box>
            <Box
              sx={{
                width: '40px',
                height: '3px',
                bgcolor: '#ffc400',
                margin: '0 auto',
              }}
            >
              <Divider />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  color: '#ffc400',
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={800}
                  component="span"
                  fontFamily={'Orbitron'}
                >
                  Services Include
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Generator Installation: Reliable installation and maintenance of backup generators."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Surge Protection: Protect your property from power surges with our surge protection solutions."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: '#ffc400',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Smart Home Integration: Integrate smart home technologies for enhanced convenience and energy savings."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="EV Charging Stations: Installation of electric vehicle charging stations for residential and commercial use."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: '#ffc400', width: 12, height: 8 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Custom Projects: Tailored electrical solutions for unique and custom projects."
                sx={{ marginTop: 0, marginBottom: 0 }}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
