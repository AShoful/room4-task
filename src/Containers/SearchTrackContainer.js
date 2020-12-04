/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, Button, Container, TextField } from '@material-ui/core';

import { getSearchTracks } from '../store/actions/actionsTrack';

const SearchTrackContainer = ({ getSearchTracks, track }) => {
  const [value, setValue] = useState('');

  function handleSeachTrack(str) {
    getSearchTracks(str);
  }

  const list = track.map((item, _) => (
    <div key={_}>
      {item.name}
      {item.artist}
    </div>
  ));

  return (
    <Container component="main" maxWidth="md" pt={2}>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              label="Saerch track"
              name=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              fullWidth
              id="title"
            />
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleSeachTrack(value)}>Search</Button>
          </Grid>
        </Grid>
      </form>
      {list}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  track: state.track.track
});

const mapDispatchToProps = (dispatch) => ({
  getSearchTracks: (str) => dispatch(getSearchTracks(str))
});

SearchTrackContainer.propTypes = {
  getSearchTracks: PropTypes.func,
  track: PropTypes.array
};

SearchTrackContainer.defaultProps = {
  getSearchTracks: () => {},
  track: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTrackContainer);
