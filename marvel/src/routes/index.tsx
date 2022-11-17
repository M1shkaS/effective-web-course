import ErrorMessage from 'components/errorMessage/ErrorMessage';
import CharactersPage from './charactersPage/CharactersPage';
import ComicsPage from './comicsPage/ComicsPage';
import SeriesPage from './seriesPage/SeriesPage';
import SingleCharacterPage from './singleCharacterPage/SingleCharacterPage';
import SingleComicPage from './singleComicPage/SingleComicPage';
import SingleSeriePage from './singleSeriePage/SingleSeriePage';

const routes = [
  {
    path: '/',
    element: <CharactersPage />
  },
  {
    path: '/characters',
    element: <CharactersPage />
  },
  {
    path: '/characters/:id',
    element: <SingleCharacterPage />
  },
  {
    path: '/comics',
    element: <ComicsPage />
  },
  {
    path: '/comics/:id',
    element: <SingleComicPage />
  },
  {
    path: '/series',
    element: <SeriesPage />
  },
  {
    path: '/series/:id',
    element: <SingleSeriePage />
  },
  { path: '*', element: <ErrorMessage /> }
];

export default routes;
