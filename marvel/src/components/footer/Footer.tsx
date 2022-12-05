import { Link as RouterLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import marvelLogo from '../../../public/marvel_logo.svg';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Toolbar
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Typography component="div">
          <RouterLink to="/">
            <img className="logo" src={marvelLogo} alt="logo" />
          </RouterLink>
        </Typography>
        <Typography component="div" color="white">
          {`Data provided by Marvel. © ${new Date().getFullYear()} MARVEL`}
        </Typography>
        <Link
          href="https://developer.marvel.com/"
          color="white"
          underline="none"
          target="_blank"
          rel="noreferrer"
        >
          developer.marvel.com
        </Link>
      </Toolbar>
    </footer>
  );
};

export default Footer;
