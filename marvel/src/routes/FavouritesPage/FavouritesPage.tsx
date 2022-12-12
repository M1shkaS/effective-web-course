import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CardItem from 'components/CardItem/CardItem';

import { observer } from 'mobx-react-lite';
import postsStore from 'stores/PostsStore';

import { Post } from 'types/post';
import classes from './FavouritesPage.module.scss';

function renderList(posts: Post[]): any {
  return posts.map((item) => (
    <CardItem page={item.page} key={item.id} {...item} />
  ));
}

const FavouritesPage = () => {
  const { favourites } = postsStore;

  useEffect(() => {
    let posts: Post[] = [];
    if (localStorage.getItem('favourites') !== null) {
      posts = [...JSON.parse(localStorage.getItem('favourites') || '')];
    }
    postsStore.addFavouritePosts(posts);
  }, [favourites]);

  return (
    <>
      <Typography className={classes.Title} variant="h3" sx={{ mb: '10px' }}>
        Favourites
      </Typography>
      <Grid
        container
        className={classes.Wrapper}
        sx={{ mt: '1rem' }}
        spacing={2}
      >
        {favourites.length ? renderList(favourites) : 'Ничего нет :('}
      </Grid>
    </>
  );
};

export default observer(FavouritesPage);
