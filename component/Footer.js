import { Box, Grid, Typography } from '@mui/material';
export default function Footer() {
  return (
    <Box sx={{ padding: 1 }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="body1" /*  paddingTop={1}  */ textAlign="center">
            &copy; &nbsp; Quality Electric LLC
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
