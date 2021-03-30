import { GET_TOP_TRACKS } from '../actions/actionTypes';

// const initialState = {
//   topTracks: []
// };

export default function authReducer(state = [], action) {
  switch (action.type) {
    case GET_TOP_TRACKS:
      return [...action.topTracks.tracks.track];
    default:
      return state;
  }
}
