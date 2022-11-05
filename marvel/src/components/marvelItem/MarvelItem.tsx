import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MarvelItem: FC = () => {
  return (
    <Grid item xs={6} md={8}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Lizard
          </Typography>
          <Typography variant="body1">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MarvelItem;
