import React from 'react';
import { Link } from 'react-router-dom';

// Style
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ cardInfo }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ cardInfo.image }
          title="Demo Img"
          style={{ backgroundSize: 'contain', backgroundPosition: 'center' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { cardInfo.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { cardInfo.desc }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={ cardInfo.path } size="small" color="primary" style={{ textDecoration: 'none', fontSize: 14 }}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}