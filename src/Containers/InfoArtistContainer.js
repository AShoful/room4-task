/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import CardInfoArtist from '../Components/CardInfoArtist';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';

import { getInfoArtist } from '../store/actions/actionsArtist';

const InfoArtistContainer = (props) => {
  const artistName = props.match.params.name;
  const { infoArtist, isLoading, getInfoArtist, error } = props;

  React.useEffect(() => {
    getInfoArtist(artistName);
  }, [artistName, getInfoArtist]);

  const content = error ? (
    <Error error={error} />
  ) : (
    <CardInfoArtist artist={infoArtist.artist} />
  );

  return (
    <Container component="main">
      {!isLoading || Object.keys(infoArtist).length !== 0 ? (
        content
      ) : (
        <Sceleton count={1} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  infoArtist: state.artist.infoArtist,
  isLoading: state.artist.loading,
  error: state.artist.error
});
const mapDispatchToProps = (dispatch) => ({
  getInfoArtist: (name) => dispatch(getInfoArtist(name))
});

InfoArtistContainer.propTypes = {
  getInfoArtist: PropTypes.func,
  match: PropTypes.object,
  infoArtist: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

InfoArtistContainer.defaultProps = {
  getInfoArtist: () => {},
  infoArtist: {},
  match: {},
  isLoading: false,
  error: ''
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InfoArtistContainer)
);
