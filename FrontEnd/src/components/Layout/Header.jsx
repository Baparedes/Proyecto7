import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/users/UserContext';

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logoutUser();
    handleCloseUserMenu();
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backdropFilter: 'blur(30px)',
        bgcolor: 'rgba(8, 26, 44, 0.8)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
            }}
          >
            <Link
              to={'/'}
              sx={{
                cursor: 'pointer',
              }}
            >
              <img className="logo" src="/logoNimbus.png" />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/nosotros"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Sobre Nosotros
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/contacto"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Contacto
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
            }}
          >
            <Link
              to={'/'}
              sx={{
                cursor: 'pointer',
              }}
            >
              <img className="logo" src="/logoNimbus.png" />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/nosotros"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Sobre Nosotros
            </Button>
            <Button
              component={Link}
              to="/contacto"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contacto
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opciones de usuario">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon alt="Usuario" fontSize='large' sx={{ color:'white' }}/>
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
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/perfil"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Perfil
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/iniciar-sesion"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Iniciar sesión
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to={'/registro'}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Registrarme
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
