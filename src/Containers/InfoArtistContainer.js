/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import CardInfoArtist from '../Components/CardInfoArtist';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';

import { fetchArtist } from '../store/actions/sagaArtist';

const InfoArtistContainer = (props) => {
  const artistName = props.match.params.name;
  const artist = useSelector((state) => state.artist.artist);
  const { loading, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchArtist(artistName));
  }, [artistName, dispatch]);

  const content = error ? (
    <Error error={error} />
  ) : (
    <CardInfoArtist artist={artist} />
  );

  return (
    <Container component="main">
      {!loading ? content : <Sceleton count={1} />}
    </Container>
  );
};

InfoArtistContainer.propTypes = {
  match: PropTypes.object
};

InfoArtistContainer.defaultProps = {
  match: {}
};

export default withRouter(InfoArtistContainer);
