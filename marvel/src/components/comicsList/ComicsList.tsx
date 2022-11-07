import React, { FC } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SearchForm from 'components/searchForm/SeacrhForm';
import CardItem from 'components/cardItem/CardItem';

const comics = [
  {
    id: 1,
    name: 'Хало: Сопротивление',
    description: '',
    img: 'https://com-x.life/uploads/posts/2022-11/1667503677_0_73889900.jpg'
  },
  {
    id: 2,
    name: 'Guardians Of The Galaxy',
    description:
      'The Worldmind is collecting data for the new Xandar pavilion on Terra and who knows Earth better than Peter Quill? (Probably…a lot of people…but definitely not the other Guardians!) What Star-Lord doesn’t know, is that a Celestial has been watching and waiting for the Guardians of the Galaxy to be distracted to begin his plan to wipe humanity from existence.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/8/70/63613a2c21caf/clean.jpg'
  },
  {
    id: 3,
    name: 'Deadpool',
    description:
      'Marvel’s top merc is back in business! We all know Wade Wilson is one of the top mercenary/assassins in the Marvel Universe, even if he is simultaneously the most annoying one…but he’s pushing to make that recognition official as he auditions for the elite group known as the Atelier.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/00/63613a5218ce3/clean.jpg'
  }
];

const ComicsList: FC = () => {
  return (
    <>
      <Typography sx={{ mb: '10px' }} variant="h3" color="#525252">
        Comics (1400)
      </Typography>
      <SearchForm />
      <Grid container sx={{ mt: '1rem' }} spacing={2}>
        {comics.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </Grid>
    </>
  );
};

export default ComicsList;
