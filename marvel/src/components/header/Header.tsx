import { Link as RouterLink, NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useTheme } from 'hooks/use-theme.hooks';
import marvelLogo from '../../../public/marvel_logo.svg';
import './Header.modules.scss';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#d90b3e' }}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/">
            <img className="logo" src={marvelLogo} alt="logo" />
          </RouterLink>
        </Typography>
        <Box component="nav">
          <List sx={{ display: { sm: 'flex' } }}>
            <ListItem>
              <NavLink to="/characters" className="nav-link">
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
        <Typography mr="16px">/</Typography>

        <label htmlFor="toggle_checkbox">
          <input
            type="checkbox"
            id="toggle_checkbox"
            checked={theme === 'dark'}
            onChange={() => {
              if (theme === 'dark') {
                setTheme('light');
              } else {
                setTheme('dark');
              }
            }}
          />
          <div id="star">
            <div className="star" id="star-1">
              ★
            </div>
            <div className="star" id="star-2">
              ★
            </div>
          </div>
          <div id="moon" />
        </label>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
