import { FC, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

import postsStore from 'stores/PostsStore';
import { Post } from 'types/post';

import classes from './CardItem.module.scss';

const addOrRemoveFavouritesItem = (addFavouritePost: boolean, post: Post) => {
  let posts: Post[] = [];
  if (localStorage.getItem('favourites')) {
    posts = [...JSON.parse(localStorage.getItem('favourites') || '')];
  }
  if (addFavouritePost) {
    posts.push(post);
  } else {
    posts = [...JSON.parse(localStorage.getItem('favourites') || '')].filter(
      (item: Post) => item.id !== post.id
    );
  }
  postsStore.addFavouritePosts(posts);
  localStorage.setItem('favourites', JSON.stringify(posts));
};

const CardItem: FC<Post> = ({ title, description, thumbnail, id, page }) => {
  const [likeFavourites, setLikeFavourites] = useState(false);

  useEffect(() => {
    let posts: Post[] = [];
    if (localStorage.getItem('favourites') !== null) {
      posts = [...JSON.parse(localStorage.getItem('favourites') || '')];
      posts.forEach((item) => {
        if (item.id === id) {
          setLikeFavourites(true);
        }
      });
    }
  }, []);

  const className: string = classNames(
    classes.IconFavourites,
    likeFavourites ? classes.Like : null
  );

  return (
    <Grid item className={classes.Card} xs={6} md={2}>
      <RouterLink to={`/${page}/${id}`}>
        <Card sx={{ height: '100%' }}>
          <CardMedia component="img" image={thumbnail} alt={title} />
          <CardContent>
            <Typography gutterBottom component="h3" className={classes.Title}>
              {title}
            </Typography>
            <Typography className={classes.Descr} variant="body2">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </RouterLink>
      <StarIcon
        className={className}
        onClick={() => {
          setLikeFavourites(!likeFavourites);
          addOrRemoveFavouritesItem(!likeFavourites, {
            title,
            description,
            thumbnail,
            id,
            page
          });
        }}
      />
    </Grid>
  );
};

export default CardItem;
