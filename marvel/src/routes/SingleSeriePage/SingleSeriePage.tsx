import LinksCreation from 'components/LinksCreation/LinksCreation';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import serieStore from 'stores/SerieStore';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Spinner from 'components/Spinner/Spinner';

import classes from './SingleSeriePage.module.scss';

const SingleSeriePage = () => {
  const { id } = useParams();
  const { process, serie } = serieStore;

  const serieId = id || '0';
  useEffect(() => {
    serieStore.getSerie(serieId);
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
                className={classes.Img}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.Body}>
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
};

export default observer(SingleSeriePage);
