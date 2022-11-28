import { useParams } from 'react-router-dom';

import LinksCreation from 'components/linksCreation/LinksCreation';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './SingleCharacterPage.modules.scss';
import { useEffect } from 'react';
import characterStore from 'stores/CharacterStore';
import { observer } from 'mobx-react-lite';
import Spinner from 'components/spinner/Spinner';

const SingleCharacterPage = observer(() => {
  const { id } = useParams();
  const { process, character, getCharacter } = characterStore;

  const charId = id || '0';
  useEffect(() => {
    getCharacter(charId);
  }, []);
  return (
    <>
      {process === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <Paper
            style={{
              height: '300px'
            }}
          >
            <img
              className="character-page-img"
              src={character.thumbnail}
              alt={character.name}
            />
          </Paper>
          <Grid container mt="1rem" spacing={2} justifyContent="space-between">
            <Grid item className="character-body" xs={12} md={5}>
              <Typography
                className="item-title"
                fontWeight="700"
                variant="h4"
                component="h3"
              >
                {character.name}
              </Typography>
              <Typography className="item-descr" variant="body1">
                {character.description}
              </Typography>
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
      )}
    </>
  );
});

export default SingleCharacterPage;
