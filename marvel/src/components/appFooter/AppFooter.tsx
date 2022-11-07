import React, { FC } from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import marvelLogo from '../../../public/marvel_logo.svg';

import './appFooter.css';

const AppFooter: FC = () => {
  return (
    <footer className="footer">
      <Toolbar
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Typography component="div">
          <Link href="/">
            <img className="logo" src={marvelLogo} alt="logo" />
          </Link>
        </Typography>
        <Typography component="div" color="white">
          {`Data provided by Marvel. © ${new Date().getFullYear()} MARVEL`}
        </Typography>
        <Link
          href="https://developer.marvel.com/"
          color="white"
          underline="none"
        >
          developer.marvel.com
        </Link>
      </Toolbar>
    </footer>
  );
};

export default AppFooter;
