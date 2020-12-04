/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, Button, Container, TextField } from '@material-ui/core';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';
import { getSearchTracks } from '../store/actions/actionsTrack';

const SearchTrackContainer = ({ getSearchTracks, track, error, isLoading }) => {
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

  const content = error ? <Error error={error} /> : list;

  return (
    <Container component="main" maxWidth="md" pt={2}>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              label="Search track"
              name=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => handleSeachTrack(value)}>Search</Button>
          </Grid>
        </Grid>
      </form>
      {!isLoading ? content : <Sceleton />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  track: state.track.track,
  error: state.track.error,
  isLoading: state.track.loading
});

const mapDispatchToProps = (dispatch) => ({
  getSearchTracks: (str) => dispatch(getSearchTracks(str))
});

SearchTrackContainer.propTypes = {
  getSearchTracks: PropTypes.func,
  track: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

SearchTrackContainer.defaultProps = {
  getSearchTracks: () => {},
  track: [],
  isLoading: false,
  error: ''
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTrackContainer);
