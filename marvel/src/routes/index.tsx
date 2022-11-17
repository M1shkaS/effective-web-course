import ErrorMessage from 'components/errorMessage/ErrorMessage';
import CharactersPage from './charactersPage/CharactersPage';
import ComicsPage from './comicsPage/ComicsPage';
import SeriesPage from './seriesPage/SeriesPage';

const routes = [
  {
    path: '/',
    element: <CharactersPage />
  },
  {
    path: '/comics',
    element: <ComicsPage />
  },
  {
    path: '/series',
    element: <SeriesPage />
  },
  { path: '*', element: <ErrorMessage /> }
];

export default routes;
