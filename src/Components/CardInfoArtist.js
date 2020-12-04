/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  CardMedia: {
    width: '100%',
    margin: 5,
    height: 150,
    objectFit: 'cover',
    borderRadius: 10
  }
});

export default function ImgMediaCard({ artist }) {
  const classes = useStyles();

  if (!artist.name) {
    return <Redirect to="/" />;
  }

  const { name, image, bio, tags } = artist;
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            alt="image artist"
            image={image[2]['#text']}
            title="image artist"
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h4">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {bio.content}
            </Typography>
            <Grid container justify="space-between">
              {tags.tag.map((item, i) => (
                <Button key={i} size="small" color="primary" variant="outlined">
                  {item.name}
                </Button>
              ))}
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
      <Divider />
    </Card>
  );
}

ImgMediaCard.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.array,
    bio: PropTypes.object,
    tags: PropTypes.object
  })
};

ImgMediaCard.defaultProps = {
  artist: {
    name: '',
    image: [],
    bio: {},
    tags: {}
  }
};
