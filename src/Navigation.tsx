import type { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export const Navigation: FunctionComponent = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <MenuItem component={Link} to="/">
          <HomeIcon />
        </MenuItem>
        <MenuItem component={Link} to="/builder">
          Serverless databases selector
        </MenuItem>
        <MenuItem component={Link} to="/solutions">
          Solutions catalog
        </MenuItem>
        <MenuItem component={Link} to="/infrastructures">
          Infrastructures
        </MenuItem>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </Box>
);
