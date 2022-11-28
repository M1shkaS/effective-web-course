import { FC } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import './LinksCreation.modules.scss';

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

function renderList(list: ArrayLinksCreation[]) {
  return list.map((item: ArrayLinksCreation) => {
    return (
      <ListItem key={item.name}>
        <Link
          href={item.resourceURI}
          target="_blank"
          rel="noreferrer"
          className="ref-link"
          underline="none"
        >
          {item.name}
        </Link>
      </ListItem>
    );
  });
}

const LinksCreation: FC<LinksCreationProps> = ({
  firstListTitle,
  secondListTitle,
  firstArrayLinks,
  secondArrayLinks
}) => {
  return (
    <>
      <Grid item xs={12} md={2}>
        <Typography variant="h4" component="h3" className="ref-title">
          {firstListTitle}
        </Typography>
        <List>{renderList(firstArrayLinks)}</List>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="h4" component="h3" className="ref-title">
          {secondListTitle}
        </Typography>
        <List>{renderList(secondArrayLinks)}</List>
      </Grid>
    </>
  );
};

export default LinksCreation;
