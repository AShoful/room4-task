import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TopTracksListContainer from './Containers/TopTracksListContainer';
import InfoArtistContainer from './Containers/InfoArtistContainer';
import SearchTrackContainer from './Containers/SearchTrackContainer';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={TopTracksListContainer} />
      <Route path="/artistinfo/:name" component={InfoArtistContainer} />
      <Route path="/searchtrack" component={SearchTrackContainer} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
