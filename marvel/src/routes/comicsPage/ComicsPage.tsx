import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Pagination, Stack } from '@mui/material';

import SearchForm from 'components/SearchForm/SeacrhForm';
import CardItem from 'components/СardItem/CardItem';

import { observer } from 'mobx-react-lite';
import postsStore from 'stores/PostsStore';
import setListContent from 'utils/setListContent';
import { Post } from 'types/post';

import classes from './ComicsPage.module.scss';

const renderList: any = (posts: Post[]) => {
  return posts.map((item) => (
    <CardItem page="comics" key={item.id} {...item} />
  ));
};

const ComicsPage = () => {
  const {
    process,
    posts,
    limit,
    offset,
    totalPosts,
    nameStartsWith,
    typeSearchRequest,
    getPostsList,
    getPostsByTitleStartsWith
  } = postsStore;

  useEffect(() => {
    getPostsList('comics', 0);
  }, []);

  return (
    <>
      <Typography className={classes.Title} variant="h3" sx={{ mb: '10px' }}>
        Comics
        <Typography component="span" fontSize="30px">
          ({totalPosts})
        </Typography>
      </Typography>
      <SearchForm page="comics" />
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
                getPostsByTitleStartsWith(
                  'comics',
                  nameStartsWith,
                  num * limit - limit
                );
              } else {
                getPostsList('comics', num * limit - limit);
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

export default observer(ComicsPage);
