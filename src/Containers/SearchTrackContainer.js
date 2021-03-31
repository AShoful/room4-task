/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';
import SearchField from '../Components/SearchField';
import CardSearchTrack from '../Components/CardSearchTrack';
import { getSearchTracks } from '../store/actions/actionsTrack';

const SearchTrackContainer = () => {
  const { error, loading } = useSelector((state) => state.app);
  const track = useSelector((state) => state.track);
  const dispatch = useDispatch();

  function handleSeachTrack(str) {
    dispatch(getSearchTracks(str));
  }

  if (error) {
    return <Error error={error} />;
  }
  const list = track.map((item, _) => <CardSearchTrack key={_} track={item} />);

  return (
    <Container component="main" maxWidth="md" pt={2}>
      <SearchField handleSeachTrack={handleSeachTrack} />
      {!loading ? list : <Sceleton />}
    </Container>
  );
};

export default SearchTrackContainer;
