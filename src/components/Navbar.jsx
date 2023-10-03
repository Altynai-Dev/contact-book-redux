import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{textDecoration:'none', color:'white'}} to='/'>Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{textDecoration:'none', color:'white'}} to='/register'>Create Contact</Link>
          </Typography>
          <Typography variant="h6" component="div">
          <Link style={{textDecoration:'none', color:'white'}} to='/favorites'>Favorites</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
