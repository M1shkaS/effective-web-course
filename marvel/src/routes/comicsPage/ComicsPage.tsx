import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SearchForm from 'components/searchForm/SeacrhForm';
import CardItem from 'components/cardItem/CardItem';

import './ComicsPage.modules.scss';

const comics = [
  {
    id: 1,
    title: 'Хало: Сопротивление',
    description: '',
    thumbnail:
      'https://com-x.life/uploads/posts/2022-11/1667503677_0_73889900.jpg'
  },
  {
    id: 2,
    title: 'Guardians Of The Galaxy',
    description:
      'The Worldmind is collecting data for the new Xandar pavilion on Terra and who knows Earth better than Peter Quill? (Probably…a lot of people…but definitely not the other Guardians!) What Star-Lord doesn’t know, is that a Celestial has been watching and waiting for the Guardians of the Galaxy to be distracted to begin his plan to wipe humanity from existence.',
    thumbnail:
      'https://i.annihil.us/u/prod/marvel/i/mg/8/70/63613a2c21caf/clean.jpg'
  },
  {
    id: 3,
    title: 'Deadpool',
    description:
      'Marvel’s top merc is back in business! We all know Wade Wilson is one of the top mercenary/assassins in the Marvel Universe, even if he is simultaneously the most annoying one…but he’s pushing to make that recognition official as he auditions for the elite group known as the Atelier.',
    thumbnail:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/00/63613a5218ce3/clean.jpg'
  }
];

const ComicsPage = () => {
  return (
    <>
      <Typography className="page-title" variant="h3" sx={{ mb: '10px' }}>
        Comics
        <Typography component="span" fontSize="30px">
          (1400)
        </Typography>
      </Typography>
      <SearchForm />
      <Grid container mt="1rem" spacing={2}>
        {comics.map((item) => (
          <CardItem page="comics" key={item.id} {...item} />
        ))}
      </Grid>
    </>
  );
};

export default ComicsPage;
