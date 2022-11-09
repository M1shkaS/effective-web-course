import CharactersList from 'routes/charactersList/CharactersList';
import ComicsList from 'routes/comicsList/ComicsList';
import SeriesList from 'routes/seriesList/SeriesList';

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
  { path: '*', element: <div>Not Found</div> }
];

export default routes;
