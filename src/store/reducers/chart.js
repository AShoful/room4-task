import {
  FETCH_START,
  GET_TOP_TRACKS,
  FETCH_ERROR
} from '../actions/actionTypes';

const initialState = {
  topTracks: [],
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
    case GET_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.topTracks.tracks.track,
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
