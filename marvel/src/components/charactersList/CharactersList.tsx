import React, { FC } from 'react';

import Grid from '@mui/material/Grid';

import MarvelItem from 'components/marvelItem/MarvelItem';

const CharactersList: FC = () => {
  return (
    <Grid container spacing={2}>
      <MarvelItem />
    </Grid>
  );
};

export default CharactersList;
