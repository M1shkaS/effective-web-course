import { FC } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import routes from 'routes';
import Container from '@mui/material/Container';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';

import './style/style.css';

const App: FC = () => {
  const route: RouteObject[] = routes;

  const element = useRoutes(route);

  return (
    <div className="app">
      <AppHeader />
      <Container sx={{ mt: '1rem', mb: '90px', flex: '1 0 auto' }}>
        {element}
      </Container>
      <AppFooter />
    </div>
  );
};

export default App;
