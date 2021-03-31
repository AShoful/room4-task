/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import CardTopArtist from '../Components/CardTopTrack';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';

import { getTopTracks } from '../store/actions/actionsChart';

const TopTracksListContainer = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.chart);
  const { loading, error } = useSelector((state) => state.app);

  React.useEffect(() => {
    if (!tracks.length) {
      dispatch(getTopTracks());
    }
  }, [tracks.length, dispatch]);

  if (error) {
    return <Error error={error} />;
  }

  const list = tracks.map((item, _) => <CardTopArtist key={_} track={item} />);

  return (
    <Container component="main">{!loading ? list : <Sceleton />}</Container>
  );
};

export default TopTracksListContainer;
