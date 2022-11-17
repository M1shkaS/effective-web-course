import { FC } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import './LinksCreation.modules.scss';

import { ILinksCreationProps } from 'types/LinksCreationProps';

const LinksCreation: FC<ILinksCreationProps> = ({
  firstListTitle,
  secondListTitle,
  firstArrayLinks,
  secondArrayLinks
}) => {
  function renderList(list: any) {
    return list.map((item: { name: string; resourceURI: string }) => {
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
