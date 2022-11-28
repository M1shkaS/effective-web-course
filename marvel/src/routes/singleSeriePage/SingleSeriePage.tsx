import LinksCreation from 'components/linksCreation/LinksCreation';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './SingleSeriePage.modules.scss';
import { useParams } from 'react-router-dom';
import serieStore from 'stores/SerieStore';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Spinner from 'components/spinner/Spinner';

const SingleSeriePage = observer(() => {
  const { id } = useParams();
  const { process, serie, getSerie } = serieStore;

  const serieId = id || '0';
  useEffect(() => {
    getSerie(serieId);
  }, []);
  return (
    <>
      {process === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <Grid container mt="1rem" spacing={3}>
            <Grid item xs={12} md={3} height="450px">
              <img
                src={serie.thumbnail}
                alt={serie.title}
                className="single-img"
              />
            </Grid>
            <Grid item xs={12} md={6} className="character-body">
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
      )}
    </>
  );
});

export default SingleSeriePage;
