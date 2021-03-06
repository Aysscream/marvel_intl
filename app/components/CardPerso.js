import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardPerso(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="hero ou supervilain"
          height="340"
          image={`${props.perso.thumbnail.path}.${
            props.perso.thumbnail.extension
          }`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.perso.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.perso.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
