import React, { FC } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import marvelLogo from '../../../public/marvel_logo.svg';
import './appHeader.css';

const AppHeader: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#d90b3e' }}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/">
            <img className="logo" src={marvelLogo} alt="logo" />
          </RouterLink>
        </Typography>
        <Box component="nav">
          <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <ListItem>
              <NavLink to="/" className="nav-link">
                Characters
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/comics" className="nav-link">
                Comics
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/series" className="nav-link">
                Series
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
