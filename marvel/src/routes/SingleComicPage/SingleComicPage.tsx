import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LinksCreation from 'components/LinksCreation/LinksCreation';
import comicStore from 'stores/ComicStore';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from 'components/Spinner/Spinner';
import { observer } from 'mobx-react-lite';

import classes from './SingleComicPage.module.scss';

const SingleComicPage = () => {
  const { id } = useParams();
  const { process, comic, getComic } = comicStore;

  const comicId = id || '0';

  useEffect(() => {
    getComic(comicId);
  }, []);
  return (
    <>
      {process === 'loading' ? (
        <Spinner />
      ) : (
        <Grid container mt="1rem" spacing={3}>
          <Grid item xs={12} md={3} height="450px">
            <img
              src={comic.thumbnail}
              alt={comic.title}
              className={classes.Img}
            />
          </Grid>
          <Grid item xs={12} md={5} className={classes.Body}>
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
              {` ${comic.price}`}
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
      )}
    </>
  );
};

export default observer(SingleComicPage);
