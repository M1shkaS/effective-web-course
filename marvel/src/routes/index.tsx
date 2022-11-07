// В этом файле массив со всем путями / роутами приложения
import CharactersList from 'components/charactersList/CharactersList';
import ComicsList from 'components/comicsList/ComicsList';

const routes = [
  {
    path: '/',
    element: <CharactersList />
  },
  {
    path: '/comics',
    element: <ComicsList />
  },
  { path: '*', element: <div>Not Found</div> }
];

export default routes;
