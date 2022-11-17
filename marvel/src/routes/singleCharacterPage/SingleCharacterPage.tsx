import LinksCreation from 'components/linksCreation/LinksCreation';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './SingleCharacterPage.modules.scss';

const character = {
  name: '3-D Man',
  description:
    "The character was writer Roy Thomas homage to the Joe Simon and Jack Kirby character Captain 3-D, and was intended by Thomas as a commentary on contemporary societal themes using 1950s analogues. According to the characters artist co-creator Jim Craig, Thomas had initially told him 3-D Man was going to debut in his own magazine-format series in actual stereoscopic 3D, but after further researching the cost informed him that the budget would not cover it.[3] The character instead debuted in a three-issue run of the anthology series Marvel Premiere, issues #35–37 (1977). These comics, the first issue in particular, have a number of graphical elements clearly intended for their originally planned 3-D presentation.[3] Because 3-D Man's adventures take place in the 1950s, Craig had to spend extensive time at a library doing research for the story's setting.",
  img: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  comics: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
      name: 'Avengers: The Initiative (2007) #14'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
      name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
      name: 'Avengers: The Initiative (2007) #15'
    }
  ],
  series: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
      name: 'Avengers: The Initiative (2007 - 2010)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
      name: 'Deadpool (1997 - 2002)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
      name: 'Marvel Premiere (1972 - 1981)'
    }
  ]
};

const SingleCharacterPage = () => {
  return (
    <>
      <Paper
        style={{
          height: '300px'
        }}
      >
        <img
          className="character-page-img"
          src={character.img}
          alt={character.name}
        />
      </Paper>
      <Grid container mt="1rem" spacing={2} justifyContent="space-between">
        <Grid item className="character-body" xs={12} md={5}>
          <Typography fontWeight="700" variant="h4" component="h3">
            {character.name}
          </Typography>
          <Typography variant="body1">{character.description}</Typography>
        </Grid>
        <LinksCreation
          {...{
            firstListTitle: 'Comics',
            secondListTitle: 'Series',
            firstArrayLinks: [...character.comics],
            secondArrayLinks: [...character.series]
          }}
        />
      </Grid>
    </>
  );
};

export default SingleCharacterPage;
