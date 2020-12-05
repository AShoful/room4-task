/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WebLink from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '3px solid rgba(0,0,0,0.2)'
  },
  CardMedia: {
    width: '95%',
    marginTop: theme.spacing(1),
    objectFit: 'contain',
    borderRadius: '50%',
    border: '3px solid rgba(0,0,0,0.2)'
  },
  name: {
    color: theme.palette.primary.main,
    fontSize: 32,
    marginBottom: 4
  },
  content: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(3)
  },
  Link: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 24,
    fontWeight: 600
  }
}));

export default function ImgMediaCard({ track }) {
  const classes = useStyles();

  const { name, image, url, artist } = track;

  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            alt="artist photo"
            image={image[3]['#text']}
            title="artist photo"
          />
        </Grid>
        <Grid item xs={12} sm={10}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.name}
              gutterBottom
              variant="subtitle1"
              component="h4"
            >
              {name}
            </Typography>
            <Typography
              className={classes.Link}
              variant="subtitle1"
              component={Link}
              to={`/artistinfo/${artist.name}`}
            >
              {artist.name}
            </Typography>
            <Typography
              className={classes.url}
              gutterBottom
              variant="caption"
              component="h6"
            >
              <WebLink target="_blank" rel="noopener" href={url}>
                More info on last.fm
              </WebLink>
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
