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

import { clearArtist, getInfoArtist } from '../store/actions/actionsArtist';

const InfoArtistContainer = (props) => {
  const artistName = props.match.params.name;
  const { loading, error } = useSelector((state) => state.app);
  const artist = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getInfoArtist(artistName));
    return () => dispatch(clearArtist());
  }, [artistName, dispatch]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container component="main">
      {loading || !Object.keys(artist).length ? (
        <Sceleton count={1} />
      ) : (
        <CardInfoArtist artist={artist} />
      )}
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
