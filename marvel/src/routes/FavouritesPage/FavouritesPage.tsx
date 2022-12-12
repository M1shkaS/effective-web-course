import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CardItem from 'components/CardItem/CardItem';

import { Post } from 'types/post';
import classes from './FavouritesPage.module.scss';

function renderList(posts: Post[]): any {
  return posts.map((item) => (
    <CardItem page={item.page} key={item.id} {...item} />
  ));
}

const FavouritesPage = () => {
  return (
    <>
      <Typography className={classes.Title} variant="h3" sx={{ mb: '10px' }}>
        Favourites
      </Typography>
      <Grid container sx={{ mt: '1rem' }} spacing={2}>
        Ничего нет
      </Grid>
    </>
  );
};

export default FavouritesPage;
