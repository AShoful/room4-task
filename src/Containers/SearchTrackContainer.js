/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';
import SearchField from '../Components/SearchField';
import CardSearchTrack from '../Components/CardSearchTrack';
import { fetchTracks } from '../store/actions/sagaTrack';

const SearchTrackContainer = () => {
  const tracks = useSelector((state) => state.track);
  const { loading, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  function handleSeachTrack(str) {
    dispatch(fetchTracks(str));
  }

  const list = tracks.map((item, _) => (
    <CardSearchTrack key={_} track={item} />
  ));

  const content = error ? <Error error={error} /> : list;

  return (
    <Container component="main" maxWidth="md" pt={2}>
      <SearchField handleSeachTrack={handleSeachTrack} />
      {!loading ? content : <Sceleton />}
    </Container>
  );
};

export default SearchTrackContainer;
