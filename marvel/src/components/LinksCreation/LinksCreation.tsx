import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import classes from './LinksCreation.module.scss';

interface ArrayLinksCreation {
  name: string;
  resourceURI: string;
}
interface LinksCreationProps {
  firstListTitle: string;
  secondListTitle: string;
  firstArrayLinks: ArrayLinksCreation[];
  secondArrayLinks: ArrayLinksCreation[];
}

const renderList = (list: ArrayLinksCreation[]) => {
  return list.map((item: ArrayLinksCreation) => {
    const resourceURIArr = item.resourceURI.split('/');
    const page: string = resourceURIArr[resourceURIArr.length - 2];
    const pageId: string = resourceURIArr[resourceURIArr.length - 1];
    return (
      <ListItem key={item.name}>
        <RouterLink to={`/${page}/${pageId}`} className={classes.Link}>
          {item.name}
        </RouterLink>
      </ListItem>
    );
  });
};

const LinksCreation: FC<LinksCreationProps> = ({
  firstListTitle,
  secondListTitle,
  firstArrayLinks,
  secondArrayLinks
}) => {
  return (
    <>
      <Grid item xs={12} md={2}>
        <Typography variant="h4" component="h3" className={classes.Title}>
          {firstListTitle}
        </Typography>
        <List>{renderList(firstArrayLinks)}</List>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="h4" component="h3" className={classes.Title}>
          {secondListTitle}
        </Typography>
        <List>{renderList(secondArrayLinks)}</List>
      </Grid>
    </>
  );
};

export default LinksCreation;
