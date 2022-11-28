import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Post } from 'types/post';

import './CardItem.modules.scss';

const CardItem: FC<Post> = ({ title, description, thumbnail, id, page }) => {
  const descr: string = description
    ? `${description.slice(0, 170)}...`
    : 'Извините, данных нет';

  return (
    <Grid item className="card-item" xs={6} md={2}>
      <RouterLink to={`/${page}/${id}`}>
        <Card className="card-body" sx={{ height: '100%' }}>
          <CardMedia component="img" image={thumbnail} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {title}
            </Typography>
            <Typography className="card-descr" variant="body1">
              {descr}
            </Typography>
          </CardContent>
        </Card>
      </RouterLink>
    </Grid>
  );
};

export default CardItem;
