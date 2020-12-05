/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Card, Grid, Divider, Typography, Container } from '@material-ui/core';

// import { noImage } from '../image/no-image';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    padding: 0
  },
  Card: {
    borderBottom: '2px solid rgba(0,0,0, 0.2)'
  },
  field: {
    paddingLeft: 8
  }
});

export default function CardSearchTrack({ track }) {
  const classes = useStyles();

  const { name, artist } = track;

  return (
    <Container className={classes.root}>
      <Card className={classes.Card}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.field}
              color="textSecondary"
              variant="caption"
              component="p"
            >
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.field}
              color="textSecondary"
              variant="caption"
              component="p"
            >
              {artist}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </Card>
    </Container>
  );
}

CardSearchTrack.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string
  })
};

CardSearchTrack.defaultProps = {
  track: {
    name: '',
    artist: ''
  }
};
