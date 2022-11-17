import { FC } from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import routes from 'routes';
import Container from '@mui/material/Container';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './style/style.scss';

const App: FC = () => {
  const route: RouteObject[] = routes;

  const element = useRoutes(route);

  return (
    <div className="app">
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ mt: '1rem', mb: '90px', flex: '1 0 auto' }}
      >
        {element}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
