import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import CharactersPage from './CharactersPage/CharactersPage';
import ComicsPage from './ComicsPage/ComicsPage';
import SeriesPage from './SeriesPage/SeriesPage';
import SingleCharacterPage from './SingleCharacterPage/SingleCharacterPage';
import SingleComicPage from './SingleComicPage/SingleComicPage';
import SingleSeriePage from './SingleSeriePage/SingleSeriePage';

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
