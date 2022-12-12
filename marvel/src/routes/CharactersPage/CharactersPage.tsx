import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Pagination, Stack } from '@mui/material';

import CardItem from 'components/CardItem/CardItem';
import SearchForm from 'components/SearchForm/SearchForm';

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
    offset,
    nameStartsWith,
    typeSearchRequest
  } = postsStore;

  useEffect(() => {
    postsStore.getPostsList('characters', 0);
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
            page={offset / limit + 1}
            onChange={(_, num) => {
              if (typeSearchRequest) {
                postsStore.getPostsByNameStartsWith(
                  'characters',
                  nameStartsWith,
                  num * limit - limit
                );
              } else {
                postsStore.getPostsList('characters', num * limit - limit);
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
