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
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

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

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const theme = useTheme();
  console.log(theme);
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
                    {navItems.map((navItem) => (
                      <Link
                        href={navItem.path}
                        key={navItem.id}
                        underline="none"
                        color="#fff"
                        sx={{
                          fontWeight: '300',
                          fontSize: '14px',
                          opacity: 0.7,
                          '&:hover': {
                            opacity: 1,
                          },
                          '&:first-of-type': {
                            opacity: 1,
                          },
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
                sx={{ marginLeft: 'auto' }}
                variant="contained"
                href="/signIn"
              >
                LOGIN
              </Button>
              <Button
                sx={{ marginLeft: '10px' }}
                variant="contained"
                href="/signUp"
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
