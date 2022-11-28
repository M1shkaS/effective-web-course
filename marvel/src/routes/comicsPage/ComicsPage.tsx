import { useEffect, useState, FC } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Pagination, Stack } from '@mui/material';

import SearchForm from 'components/searchForm/SeacrhForm';
import CardItem from 'components/cardItem/CardItem';

import './ComicsPage.modules.scss';
import { observer } from 'mobx-react-lite';
import postsStore from 'stores/PostsStore';

import setListContent from 'utils/setListContent';
import { Post } from 'types/post';

function renderList(posts: Post[]): any {
  return posts.map((item) => (
    <CardItem page="comics" key={item.id} {...item} />
  ));
}

const ComicsPage = observer(() => {
  const { process, posts, limit, totalPosts, getPostsList } = postsStore;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPostsList('comics', offset);
  }, []);

  return (
    <>
      <Typography className="page-title" variant="h3" sx={{ mb: '10px' }}>
        Comics
        <Typography component="span" fontSize="30px">
          {`(${totalPosts})`}
        </Typography>
      </Typography>
      <SearchForm />
      <Grid container sx={{ mt: '1rem' }} spacing={2}>
        {setListContent(process, () => renderList(posts))}
      </Grid>
    </>
  );
});

export default ComicsPage;
