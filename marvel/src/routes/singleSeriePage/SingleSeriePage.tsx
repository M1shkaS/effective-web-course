import LinksCreation from 'components/linksCreation/LinksCreation';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const serie = {
  title: '1602 (2003 - 2004)',
  img: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/51926fde9c18a.jpg',
  description:
    "Award-winning writer Neil Gaiman teams with artist Andy Kubert to re-imagine the Marvel Universe in the year 1602! It's Spider-Man, the X-Men, Nick Fury, Doctor Strange, Daredevil and more as you'd never think to imagine them in an utterly unique and thrilling tale of high adventure!",
  startYear: 2003,
  endYear: 2004,
  type: 'limited',
  comics: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/20630',
      name: '1602 (2003) #1'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/50114',
      name: '1602 (2003) #2'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/377',
      name: '1602 (2003) #3'
    }
  ],
  characters: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009281',
      name: 'Doctor Doom'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
      name: 'Magneto'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009463',
      name: 'Matthew Murdock'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009547',
      name: 'Natasha Romanoff'
    }
  ]
};

const SingleSeriePage = () => {
  return (
    <>
      <Grid container mt="1rem" spacing={3}>
        <Grid item xs={12} md={3} height="450px">
          <img src={serie.img} alt={serie.title} className="single-img" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="700" variant="h4" component="h3">
            {serie.title}
          </Typography>
          <Typography mt="1rem" variant="body1">
            {serie.description}
          </Typography>
          <Typography fontSize="17px" component="p" mt="1rem">
            <Typography variant="h6" fontWeight="600" component="span">
              Start-Year:
            </Typography>
            {` ${serie.startYear}`}
          </Typography>
          <Typography fontSize="17px" component="p" mt="1rem">
            <Typography variant="h6" fontWeight="600" component="span">
              End-Year:
            </Typography>
            {` ${serie.endYear}`}
          </Typography>
          <Typography fontSize="17px" component="p" mt="1rem">
            <Typography variant="h6" fontWeight="600" component="span">
              Type:
            </Typography>
            {` ${serie.type}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container mt="1rem" spacing={3}>
        <LinksCreation
          {...{
            firstListTitle: 'Characters',
            secondListTitle: 'Comics',
            firstArrayLinks: [...serie.characters],
            secondArrayLinks: [...serie.comics]
          }}
        />
      </Grid>
    </>
  );
};

export default SingleSeriePage;
