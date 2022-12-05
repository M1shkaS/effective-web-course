import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Pagination, Stack } from '@mui/material';

import CardItem from 'components/СardItem/CardItem';
import SearchForm from 'components/SearchForm/SeacrhForm';

import { observer } from 'mobx-react-lite';
import postsStore from 'stores/PostsStore';
import setListContent from 'utils/setListContent';
import { Post } from 'types/post';

import classes from './CharactersPage.module.scss';

const renderList: any = (posts: Post[]) => {
  return posts.map((item: Post) => (
    <CardItem page="characters" key={item.id} {...item} />
  ));
};

const CharactersPage = () => {
  const {
    process,
    posts,
    totalPosts,
    limit,
    nameStartsWith,
    typeSearchRequest,
    getPostsList,
    getPostsByNameStartsWith
  } = postsStore;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPostsList('characters', 0);
  }, []);

  return (
    <>
      <Typography className={classes.Title} variant="h3" sx={{ mb: '10px' }}>
        Characters
        <Typography component="span" fontSize="30px">
          ({totalPosts})
        </Typography>
      </Typography>
      <SearchForm page="characters" />
      <Grid container sx={{ mt: '1rem' }} spacing={2}>
        {setListContent(process, () => renderList(posts))}
      </Grid>
      {process === 'loading' ? null : (
        <Stack spacing={2}>
          <Pagination
            sx={{
              marginY: 3,
              marginX: 'auto',
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '15px'
            }}
            count={Math.ceil(totalPosts / limit)}
            page={page}
            onChange={(_, num) => {
              setPage(num);
              setOffset(num * limit - limit);
              if (typeSearchRequest) {
                getPostsByNameStartsWith(
                  'characters',
                  nameStartsWith,
                  num * limit - limit
                );
              } else {
                getPostsList('characters', num * limit - limit);
              }
            }}
            variant="outlined"
            color="primary"
          />
        </Stack>
      )}
    </>
  );
};

export default observer(CharactersPage);
