import { GET_INFO_ARTIST } from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case GET_INFO_ARTIST:
      return { artist: action.infoArtist.artist };
    default:
      return state;
  }
}
