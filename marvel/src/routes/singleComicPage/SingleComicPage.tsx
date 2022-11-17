import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './SingleComicPage.modules.scss';

import LinksCreation from 'components/linksCreation/LinksCreation';

const comic = {
  title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)',
  img: 'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007.jpg',
  description:
    "The Ultimates vs. the Ultimate X-Men: the battle begins. When the X-Men do the worst thing they could to humanity, the government orders Captain America, Iron Man, Thor and the rest of the Ultimates to bring them down. A small but lethal army, the Ultimates were created to face these and other newly rising threats to mankind. But the X-Men's founder, Professor X, hasn't been training his students for nothing -- and the youngs mutants just might take out the Ultimates first.",
  language: 'en-us',
  pageCount: 112,
  price: 9.99,
  series: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/216',
      name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (1999)'
    }
  ],
  characters: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010908',
      name: 'Beast (Ultimate)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010911',
      name: 'Black Widow (Ultimate)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010913',
      name: 'Captain America (Ultimate)'
    }
  ]
};

const SingleComicPage = () => {
  return (
    <Grid container mt="1rem" spacing={3}>
      <Grid item xs={12} md={3} height="450px">
        <img src={comic.img} alt={comic.title} className="single-img" />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography fontWeight="700" variant="h4" component="h3">
          {comic.title}
        </Typography>
        <Typography mt="1rem" variant="body1">
          {comic.description}
        </Typography>
        <Typography fontSize="17px" component="p" mt="1rem">
          <Typography variant="h6" fontWeight="600" component="span">
            Page-count:
          </Typography>
          {` ${comic.pageCount}`}
        </Typography>
        <Typography fontSize="17px" component="p" mt="1rem">
          <Typography variant="h6" fontWeight="600" component="span">
            Language:
          </Typography>
          {` ${comic.language}`}
        </Typography>
        <Typography fontSize="17px" component="p" mt="1rem">
          <Typography variant="h6" fontWeight="600" component="span">
            Price:
          </Typography>
          {` $${comic.price}`}
        </Typography>
      </Grid>
      <LinksCreation
        {...{
          firstListTitle: 'Characters',
          secondListTitle: 'Series',
          firstArrayLinks: [...comic.characters],
          secondArrayLinks: [...comic.series]
        }}
      />
    </Grid>
  );
};

export default SingleComicPage;
