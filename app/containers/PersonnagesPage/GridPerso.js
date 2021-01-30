import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import CardPerso from '../../components/CardPerso';

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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function GridPerso(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ height: '30px', padding: '30px' }}>PERSONNAGES</div>
      <GridList cellHeight={230} className={classes.gridList}>
        {props.persos.map(perso => (
          <GridListTile key={perso.id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`persobyid/${perso.id}`}
            >
              {' '}
              <CardPerso perso={perso} />{' '}
            </Link>
            <GridListTileBar
              title={perso.name}
              subtitle={<span>by: Ayss</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${perso.name}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
