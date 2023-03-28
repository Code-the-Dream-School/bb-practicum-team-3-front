import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';

const navItems = [
  {
    id: 1,
    name: 'LOGIN',
    path: '/signin',
  },
  {
    id: 2,
    name: 'SIGN UP',
    path: '/signup',
  },
];

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

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
                    backgroundColor: '#2461a6',
                    height: '100%',
                    py: 3,
                    px: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
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
                    {navItems.map((navItem) => (
                      <Link
                        component={ReactRouterLink}
                        to={navItem.path}
                        key={navItem.id}
                        underline="none"
                        color="#fff"
                        sx={{
                          fontWeight: '500',
                          fontSize: '20px',
                        }}
                      >
                        {navItem.name}
                      </Link>
                    ))}
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
                component={ReactRouterLink}
                sx={{ marginLeft: 'auto' }}
                variant="contained"
                to="/signin"
              >
                LOGIN
              </Button>
              <Button
                component={ReactRouterLink}
                sx={{ marginLeft: '10px' }}
                variant="contained"
                to="/signup"
              >
                SIGN UP
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
