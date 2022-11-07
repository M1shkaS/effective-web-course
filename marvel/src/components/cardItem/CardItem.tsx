import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardProps } from 'types/cardProps';

const CardItem: FC<CardProps> = ({ name, description, img }) => {
  const descr: string = description
    ? `${description.slice(0, 160)}...`
    : 'Извините, данных нет';

  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ height: '350px' }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography color="#cd3508" gutterBottom variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">{descr}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
