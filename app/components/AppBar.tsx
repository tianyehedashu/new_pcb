import React from 'react';
import { AppBar as MuiAppBar, Box, Button, Container, Toolbar, Typography, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@remix-run/react';


export function AppBar() {
  const LinkComponent = typeof window === 'undefined' ? 'a' : Link;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = typeof window !== 'undefined' ? Boolean(anchorEl) : false;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'PCB Manufacturing', path: '/pcb-manufacturing' },
    { name: 'PCB Assembly', path: '/pcb-assembly' },
    { name: 'Price Calculator', path: '/price-calculator' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <MuiAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={LinkComponent}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            INNO PCB
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: theme.spacing(2) }}>
            {navItems.map((item) => (
              <Button 
                key={item.path}
                color="inherit" 
                component={LinkComponent} 
                to={item.path}
                sx={{ 
                  textTransform: 'none',
                  fontSize: theme.typography.body1.fontSize,
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.path} 
                  component={LinkComponent} 
                  to={item.path}
                  onClick={handleClose}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}