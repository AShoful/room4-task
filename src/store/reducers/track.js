import { GET_SEARCH_TRACK } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case GET_SEARCH_TRACK:
      return [...action.track];
    default:
      return state;
  }
}
