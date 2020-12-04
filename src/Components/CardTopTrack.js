/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';

// import { noImage } from '../image/no-image';

const useStyles = makeStyles({
  CardMedia: {
    width: '100%',
    margin: 5,
    height: 150,
    objectFit: 'cover',
    borderRadius: 10
  }
});

export default function ImgMediaCard({ track }) {
  const classes = useStyles();

  const { name, image, url, artist } = track;

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            alt="artist photo"
            image={image[2]['#text']}
            title="artist photo"
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h4">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="h6">
              {url}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component={Link}
              to={`/artistinfo/${artist.name}`}
            >
              {artist.name}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Divider />
    </Card>
  );
}

ImgMediaCard.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.array,
    artist: PropTypes.object
  })
};

ImgMediaCard.defaultProps = {
  track: {
    name: '',
    url: 'title',
    image: [],
    artist: {}
  }
};
