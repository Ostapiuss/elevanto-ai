import React from 'react';

import { Link } from 'react-router';

import Logo from '@assets/png/logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Box, Container, Menu, MenuItem } from '@mui/material';

import { constants } from '@constants/index';

import './style.scss';

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ boxShadow: 'none', backgroundColor: 'white' }} component="header">
      <Container maxWidth="xl" className="elevanto-header">
        <Toolbar disableGutters>
          <Box className="elevanto-header__logo">
            <Link className="logo-container" to="/">
              <Box className="logo">
                <img src={Logo} alt="elevanto-logo" />
              </Box>
              <div className="title">Elevanto.ai</div>
            </Link>
          </Box>
          <Box sx={{ display: { md: 'flex', xl: 'none', lg: 'none', justifyContent: 'right' } }}>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ marginLeft: 'auto' }}
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: constants.colors.primary }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}
              >
                <MenuItem>
                  <Link to="/features">Features</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/pricing">Pricing</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/testimonials">Testimonials</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/faqs">FAQS</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box sx={{ display: { flexGrow: 1, xs: 'none', md: 'none', lg: 'flex' } }}>
            <Box className="navigation">
              <MenuItem className="navigation__item">
                <Link to="/features">Features</Link>
              </MenuItem>
              <MenuItem className="navigation__item">
                <Link to="/pricing">Pricing</Link>
              </MenuItem>
              <MenuItem className="navigation__item">
                <Link to="/testimonials">Testimonials</Link>
              </MenuItem>
              <MenuItem className="navigation__item">
                <Link to="/faqs">FAQS</Link>
              </MenuItem>
            </Box>
            <Box sx={{ marginLeft: 'auto' }} className="elevanto-header__actions">
              <Button variant="outlined">Sign In</Button>
              <Button variant="contained">Start for free</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
