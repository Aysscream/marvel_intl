import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';
import CardComic from './CardComic';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 698,
    height: 740,
    objectPosition: 'center ',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
export default function GridComics(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ height: '30px' }}>COMICS 2021</div>
      <GridList cellHeight={270} className={classes.gridList}>
        {props.comics.map(comic => (
          <GridListTile key={comic.id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`comicbyid/${comic.id}`}
            >
              {' '}
              {<CardComic comic={comic} />}{' '}
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
