import React, { FC } from 'react';

import CharactersList from 'components/charactersList/CharactersList';
import Container from '@mui/material/Container';
import AppHeader from './components/appHeader/AppHeader';
// import AppFooter from './components/appFooter/AppFooter';

import './style/style.css';

const App: FC = () => {
  return (
    <div>
      <AppHeader />
      <Container sx={{ mt: '1rem' }}>
        <CharactersList />
      </Container>
      {/* <AppFooter /> */}
    </div>
  );
};

export default App;
