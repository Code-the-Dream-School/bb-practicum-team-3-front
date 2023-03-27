import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        StayFinder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: 'auto',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm" align="center">
        <Typography variant="body1">Footer</Typography>
        <Copyright />
      </Container>{' '}
    </Box>
  );
}
