import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Post } from 'types/post';

import classes from './CardItem.module.scss';

const CardItem: FC<Post> = ({ title, description, thumbnail, id, page }) => {
  const descr: string = description
    ? `${description.slice(0, 170)}...`
    : 'Извините, данных нет';

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
              {descr}
            </Typography>
          </CardContent>
        </Card>
      </RouterLink>
    </Grid>
  );
};

export default CardItem;
