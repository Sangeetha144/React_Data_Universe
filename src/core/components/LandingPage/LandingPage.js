import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

import './LandingPage.css'
import Support from '../Support/Support';
const settings = ['Logout'];

function LandingPage() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      maxWidth: 200,

    },
  }));

  return (
    <div
      className="LandingPage"
      style={{
        background: 'linear-gradient(to top left, #ff9700 0%, #35afd7 57%)',
        height: '585px'
      }}
    >

      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', position: 'static' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="a">
              <img src="/assets/logo_land.png" height={'80px'} alt="logo" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Sangeetha"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <LogoutIcon sx={{ marginRight: 1 }} /> {/* Include the LogoutIcon */}
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className='landing' >
        <div className="content" style={{ color: 'white', textAlign: 'center', position: 'relative', top: '-20px' }}>
          <h1 style={{ letterSpacing: '1px', fontSize: '28px', fontWeight: '500' }}>Hello, Sangeetha! What's Up for the day?</h1>
          <p style={{ letterSpacing: '2px', fontSize: '16px' }}>Welcome to the Data Universe Platform! Explore our tailored offerings </p>
          <p style={{ letterSpacing: '2px', fontSize: '16px', lineHeight: '1px' }}>constituting to your imperative data requirements without missing a beat</p>
        </div>
        <div className='animation'>
          <img src='/assets/landingimages/Group 520.png' />

          <a >
            <CustomWidthTooltip title="The process of analyzing various forms of data in order to improve a company's services or investments" placement="left">
              <div id="intelligence" className="icon">

              </div>
            </CustomWidthTooltip>
          </a>
          <a>
            <CustomWidthTooltip title="needs to be update" placement="left" >

              <div id="analytics" className="icon">

              </div>
            </CustomWidthTooltip>
          </a>
          <a>
            <CustomWidthTooltip title="Single environment consisting of a unified architecture to enable frictionless access & sharing of data in a distributed data environment" placement="right" >

              <div id="fabric" className="icon">

              </div>
            </CustomWidthTooltip>
          </a>
          <a>
            <CustomWidthTooltip title="needs to be update" placement="right" >

              <div id="observability" className="icon">

              </div>
            </CustomWidthTooltip>
          </a>
        </div>
      </div>
      <div className='support'>
        <Support />
      </div>
    </div>
  );
}

export default LandingPage;
