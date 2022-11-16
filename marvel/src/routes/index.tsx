import CharactersList from 'routes/charactersList/CharactersList';
import ComicsList from 'routes/comicsList/ComicsList';
import SeriesList from 'routes/seriesList/SeriesList';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const routes = [
  {
    path: '/',
    element: <CharactersList />
  },
  {
    path: '/comics',
    element: <ComicsList />
  },
  {
    path: '/series',
    element: <SeriesList />
  },
  { path: '*', element: <ErrorMessage /> }
];

export default routes;
