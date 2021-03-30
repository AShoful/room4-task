import { combineReducers } from 'redux';

import chart from './chart';
import track from './track';
import artist from './artist';
import app from './app';

export default combineReducers({
  chart,
  track,
  artist,
  app
});
