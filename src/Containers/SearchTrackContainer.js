/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '@material-ui/core';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';
import SearchField from '../Components/SearchField';
import CardSearchTrack from '../Components/CardSearchTrack';
import { getSearchTracks } from '../store/actions/actionsTrack';

const SearchTrackContainer = ({ getSearchTracks, track, error, isLoading }) => {
  function handleSeachTrack(str) {
    getSearchTracks(str);
  }

  const list = track.map((item, _) => <CardSearchTrack key={_} track={item} />);

  const content = error ? <Error error={error} /> : list;

  return (
    <Container component="main" maxWidth="md" pt={2}>
      <SearchField handleSeachTrack={handleSeachTrack} />
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
