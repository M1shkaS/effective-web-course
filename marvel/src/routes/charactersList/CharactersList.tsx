import { FC } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CardItem from 'components/cardItem/CardItem';
import SearchForm from 'components/searchForm/SeacrhForm';

const characters = [
  {
    id: 1,
    name: 'Lizards',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
  },
  {
    id: 2,
    name: 'Капитан Америка',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    img: 'https://weblinks.ru/wp-content/uploads/2021/07/65-652215_captain-america-png-photos-transparent-background-captain-america.jpg'
  },
  {
    id: 3,
    name: 'Женщина Халк',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    img: 'https://upload.wikimedia.org/wikipedia/ru/4/4e/SheHulk01.jpg'
  },
  {
    id: 4,
    name: 'Альтрон',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b3/Ultron.jpg/231px-Ultron.jpg'
  }
];

const CharactersList: FC = () => {
  return (
    <>
      <Typography sx={{ mb: '10px' }} variant="h3" color="#525252">
        Characters (200)
      </Typography>
      <SearchForm />
      <Grid container sx={{ mt: '1rem' }} spacing={2}>
        {characters.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </Grid>
    </>
  );
};

export default CharactersList;
