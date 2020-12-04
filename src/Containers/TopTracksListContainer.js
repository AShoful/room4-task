/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import CardTopArtist from '../Components/CardTopTrack';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';

import { getTopTracks } from '../store/actions/actionsChart';

const TopTracksListContainer = (props) => {
  const { topTracks, isLoading, getTopTracks, error } = props;

  React.useEffect(() => {
    if (!topTracks.length) {
      getTopTracks();
    }
  }, [getTopTracks, topTracks.length]);

  const list = topTracks.map((item, _) => (
    <CardTopArtist key={_} track={item} />
  ));

  const content = error ? <Error error={error} /> : list;

  return (
    <Container component="main">
      {!isLoading ? content : <Sceleton />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  topTracks: state.chart.topTracks,
  isLoading: state.chart.loading,
  error: state.chart.error
});
const mapDispatchToProps = (dispatch) => ({
  getTopTracks: () => dispatch(getTopTracks())
});

TopTracksListContainer.propTypes = {
  getTopTracks: PropTypes.func,
  topTracks: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

TopTracksListContainer.defaultProps = {
  getTopTracks: () => {},
  topTracks: [],
  isLoading: false,
  error: ''
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracksListContainer);
