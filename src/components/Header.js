import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
            StayFinder
          </Typography>
          {isMatch ? (
            <>
              <MenuIcon
                sx={{
                  display: {
                    xs: 'block',
                    lg: 'none',
                  },
                  cursor: 'pointer',
                  color: '#fff',
                  ml: 'auto',
                }}
                onClick={() => setOpenMobileMenu(true)}
              />

              <Drawer
                anchor="left"
                open={openMobileMenu}
                onClose={() => setOpenMobileMenu(false)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: 250,
                    backgroundColor: '#5243C2',
                    height: '100%',
                    py: 3,
                    px: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                  }}
                  role="presentation"
                  onClick={() => setOpenMobileMenu(false)}
                  onKeyDown={() => setOpenMobileMenu(false)}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 3,
                    }}
                  >
                    <Button
                      sx={{ marginLeft: 'auto' }}
                      variant="text"
                      href="/signin"
                    >
                      LOGIN
                    </Button>
                    <Button
                      sx={{ marginLeft: '10px' }}
                      variant="text"
                      href="/signup"
                    >
                      SIGN UP
                    </Button>
                  </Box>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: '500',
                      cursor: 'pointer',
                      position: 'absolute',
                      bottom: '14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    &#169; StayFinder
                  </Typography>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Button
                sx={{ marginLeft: 'auto' }}
                variant="contained"
                href="/signin"
              >
                LOGIN
              </Button>
              <Button
                sx={{ marginLeft: '10px' }}
                variant="contained"
                href="/signup"
              >
                SIGN UP
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
