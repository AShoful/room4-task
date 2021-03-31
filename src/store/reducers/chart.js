import { GET_TOP_TRACKS } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case GET_TOP_TRACKS:
      return [...action.topTracks.tracks.track];
    default:
      return state;
  }
}
