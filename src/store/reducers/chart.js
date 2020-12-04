import {
  FETCH_START_TOP_TRAKS,
  GET_TOP_TRACKS,
  FETCH_ERROR_TOP_TRAKS
} from '../actions/actionTypes';

const initialState = {
  topTracks: [],
  error: '',
  loading: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START_TOP_TRAKS:
      return {
        ...state,
        loading: true
      };
    case GET_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.topTracks.tracks.track,
        error: '',
        loading: action.loading
      };
    case FETCH_ERROR_TOP_TRAKS:
      return {
        ...state,
        error: action.error.response.data.message,
        loading: false
      };
    default:
      return state;
  }
}
