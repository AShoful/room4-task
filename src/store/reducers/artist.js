import { GET_INFO_ARTIST, CLEAR_INFO_ARTIST } from '../actions/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_INFO_ARTIST:
      return { ...action.infoArtist.artist };
    case CLEAR_INFO_ARTIST:
      return {};
    default:
      return state;
  }
}
