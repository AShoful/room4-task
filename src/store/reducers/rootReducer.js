import { combineReducers } from 'redux';

import chart from './chart';
import track from './track';
import artist from './artist';

export default combineReducers({
  chart,
  track,
  artist
});
