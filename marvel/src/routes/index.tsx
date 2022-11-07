// В этом файле массив со всем путями / роутами приложения
import CharactersList from 'components/charactersList/CharactersList';

const routes = [
  {
    path: '/',
    element: <CharactersList />
  },
  { path: '*', element: <div>Not Found</div> }
];

export default routes;
