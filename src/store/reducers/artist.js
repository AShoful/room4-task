import {
  FETCH_START,
  GET_INFO_ARTIST,
  FETCH_ERROR
} from '../actions/actionTypes';

const initialState = {
  infoArtist: {},
  error: '',
  loading: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case GET_INFO_ARTIST:
      return {
        ...state,
        infoArtist: action.infoArtist,
        error: '',
        loading: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.error.response.data.message,
        loading: false
      };
    default:
      return state;
  }
}
