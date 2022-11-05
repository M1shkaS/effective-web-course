import React, { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

import marvelLogo from '../../../public/marvel_logo.svg';

const navItems = ['Characters', 'Comics', 'Series'];

const AppHeader: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#d90b3e' }}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <Typography href="/" component="a">
            <img className="logo" src={marvelLogo} alt="logo" />
          </Typography>
        </Typography>
        <Box component="nav">
          <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <ListItem key={item}>
                <Link color="white" href="/" underline="none">
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
