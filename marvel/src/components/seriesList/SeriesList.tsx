import { FC } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CardItem from 'components/cardItem/CardItem';
import SearchForm from 'components/searchForm/SeacrhForm';

const series = [
  {
    id: 1,
    name: 'Black Panther: Wakanda Forever',
    description:
      'Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba)',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_crd_05.jpg'
  },
  {
    id: 2,
    name: 'Thor: Love and Thunder',
    description:
      'Marvel Studios’ “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he’s ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg'
  },
  {
    id: 3,
    name: 'Spider-Man: No Way Home',
    description: '',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg'
  },
  {
    id: 4,
    name: 'Eternals',
    description:
      'Marvel Studios Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg'
  }
];

const SeriesList: FC = () => {
  return (
    <>
      <Typography sx={{ mb: '10px' }} variant="h3" color="#525252">
        Series (50)
      </Typography>
      <SearchForm />
      <Grid container sx={{ mt: '1rem' }} spacing={2}>
        {series.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </Grid>
    </>
  );
};

export default SeriesList;
