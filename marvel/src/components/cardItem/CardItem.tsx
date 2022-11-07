import React, { FC } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardProps } from 'types/cardProps';

const CardItem: FC<CardProps> = ({ name, description, img }) => {
  const descr: string = description
    ? `${description.slice(0, 200)}...`
    : 'Извините, данных нет';

  return (
    <Grid item xs={6} md={3} sx={{ height: '350px' }}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography
            fontSize="17px"
            color="#cd3508"
            gutterBottom
            variant="h6"
            component="h3"
          >
            {name}
          </Typography>
          <Typography variant="body1" fontSize="14px">
            {descr}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
