// В этом файле массив со всем путями / роутами приложения
import CharactersList from 'components/charactersList/CharactersList';
import ComicsList from 'components/comicsList/ComicsList';
import SeriesList from 'components/seriesList/SeriesList';

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
