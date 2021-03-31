/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  CardMedia: {
    width: '95%',
    marginTop: theme.spacing(1),
    objectFit: 'contain',
    borderRadius: '50%',
    border: '3px solid rgba(0,0,0,0.2)',
    marginBottom: theme.spacing(4)
  },
  name: {
    color: theme.palette.primary.main,
    fontSize: 36,
    marginBottom: 0
  },
  bio: {
    fontSize: 16
  },
  button: {
    fontSize: 12,
    margin: theme.spacing(1),
    fontWeight: 600
  }
}));

export default function ImgMediaCard({ artist }) {
  const classes = useStyles();

  const { name, image, bio, tags } = artist;
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            alt="image artist"
            image={image[2]['#text']}
            title="image artist"
          />
          <Grid container justify="space-around">
            {tags.tag.map((item, i) => (
              <Button
                className={classes.button}
                key={i}
                size="small"
                color="primary"
                variant="outlined"
              >
                {item.name}
              </Button>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CardContent>
            <Typography
              className={classes.name}
              gutterBottom
              variant="subtitle1"
              component="h4"
            >
              {name}
            </Typography>
            <Typography
              className={classes.bio}
              variant="subtitle2"
              color="textSecondary"
              component="p"
            >
              {bio.content}
            </Typography>
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
