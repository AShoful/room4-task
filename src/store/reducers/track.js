import { GET_SEARCH_TRACK } from '../sagas/actionTypes';

export default function authReducer(state = [], action) {
  switch (action.type) {
    case GET_SEARCH_TRACK:
      return [...action.track];
    default:
      return state;
  }
}
