import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

// --> paginas del menu
const settings = ['Perfil', 'Cerrar Sección'];

function NavBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState( null );
  const [anchorElUser, setAnchorElUser] = React.useState( null );


  const handleOpenUserMenu = ( event ) => {
    setAnchorElUser( event.currentTarget );
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav( null );
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser( null );
  };


  return (
    <AppBar position="static" style={{ background: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean( anchorElNav )}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
            </Menu>
             {router.pathname != '/' && <Link href="./" ><Button sx={{color:'white'}}><ArrowBackIosIcon />Volver</Button></Link>}
          </Box>
          <NewspaperIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            News
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {router.pathname != '/' &&<Link href="./" ><Button sx={{color:'white'}}><ArrowBackIosIcon />Volver</Button></Link>}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, position: 'relative' }}>
            <Box sx={{
              background: ' rgba(255, 0, 0, 0.582)', width: '30px',
              height: '10px', position: 'absolute',
              top: '40%'
            }}></Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              News
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </IconButton>
            </Tooltip>
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
              open={Boolean( anchorElUser )}
              onClose={handleCloseUserMenu}
            >
              {settings.map( ( setting,i ) => (
                <Link href={setting} key={settings}>
                  <MenuItem key={i} onClick={handleCloseUserMenu}>

                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem></Link>
              ) )}
            </Menu>
          </Box>



        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;